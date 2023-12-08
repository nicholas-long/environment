# fsdb implementation details

- concept of `fsdb implementation details`

```
```

` zet/20231122053807/README.md `

# fsdb file structure

- root directory
- data - data directory
  - files for each partition: newest additions file and the gzipped version
- hooks directory
- .fsdbconfig - file to source for database settings

## how data is stored
- the first field of the data is regarded as an ID
- data stored as TSV or CSV in two partition files:
  - a compressed file holds all existing data
  - an uncompressed file holds recently added data.
    - this data can be compressed and appended to the compressed file periodically by a cron.

```
```


# fsdb delete functionality

- concept of `fsdb delete functionality`
- print existing partition, recompress, and skip the row

```bash
└─$ fsdb init -p 10
initializing config
10 partitions ok

└─$ seq 1 100000 | fsdb load
using 10 partitions
using 10 partitions
using 10 partitions
using 10 partitions

└─$ fsdb delete 999
deleting 999 from partition 2
rm: cannot remove 'data/2': No such file or directory

└─$ fsdb search 999
using 10 partitions
scanning partition 2

└─$ fsdb print | wc -l
99999
```


# fsdb ingest subcommand notes

- https://github.com/nicholas-long/private/blob/main/filehash.io/testdb/ingest.awk
- https://github.com/nicholas-long/private/blob/main/filehash.io/testdb/partition.awk
- i think ingest needs to compress things.
  - compress can't only happen in a cron or else this program is just making huge data files
  - when it starts, it can count the initial lines
  - this can hapen at a regular basis, like 100 rows.
    - i don't think this needs to be configurable?
- without optimizing generating hashcodes first, fsdb is too slow to be usable for big data. it will take weeks to load billions of rows.
  - i think this is because awk is using a ton of hashmap lookups to calculate the hashcode. this is fine for searching, but not for massive ingesting
  - when i used this type of database to store billions of hashes, i split the ingesting into a bunch of processes that were all receiving data.
    - each one was responsible for its own set of partitions - they should never attempt to access the same set of files
  - [20231004133128](/zet/20231004133128/README.md) an optimized hashcode generator for partitioning work into multiple processes
- can gawk keep indefinite numbers of files open?
  - i had an implementation to only write a certain number of files at a time with an MRU set that i brought over to here.
- i could make the number of rows before compressing configurable. i might be able to speed up ingesting data if there is less compressing happening.
  - from experimental testing, it seems that 1000 uncompressed rows is acceptable per partition. this will speed up the ingesting if compressing happens less often.

## debugging
```
awk: /home/parallels/environment/zet/20230929145418/subcommands/ingest:19: (FILENAME=- FNR=1) fatal: division by zero attempted in `%'
```

## code

- old ingest code
```awk
#!/usr/bin/awk -f
BEGIN {
  FS="\t"
  OFS="\t"
  hexchars = "0123456789abcdef"
  split(hexchars,arr,"")
  for (x in arr)
    prog[arr[x]] = "awk -f partition.awk -v ch=" arr[x] # prepare 16 string commands for 16 programs to start
}
NF > 4 { # checking the column count to find the data i want
  md5 = $1
  ch = substr(md5,1,1) #first letter of md5 hash
  print | prog[ch] # select the program that belongs to that letter and send it
  print md5 | "./add_bloom.sh" # add to bloom filter - this step would be like running the hook program that extends the functionality of this database
}
NR % 1000000 == 0 { # print status every million rows
  print "example", md5
  print "overall", NR / 1000000 "M"
}
```

- old partition code
```awk
#!/usr/bin/awk -f
BEGIN {
  compress_line_limit = 100
  FS = "\t"
  OFS = "\t"
  parallel_cmd = "parallel"
}
NF > 4 {
  md5 = $1
  part = substr(md5, 1, 3)
  partfn = "data/" part
  print >> partfn
  mru[partfn] = NR
  if (++lines_written[part] > compress_line_limit) {
    close(partfn)
    delete mru[partfn]
    #print "compressing", part, "total read", NR
    system( "./compress.sh " part )
    lines_written[part] = 0
  }
  if (length(mru) > 64) {
    oldest = 0
    for (p in mru) if (mru[p] < oldest) oldest = mru[p]
    for (p in mru) if (mru[p] == oldest) {
      close(p)
      delete mru[p]
    }
  }
}
NR % 100000 == 0 {
  print "status", ch, NR
}
```

## notes about code
- it looks like it was partitioning itself into 16 processes based on the characters
- that might be overkill?


# fsdb missing functionality for set difference

- concept of `fsdb missing functionality for set difference`
- when using fsdb like a set, can do set difference

```
└─$ seq 1 10000 | fsdb ingest
using 10 partitions

└─$ fsdb missing
using 10 partitions
123
345
456
asdf
jkl
scanning partition 0
scanning partition 2
scanning partition 4
scanning partition 5
jkl
asdf
```


# hooks needed for fsdb

- hooks when ingesting to add IDs to the bloom filter
  - call something like `ingest_hook` in the database to pass in duplicate data if such a program exists
- hooks when searching to return early for specific IDs
  - something like `search_hook` called before searches, can filter things out

```
```


# fsdb subcommand to remove duplicate sequential rows from all partitions

- concept of `fsdb subcommand to remove duplicate rows`
- testing uncovered that there is a lot of noise written to stderr

```bash
┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb init -p 10
initializing config
10 partitions ok

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ seq 1 100000 | fsdb load
using 10 partitions
using 10 partitions
using 10 partitions
using 10 partitions

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb print | wc -l
100000

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb load
asdf123
asdf123
asdf123
testing duplicate rows
using 10 partitions

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb print | wc -l
100004

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb remove-duplicates
done with 0 : 9999
rm: cannot remove 'data/0': No such file or directory
done with 1 : 10001
done with 2 : 9999
rm: cannot remove 'data/2': No such file or directory
done with 3 : 10002
done with 4 : 9999
rm: cannot remove 'data/4': No such file or directory
done with 5 : 10001
done with 6 : 9999
rm: cannot remove 'data/6': No such file or directory
done with 7 : 10002
done with 8 : 9998
done with 9 : 10002
rm: cannot remove '/tmp/tmp.gTmRmMDh8Z.gz': No such file or directory

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb print | wc -l
100002
```

` zet/20231009173031/README.md `

# testing reoptimize functionality

- the purpose of the reoptimize subcommand is to rewrite all compressed streams as continuous gzip streams to optimize space
- testing it with this script

```bash
fsdb init -p 50
zcat ~/vulnerable-hashes-downloads-2022-09-22.gz | fsdb load
echo "data size"
du -hs data
echo "lines in database"
fsdb print | wc -l
echo "calling reoptimize..."
fsdb reoptimize >/dev/null 2>/dev/null
echo "data size"
du -hs data
echo "lines in database"
fsdb print | wc -l
fsdb erase

# testing the code
┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231005174423]
└─$ ./test-reoptimize
initializing config
50 partitions ok
using 50 partitions
using 50 partitions
data size
56M     data
lines in database
1553008
calling reoptimize...
data size
52M     data
lines in database
1553008
```

` zet/20231005174423/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas
- [20231001151606](/zet/20231001151606/README.md) hashcodes for fsdb partitioning
- [20231004133128](/zet/20231004133128/README.md) an optimized hashcode generator for partitioning work into multiple processes
- [20231003062001](/zet/20231003062001/README.md) fsdb use cases
- [20231003063630](/zet/20231003063630/README.md) adding timestamps to fsdb

Tags:

    #enhancement #feature #details #database #test

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

` zet/20230930042658/README.md `

# Related

- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas
- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20231001151606](/zet/20231001151606/README.md) hashcodes for fsdb partitioning
- [20231004133128](/zet/20231004133128/README.md) an optimized hashcode generator for partitioning work into multiple processes
- [20231005170329](/zet/20231005170329/README.md) hooks needed for fsdb

Tags:

    #database

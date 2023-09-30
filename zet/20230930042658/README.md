# fsdb ingest subcommand notes

- https://github.com/nicholas-long/private/blob/main/filehash.io/testdb/ingest.awk
- https://github.com/nicholas-long/private/blob/main/filehash.io/testdb/partition.awk

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
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea

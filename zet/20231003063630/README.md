# adding timestamps to fsdb

- concept of `adding timestamps to fsdb`
- i think timestamps should be optional. they will create bloat if they are not needed for a particular use case.
  - therefore, they are a new config setting that needs to be exported
- but if they are needed, it would be really neat to search all partitions by timestamps
  - find events occuring within x seconds or minutes of a time
- awk systime timestamps are only accurate to the second - epoch time. i think this is okay for small projects.
- [x] need to add code changes to
  - [x] initialize code - extra option. required. `-t` for timestamps or `-n` for no timestamps
  - [x] fsdb - export the new env var
  - [x] ingest code
    - check env var at beginning
  - [x] search code
    - check args at beginning and see if user wants timestamps printed - only if they are available in database
- [ ] create new function to search by time
  - could use existing date functions to allow querying by human readable dates
- 2023-10-03 testing this. i'm going to try adding a few rows at different times
  - [x] test timestamps
  - [x] check that the existing functionality still works if timestamps are disabled
    - [20231003062001](/zet/20231003062001/README.md) fsdb use case - using as a set

- testing timestamps for data
```bash
awk '
BEGIN {
  print systime()
}
'
1696194880
```

- testing the new code changes
```bash
┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231003063630]
└─$ fsdb init -p 2 -t
where is my config file .fsdbconfig ?
2 partitions ok

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231003063630]
└─$ ./generate-test-data | fsdb ingest
using   2       partitions
wc: data/0: No such file or directory
wc: data/1: No such file or directory

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231003063630]
└─$ fsdb print
1696341747      724796d44e event
1696341749      f3fc10ea23 event
1696341753      f8be8aac93 event
1696341754      0f8c5d21e3 event
1696341755      dd70eb5d92 event
1696341748      a24f50eff3 event
1696341750      c718141e91 event
1696341751      b3df78f9f8 event
1696341752      5dc3d49ef0 event
1696341756      c64ad19e39 event

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231003063630]
└─$ echo c64ad19e39 | fsdb search
using 2 partitions
scanning partition 1
gzip: data/1.gz: No such file or directory
1696341756      c64ad19e39 event
```

` zet/20231003063630/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20231003062001](/zet/20231003062001/README.md) fsdb use case - using as a set

Tags:

    #idea #data #database

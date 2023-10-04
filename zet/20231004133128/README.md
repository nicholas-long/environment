# an optimized hashcode generator for partitioning work into multiple processes

- without optimizing generating hashcodes first, fsdb is too slow to be usable for big data. it will take weeks to load billions of rows.
  - i think this is because awk is using a ton of hashmap lookups to calculate the hashcode. this is fine for searching, but not for massive ingesting
  - when i used this type of database to store billions of hashes, i split the ingesting into a bunch of processes that were all receiving data.
    - each one was responsible for its own set of partitions - they should never attempt to access the same set of files
- the general idea is to add this into the stream early in the pipeline, before putting data into partitions. i want to split up the work into a bunch of processes
- in order to do that, i need to precompute the hashcode and insert it before the string using optimized c code
- changes required
  - new subcommand `load` runs multiple processes to split up the lines
  - new ingest script `ingest-opt` uses provided hashcode and runs as subcommand.
    - runs as multiple subprocesses of `load` command.

- test program
```bash
gcc fsdb-hashcode.c -o program && partitions=10 ./program

gcc zet/20231004133128/fsdb-hashcode.c -o zet/20230929145418/subcommands/hashcode-optimized
```

- test awk code to strip out part before tab
```bash

echo $'before\tafter' | awk '
{
  gsub(/^[^\t]+\t/, "")
  print
}
'

```

## testing code
- load is the new subcommand to test
- my tests worked on first try! how often does that happen?
```bash
┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231004133128]
└─$ fsdb init -p 10
initializing config
10 partitions ok

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231004133128]
└─$ seq 1 10000 | fsdb load
using 10 partitions
using 10 partitions

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231004133128]
└─$ fsdb print | wc -l
10000

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231004133128]
└─$ echo 999 | fsdb search
using 10 partitions
scanning partition 2
999

```

- side by side testing with old ingest code
  - i think the difference in real time is due to compression happening?
```
┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231004133128]
└─$ time bash -c 'seq 1 1000000 | fsdb load'
using 10 partitions
using 10 partitions

real    0m14.181s
user    0m25.583s
sys     0m1.909s

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231004133128]
└─$ time bash -c 'seq 1 1000000 | fsdb ingest'
using 10 partitions

real    0m29.432s
user    0m27.883s
sys     0m2.038s
```

` zet/20231004133128/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230930042658](/zet/20230930042658/README.md) fsdb ingest subcommand notes
- [20231001151606](/zet/20231001151606/README.md) hashcodes for fsdb partitioning

Tags:

    #idea

# an optimized hashcode generator for partitioning work into multiple processes

- without optimizing generating hashcodes first, fsdb is too slow to be usable for big data. it will take weeks to load billions of rows.
  - i think this is because awk is using a ton of hashmap lookups to calculate the hashcode. this is fine for searching, but not for massive ingesting
  - when i used this type of database to store billions of hashes, i split the ingesting into a bunch of processes that were all receiving data.
    - each one was responsible for its own set of partitions - they should never attempt to access the same set of files
- the general idea is to add this into the stream early in the pipeline, before putting data into partitions. i want to split up the work into a bunch of processes
- in order to do that, i need to precompute the hashcode and insert it before the string using optimized c code

- test program
```bash
gcc fsdb-hashcode.c -o program && partitions=10 ./program

gcc zet/20231004133128/fsdb-hashcode.c -o zet/20230929145418/subcommands/hashcode-optimized
```

` zet/20231004133128/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230930042658](/zet/20230930042658/README.md) fsdb ingest subcommand notes
- [20231001151606](/zet/20231001151606/README.md) hashcodes for fsdb partitioning

Tags:

    #idea

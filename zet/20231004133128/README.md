# an optimized hashcode generator for partitioning work into multiple processes

- concept of `an optimized hashcode generator for partitioning work into multiple processes`
- the general idea is to add this into the stream early in the pipeline, before putting data into partitions. i want to split up the work into a bunch of processes
- in order to do that, i need to precompute the hashcode and insert it before the string using optimized c code

```
```

` zet/20231004133128/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230930042658](/zet/20230930042658/README.md) fsdb ingest subcommand notes

Tags:

    #idea

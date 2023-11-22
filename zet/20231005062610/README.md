# fsdb TODO items

- [x] try optimizing ingest to use multiple processes and split work
  - 2023-10-04 i have been ingesting hash data into fsdb for at least 14 hours, and it has only added about 6 million rows
  - [20231004133128](/zet/20231004133128/README.md) an optimized hashcode generator for partitioning work into multiple processes
- [x] add timestamps before rows and change logic to account for that
  - [20231003063630](/zet/20231003063630/README.md) adding timestamps to fsdb
- [x] search subcommand should accept, process, and use arguments if given instead of letting awk treat them as files
- [x] recompress or reoptimize - rewrite all compressed streams as continuous gzip streams to optimize space
  - [20231005174423](/zet/20231005174423/README.md) testing reoptimize functionality
- [x] search subcommand should flush search results to output immediately
- implement hooks - later
- implement bloom filter - later
  - [20231002021919](/zet/20231002021919/README.md) bloom filter for fsdb
- [x] create feature to remove duplicate rows
  - maybe just sequential duplicates?
  - [20231009173031](/zet/20231009173031/README.md) fsdb subcommand to remove duplicate sequential rows from all partitions
- [ ] publish and move fsdb to its own repository
- could simplify ingest script and require ulimit to be greater than the number of partitions to speed up

```
```

` zet/20231005062610/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas
- [20231002021919](/zet/20231002021919/README.md) bloom filter for fsdb
- [20230930041018](/zet/20230930041018/README.md) fsdb future ideas
- [20231005174423](/zet/20231005174423/README.md) testing reoptimize functionality
- [20231009173031](/zet/20231009173031/README.md) fsdb subcommand to remove duplicate sequential rows from all partitions
- [20231122053807](/zet/20231122053807/README.md) fsdb implementation details

Tags:

    #todo #list

# fsdb TODO items

- [x] try optimizing ingest to use multiple processes and split work
  - 2023-10-04 i have been ingesting hash data into fsdb for at least 14 hours, and it has only added about 6 million rows
  - [20231004133128](/zet/20231004133128/README.md) an optimized hashcode generator for partitioning work into multiple processes
- [x] add timestamps before rows and change logic to account for that
  - [20231003063630](/zet/20231003063630/README.md) adding timestamps to fsdb
- [x] search subcommand should accept, process, and use arguments if given instead of letting awk treat them as files
- [ ] implement hooks
- [ ] implement bloom filter

```
```

` zet/20231005062610/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea #todo #list

# adding timestamps to fsdb

- concept of `adding timestamps to fsdb`
- i think timestamps should be optional. they will create bloat if they are not needed for a particular use case.
  - therefore, they are a new config setting that needs to be exported
- but if they are needed, it would be really neat to search all partitions by timestamps
  - find events occuring within x seconds or minutes of a time
- awk systime timestamps are only accurate to the second - epoch time. i think this is okay for small projects.
- [ ] need to add code changes to
  - initialize code - extra option. required. `-t` for timestamps or `-n` for no timestamps
  - ingest code
    - check env var at beginning
  - search code
    - check args at beginning and see if user wants timestamps printed - only if they are available in database

```
```

` zet/20231003063630/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea #data #database

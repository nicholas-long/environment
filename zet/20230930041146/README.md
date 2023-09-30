# fsdb developing ideas

- can test compressing files when things are running by writing a python script to keep file(s) open for testing
- data is stored in partition files named after the _last_ 3 characters of the ID
  - so if you use it with sequential IDs, it will partition reasonably
- bloom filter https://github.com/nicholas-long/bfbf
- i like that there's a basic set of ideas here to get a database working, and extra features like bloom filters and indexing things or looking things up by timestamps can be handled by a separate database
  - call something like `ingest_hook` in the database to pass in duplicate data if such a program exists
  - something like `search_hook` called before searches, can filter things out

### subcommand implementation
- subcommand directory
- subcommands can call other commands
  - name of original program is stored in env var `fsdb_prog`

```
```

` zet/20230930041146/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) file based database for partitioning and event sourced data
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230930041018](/zet/20230930041018/README.md) fsdb future ideas

Tags:

    #idea #list #file #database

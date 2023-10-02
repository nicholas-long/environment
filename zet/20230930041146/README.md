# fsdb developing ideas

- put ideas not essential for basic implementation in [20230930041018](/zet/20230930041018/README.md) fsdb future ideas
- can test compressing files when things are running by writing a python script to keep file(s) open for testing
- data is stored in partition files named after the partition number
  - so if you use it with sequential IDs, it will partition reasonably
- can gawk keep indefinite numbers of files open? i had an implementation to only write a certain number at a time. i could bring that over to here.
- i like that there's a basic set of ideas here to get a database working, and extra features like bloom filters and indexing things or looking things up by timestamps can be handled by a separate database
  - call something like `ingest_hook` in the database to pass in duplicate data if such a program exists
  - something like `search_hook` called before searches, can filter things out
- hashcodes [20231001151606](/zet/20231001151606/README.md) hashcodes for fsdb project

### subcommand implementation
- subcommand directory
- subcommands can call other commands
  - name of original program is stored in env var `fsdb_prog`

` zet/20230930041146/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230930041018](/zet/20230930041018/README.md) fsdb future ideas
- [20230930042658](/zet/20230930042658/README.md) fsdb ingest subcommand notes
- [20231001151606](/zet/20231001151606/README.md) hashcodes for fsdb project
- [20231002021919](/zet/20231002021919/README.md) bloom filter for fsdb

Tags:

    #idea #list #file #database

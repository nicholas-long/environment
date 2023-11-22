# fsdb developing ideas

- put ideas not essential for basic implementation in [20230930041018](/zet/20230930041018/README.md) fsdb future ideas
- can test compressing files when things are running by writing a python script to keep file(s) open for testing
- i like that there's currently a basic set of ideas here to get a database working, and extra features like bloom filters can be handled by separate code

### subcommand implementation
- subcommand directory
- subcommands can call other commands
  - name of original program is stored in env var `fsdb_prog`

# hooks needed for fsdb

- hooks when ingesting to add IDs to the bloom filter
  - call something like `ingest_hook` in the database to pass in duplicate data if such a program exists
- hooks when searching to return early for specific IDs
  - something like `search_hook` called before searches, can filter things out

` zet/20230930041146/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230930041018](/zet/20230930041018/README.md) fsdb future ideas
- [20231001151606](/zet/20231001151606/README.md) hashcodes for fsdb partitioning
- [20231002021919](/zet/20231002021919/README.md) bloom filter for fsdb
- [20231005062610](/zet/20231005062610/README.md) fsdb TODO items
- [20231122053807](/zet/20231122053807/README.md) fsdb implementation details

Tags:

    #list #file #database

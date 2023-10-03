# fsdb project - file based database for partitioning and event sourced data

- concept of `file based database for partitioning and event sourced data`
  - like a local file storage version of a kafka database
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas
  - [20230930041018](/zet/20230930041018/README.md) fsdb future ideas

## how data is stored
- the first field of the data is regarded as an ID
- data stored as TSV or CSV in two partition files:
  - a compressed file holds all existing data
  - an uncompressed file holds recently added data.
    - this data can be compressed and appended to the compressed file periodically as data is inserted so the overall size of the database doesn't grow too fast
- should store a timestamp with each row
  - should ignore it when printing unless provided with a command line option to print timestamp?
- [20230930040657](/zet/20230930040657/README.md) fsdb file structure
- bloom filter could be optional feature implemented with hooks
  - [20231002021919](/zet/20231002021919/README.md) bloom filter for fsdb

## use cases
- large lookup table like dynamo db
- [20231003062001](/zet/20231003062001/README.md) fsdb use case - using as a set

## implementation
- [ ] add timestamps before rows and change logic to account for that
- basic set of features / subcommands needed for database
  - initialize and set up number of partitions
  - search for one ID or multiple
  - ingest data - pipe it into standard input and an awk script will put it where it belongs
  - print all data
  - compress subcommand - compress text files and append to gzip streams together. called by ingest when a partition gets too large

- testing timestamps for data
```bash
awk '
BEGIN {
  print systime()
}
'
1696194880
```

` zet/20230929145418/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230928171946](/zet/20230928171946/README.md) data analysis scripting hub
- [20230929153207](/zet/20230929153207/README.md) computer science experiments hub
- [20230929194846](/zet/20230929194846/README.md) testing if shortcuts will work and not pick up extra files
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas
- [20230930041018](/zet/20230930041018/README.md) fsdb future ideas
- [20230930040657](/zet/20230930040657/README.md) fsdb file structure
- [20230930042658](/zet/20230930042658/README.md) fsdb ingest subcommand notes
- [20230930224454](/zet/20230930224454/README.md) problems encountered with zkvr while testing this environment
- [20231001151606](/zet/20231001151606/README.md) hashcodes for fsdb partitioning
- [20231001222624](/zet/20231001222624/README.md) test gzip append functionality
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20231003022851](/zet/20231003022851/README.md) data engineering hub
- [20231003062001](/zet/20231003062001/README.md) fsdb use case - using as a set

Tags:

    #data #file #database #project #shortcmd

# file based database for partitioning and event sourced data

- concept of `file based database for partitioning and event sourced data`
  - like a local file storage version of a kafka database
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas
  - [20230930041018](/zet/20230930041018/README.md) fsdb future ideas

## how data is stored
- the first field of the data is regarded as an ID
- data stored as TSV or CSV in two partition files:
  - a compressed file holds all existing data
  - an uncompressed file holds recently added data.
    - this data can be compressed and appended to the compressed file periodically by a cron.
- [20230930040657](/zet/20230930040657/README.md) fsdb file structure

## implementation
- basic set of features / subcommands needed for database
  - initialize and set up number of partitions
  - search for one ID or multiple
  - ingest data - pipe it into standard input and an awk script will put it where it belongs
  - compress - called from cron to compress text files and append to gzip streams together

```
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

Tags:

    #data #file #database #project #shortcmd

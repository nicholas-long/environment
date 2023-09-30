# fsdb file structure

- root directory
- data - data directory
  - files for each partition: newest additions file and the gzipped version
- hooks directory
- .fsdbconfig - file to source for database settings

## how data is stored
- the first field of the data is regarded as an ID
- data stored as TSV or CSV in two partition files:
  - a compressed file holds all existing data
  - an uncompressed file holds recently added data.
    - this data can be compressed and appended to the compressed file periodically by a cron.

```
```

` zet/20230930040657/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #file #details #database

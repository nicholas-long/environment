# file based database for partitioning and event sourced data

- concept of `file based database for partitioning and event sourced data`
  - like a local file storage version of a kafka database

## how data is stored
- the first field of the data is regarded as an ID
- data stored as TSV or CSV in two partition files:
  - a compressed file holds all existing data
  - an uncompressed file holds recently added data.
    - this data can be compressed and appended to the compressed file periodically by a cron.

## developing ideas
- can test compressing files when things are running by writing a python script to keep file(s) open for testing
- [x] link to this in notes
- basic set of features / subcommands needed for database
  - initialize and set up number of partitions
  - search for one ID or multiple
  - ingest data - pipe it into standard input and an awk script will put it where it belongs
  - compress - called from cron to compress text files and append to gzip streams together
- data is stored in partition files named after the _last_ 3 characters of the ID
  - so if you use it with sequential IDs, it will partition reasonably
- bloom filter https://github.com/nicholas-long/bfbf
- i like that there's a basic set of ideas here to get a database working, and extra features like bloom filters and indexing things or looking things up by timestamps can be handled by a separate database
  - call something like `ingest_hook` in the database to pass in duplicate data if such a program exists
  - something like `search_hook` called before searches, can filter things out
- use a subcommand implementation

## future ideas
- cool future idea: join with another file or stream on a specific column
- future optimization: check if an ID exists in the database or not, using a bloom filter.
- future optimization: searching many can be more efficient if you can pair them up.
- future: recompress - maybe: rewrite all compressed streams as continuous gzip streams to optimize space?

### issues with bloom filter optimization
- this feature doesn't really fit very many applications?
- if i support string bloom filters, then IDs that are all hex might not be as efficient
  - but various sizes of hex will require different hashing optimization code

```
```

` zet/20230929145418/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230928171946](/zet/20230928171946/README.md) data analysis scripting hub
- [20230929153207](/zet/20230929153207/README.md) computer science experiments hub

Tags:

    #data #file #database #project

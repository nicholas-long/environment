# fsdb developing ideas

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

# bloom filter for fsdb

- future optimization: check if an ID exists in the database or not, using a bloom filter.
- bloom filter that works for hashes https://github.com/nicholas-long/bfbf
- i am treating this as an add-on that could be implemented by installing hook scripts into the diretory
  - hooks when ingesting to add IDs to the bloom filter
  - hooks when searching to return early for specific IDs
- it could be too specific

```
```

## issues with bloom filter optimization
- this feature doesn't really fit very many applications?
- if i support string bloom filters, then IDs that are all hex might not be as efficient
  - but various sizes of hex will require different hashing optimization code


# fsdb future ideas

- rewrite more parts of it in programming languages to be optimized

```
```


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
- [x] create feature to remove duplicate rows
  - maybe just sequential duplicates?
  - [20231009173031](/zet/20231009173031/README.md) fsdb subcommand to remove duplicate sequential rows from all partitions
- [ ] publish and move fsdb to its own repository
- could simplify ingest script and require ulimit to be greater than the number of partitions to speed up

```
```


# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20231001151606](/zet/20231001151606/README.md) hashcodes for fsdb partitioning
- [20231122053807](/zet/20231122053807/README.md) fsdb implementation details
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20231005174423](/zet/20231005174423/README.md) testing reoptimize functionality
- [20231009173031](/zet/20231009173031/README.md) fsdb subcommand to remove duplicate sequential rows from all partitions

Tags:

    #todo #feature #database #program #list #hash #file

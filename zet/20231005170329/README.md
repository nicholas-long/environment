# hooks needed for fsdb

- hooks when ingesting to add IDs to the bloom filter
  - call something like `ingest_hook` in the database to pass in duplicate data if such a program exists
- hooks when searching to return early for specific IDs
  - something like `search_hook` called before searches, can filter things out

```
```

` zet/20231005170329/README.md `

# Related

- [20231002021919](/zet/20231002021919/README.md) bloom filter for fsdb
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas
- [20230930042658](/zet/20230930042658/README.md) fsdb ingest subcommand notes
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20231005062610](/zet/20231005062610/README.md) fsdb TODO items

Tags:

    #list #enhancement

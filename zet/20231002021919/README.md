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

` zet/20231002021919/README.md `

# Related

- [20230930041018](/zet/20230930041018/README.md) fsdb future ideas
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea

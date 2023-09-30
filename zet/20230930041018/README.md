# fsdb future ideas

- cool future idea: join with another file or stream on a specific column
- future optimization: check if an ID exists in the database or not, using a bloom filter.
- future optimization: searching many can be more efficient if you can pair them up.
- future: recompress - maybe: rewrite all compressed streams as continuous gzip streams to optimize space?

## issues with bloom filter optimization
- this feature doesn't really fit very many applications?
- if i support string bloom filters, then IDs that are all hex might not be as efficient
  - but various sizes of hex will require different hashing optimization code

```
```

` zet/20230930041018/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) file based database for partitioning and event sourced data
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea #list

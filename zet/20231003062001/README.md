# fsdb use case - using as a set

- i am able to use fsdb as a set of big data
- takes a little while to load it - estimating a few hours for 90 million rows
- good idea to use lots of partitions... very quick lookup
- good example is keeping track of all of the URLs i have ever scanned
  - before i scan one from now on, i want to quickly check and avoid URLs that have already been scanned
  - should check in batches

```
```

` zet/20231003062001/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #data #trick

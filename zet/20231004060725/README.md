# fsdb missing functionality for set difference

- concept of `fsdb missing functionality for set difference`
- when using fsdb like a set, can do set difference

```
┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231004060725]
└─$ seq 1 10000 | fsdb ingest
using 10 partitions

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231004060725]
└─$ fsdb missing
using 10 partitions
123
345
456
asdf
jkl
scanning partition 0
scanning partition 2
scanning partition 4
scanning partition 5
jkl
asdf
```

` zet/20231004060725/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20231003062001](/zet/20231003062001/README.md) fsdb use case - using as a set

Tags:

    #idea

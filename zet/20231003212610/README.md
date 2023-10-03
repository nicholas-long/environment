# example of using fsdb as a lookup table

- concept of `using fsdb as a lookup table`
- can use as large lookup table like dynamo db
- with a large enough number of partitions, lookup can seem almost instantaneous
```
real    0m0.020s
user    0m0.021s
sys     0m0.004s
```

- example usage: looking up tags for github repos by name using fsdb
```
┌──(parallels㉿kali-linux-2022-2)-[~/filehashio/zet/20231002080416]
└─$ fsdb init -p 50
initializing config
50 partitions ok

┌──(parallels㉿kali-linux-2022-2)-[~/filehashio/zet/20231002080416]
└─$ zcat scanned.log.gz | fsdb ingest
using 50 partitions

┌──(parallels㉿kali-linux-2022-2)-[~/filehashio/zet/20231002080416]
└─$ echo "WordPress/WordPress" | fsdb search
using 50 partitions
scanning partition 34
WordPress/WordPress 1.5
WordPress/WordPress 1.5.1
WordPress/WordPress 1.5.1.1
WordPress/WordPress 1.5.1.2
WordPress/WordPress 1.5.1.3
WordPress/WordPress 1.5.2
WordPress/WordPress 2.0
WordPress/WordPress 2.0.1
WordPress/WordPress 2.0.10
WordPress/WordPress 2.0.11
WordPress/WordPress 2.0.2
WordPress/WordPress 2.0.3
WordPress/WordPress 2.0.4
WordPress/WordPress 2.0.5
WordPress/WordPress 2.0.6
WordPress/WordPress 2.0.7
WordPress/WordPress 2.0.8
WordPress/WordPress 2.0.9
WordPress/WordPress 2.1
WordPress/WordPress 2.1.1
WordPress/WordPress 2.1.2
WordPress/WordPress 2.1.3
...
```

` zet/20231003212610/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data

Tags:

    #database #example

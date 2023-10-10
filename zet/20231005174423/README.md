# testing reoptimize functionality

- the purpose of the reoptimize subcommand is to rewrite all compressed streams as continuous gzip streams to optimize space
- testing it with this script

```bash
fsdb init -p 50
zcat ~/vulnerable-hashes-downloads-2022-09-22.gz | fsdb load
echo "data size"
du -hs data
echo "lines in database"
fsdb print | wc -l
echo "calling reoptimize..."
fsdb reoptimize >/dev/null 2>/dev/null
echo "data size"
du -hs data
echo "lines in database"
fsdb print | wc -l
fsdb erase

# testing the code
┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231005174423]
└─$ ./test-reoptimize
initializing config
50 partitions ok
using 50 partitions
using 50 partitions
data size
56M     data
lines in database
1553008
calling reoptimize...
data size
52M     data
lines in database
1553008
```

` zet/20231005174423/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20231005062610](/zet/20231005062610/README.md) fsdb TODO items

Tags:

    #feature #database #file

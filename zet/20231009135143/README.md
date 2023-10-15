# fsdb delete functionality

- concept of `fsdb delete functionality`
- print existing partition, recompress, and skip the row

```bash
┌──(coyote㉿netbook3)-[~/environment/zet/20231009135143]
└─$ fsdb init -p 10
initializing config
10 partitions ok

┌──(coyote㉿netbook3)-[~/environment/zet/20231009135143]
└─$ seq 1 100000 | fsdb load
using 10 partitions
using 10 partitions
using 10 partitions
using 10 partitions

┌──(coyote㉿netbook3)-[~/environment/zet/20231009135143]
└─$ fsdb delete 999
deleting 999 from partition 2
rm: cannot remove 'data/2': No such file or directory

┌──(coyote㉿netbook3)-[~/environment/zet/20231009135143]
└─$ fsdb search 999
using 10 partitions
scanning partition 2

┌──(coyote㉿netbook3)-[~/environment/zet/20231009135143]
└─$ fsdb print | wc -l
99999
```

` zet/20231009135143/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20231005062610](/zet/20231005062610/README.md) fsdb TODO items

Tags:

    #idea

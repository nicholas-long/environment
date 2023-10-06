# test gzip append functionality

- concept of `test gzip append functionality`
- `gzip -c` will compress the file to stdout

```
┌──(coyote㉿netbook3)-[~/environment/zet/20231001222624]
└─$ seq 1 10 > data

┌──(coyote㉿netbook3)-[~/environment/zet/20231001222624]
└─$ gzip data

┌──(coyote㉿netbook3)-[~/environment/zet/20231001222624]
└─$ ll
total 16K
drwxr-xr-x 154 coyote coyote 4.0K 2023-10-01 17:26:24.228041976 -0500 ..
-rw-r--r--   1 coyote coyote  278 2023-10-01 17:26:40.660407094 -0500 README.md
-rw-r--r--   1 coyote coyote   46 2023-10-01 17:27:27.725452423 -0500 data.gz
drwxr-xr-x   2 coyote coyote 4.0K 2023-10-01 17:27:30.473513443 -0500 .

┌──(coyote㉿netbook3)-[~/environment/zet/20231001222624]
└─$ seq 10 20 > data

┌──(coyote㉿netbook3)-[~/environment/zet/20231001222624]
└─$ gzip data
gzip: data.gz already exists; do you wish to overwrite (y or n)? n
        not overwritten

┌──(coyote㉿netbook3)-[~/environment/zet/20231001222624]
└─$ zcat data.gz
1
...
10

 ┌──(coyote㉿netbook3)-[~/environment/zet/20231001222624]
└─$ gzip -c data >> data.gz
```

` zet/20231001222624/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data

Tags:

    #test #program

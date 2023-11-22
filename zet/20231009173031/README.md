# fsdb subcommand to remove duplicate sequential rows from all partitions

- concept of `fsdb subcommand to remove duplicate rows`
- testing uncovered that there is a lot of noise written to stderr

```bash
┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb init -p 10
initializing config
10 partitions ok

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ seq 1 100000 | fsdb load
using 10 partitions
using 10 partitions
using 10 partitions
using 10 partitions

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb print | wc -l
100000

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb load
asdf123
asdf123
asdf123
testing duplicate rows
using 10 partitions

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb print | wc -l
100004

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb remove-duplicates
done with 0 : 9999
rm: cannot remove 'data/0': No such file or directory
done with 1 : 10001
done with 2 : 9999
rm: cannot remove 'data/2': No such file or directory
done with 3 : 10002
done with 4 : 9999
rm: cannot remove 'data/4': No such file or directory
done with 5 : 10001
done with 6 : 9999
rm: cannot remove 'data/6': No such file or directory
done with 7 : 10002
done with 8 : 9998
done with 9 : 10002
rm: cannot remove '/tmp/tmp.gTmRmMDh8Z.gz': No such file or directory

┌──(coyote㉿netbook3)-[~/environment/zet/20231009173031]
└─$ fsdb print | wc -l
100002
```

` zet/20231009173031/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas

Tags:

    #script #test

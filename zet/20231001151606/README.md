# hashcodes for fsdb project

- concept of `hashcodes for fsdb project`
- add together all the charcodes in the string
- use modulus to use the hashcode to select the right partition

- hashcode implementation
```awk
BEGIN {
  for(n=0;n<256;n++) ord[sprintf("%c",n)]=n
  # test finding the hashcode of this string
  str="testing"
  hashcode = 0
  for (n = 1; n <= length(str); n++) hashcode += ord[substr(str,n,1)]
  print hashcode
}
```

` zet/20231001151606/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230930042658](/zet/20230930042658/README.md) fsdb ingest subcommand notes

Tags:

    #idea

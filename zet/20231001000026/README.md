# script to find the minimum required set of zettels to ship a scripting project

- input: one or more initial IDs to ship
- output: everything that needs shippin with it

```
┌──(coyote㉿netbook3)-[~/environment]
└─$ ./graphquery --human <(minimum-required-dependency-zets 20221013021614)
query --human /dev/fd/63
- [20221006032546](/zet/20221006032546/README.md) my original implementation of zet cmd #zettelkasten #bash #coding #program #script #command #command #repo
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser #tui #program #zettelkasten
- [20221014025416](/zet/20221014025416/README.md) clone a subsection of a graph by tag boundaries #idea
- [20221025024238](/zet/20221025024238/README.md) enumerate tags #bash #trick #awk #script #zet
```

## algorithm
- take a set of all ids as references to search for
- maintain a working set which is initially the input IDs
- loop while working set is not empty
  - add working set to found
  - grep the directories in working set for references. trim the grep output to just a list of unique IDs
  - take the references returned and subtract anything already in the results so we don't repeat IDs
    - those references become the next working set
- return found
- working on grep query
```bash
# test good 20231001000026
# test garbage 2023100100002620231001000026

grep -R '[0-9]\{14\}' zet/20231001000026
# match exactly the right number
grep -Ro 20221008042814 zet/20231001000026
# search for all IDs and show all found
grep -Rof <(ls zet) zet/20231001000026
# trim match files and take unique IDs
grep -Rof <(ls zet) zet/20231001000026 | cut -d : -f 2 | sort -u
```

` zet/20231001000026/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230922214602](/zet/20230922214602/README.md) things i want to implement in zkvr after working on the environment
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #shortcmd #script

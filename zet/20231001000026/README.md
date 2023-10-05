# script to find the minimum required set of dependent zettels to ship a scripting project

## definition
- input: one or more initial IDs to ship
- output: everything that needs shippin with it

## notes
- directories with data files will count as dependencies

```bash
┌──(coyote㉿netbook3)-[~/environment]
└─$ ./graphquery --human <(minimum-required-dependency-zets 20221013021614)
...

minimum-required-dependency-zets 20221013021614
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

### working on grep query

```bash
# test good 20231001000026
# test garbage 2023100100002620231001000026 making sure this doesnt show up in grep output

grep -R '[0-9]\{14\}' zet/20231001000026
# match exactly the right number
grep -Ro 20221008042814 zet/20231001000026
# search for all IDs and show all found
grep -Rof <(ls zet) zet/20231001000026
# trim match files and take unique IDs
grep -Rof <(ls zet) zet/20231001000026 | cut -d : -f 2 | sort -u

grep -Rf <(ls zet) zet/20221006032546

# check implementation
./graphquery --human <(minimum-required-dependency-zets 20221006032546)

# check zkvr
./graphquery --human <(minimum-required-dependency-zets 20221013021614)
minimum-required-dependency-zets 20221013021614
```

` zet/20231001000026/README.md `

# Related

- [20230922214602](/zet/20230922214602/README.md) things i want to implement in zkvr after working on the environment
- [20231001082012](/zet/20231001082012/README.md) automatically keeping track of changes to zkvr binaries
- [20221009095853](/zet/20221009095853/README.md) finished
- [20230929024225](/zet/20230929024225/README.md) meta note related scripts

Tags:

    #shortcmd #script

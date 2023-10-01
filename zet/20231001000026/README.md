# script to find the minimum required set of zettels to ship a scripting project

- input: one or more initial IDs to ship
- output: everything that needs shippin with it

## algorithm
- take a set of all ids as references to search for
- maintain a working set which is initially the input IDs
- loop while working set is not empty
  - add working set to found
  - grep the directories in working set for references. trim the grep output to just a list of unique IDs
  - take the references returned and subtract anything already in the results so we don't repeat IDs
    - those references become the next working set
- return found

```
```

` zet/20231001000026/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230922214602](/zet/20230922214602/README.md) things i want to implement in zkvr after working on the environment
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea

# automatically keeping track of changes to zkvr binaries

- concept of `automatically keeping track of changes to zkvr binaries`
- this script will use md5sum to keep track of changes to all executable code files
- it uses the zet minimum dependency script to find all cards related to zkvr
  - [20231001000026](/zet/20231001000026/README.md) script to find the minimum required set of zettels to ship a scripting project
- update the data file after you ship using the data generation script
  - `zet/20231001082012/get-data > zet/20231001082012/data`
- 2023-11-11 this was not working properly when run in a docker within github actions. it returned several md5 hashes of empty files. the issue was references to find-executable without the full relative path.
  - do i need to run the install scripts in the github docker?

```diff
12d11
< 75d602ed8c0a5e59f437779508b426da  zet/20221013021614/graphbrowser
14a14
> 7f105b97767c9427f61d14cc412361f9  zet/20221013021614/graphbrowser
```

` zet/20231001082012/README.md `

# Related

- [20230922214602](/zet/20230922214602/README.md) things i want to implement in zkvr after working on the environment
- [20221008063052](/zet/20221008063052/README.md) autorunning scripts in cards
- [20231001000026](/zet/20231001000026/README.md) script to find the minimum required set of dependent zettels to ship a scripting project
- [20221008061845](/zet/20221008061845/README.md) workflow
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser

Tags:

    #workflow #script #coding #zet

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
2d1
< 0ec96ae252216e09532f139d2564ce31  zet/20221006032546/zetcmd
5d3
< 21c3a9358116c5c4f2a6a6b8a938b9cb  zet/20221013221136/graphquery
7a6
> 338646415a29aa2481a619fa4f499994  zet/20231121064457/merge-markdown-related-links
9,10d7
< 3b8c4bcd28e6a85a5ba17ee3411fb7f6  zet/20231128160825/deltag
< 41b3a4c040a741611910d322d6f39263  zet/20221013021614/graphbrowser
12a10
> 565eb5d465c85ff04b20616f00744601  zet/20221006032546/zetcmd
18a17
> 9f8f3907b15837d270bb1e2bf13e2734  zet/20221013021614/graphbrowser
22d20
< c3ab3e22ac1659f41b7bff1c641bcef6  zet/20231128160825/addtag
26d23
< e24a74d28401f6cf2b11b16049676f18  zet/20231128160825/createtemplate
31d27
< f47ee32d6b7f7d3e5ede1ab41b5efe7c  zet/20231121064457/merge-markdown-related-links
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

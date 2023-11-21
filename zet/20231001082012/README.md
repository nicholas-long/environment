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
6,7d5
< 338646415a29aa2481a619fa4f499994  zet/20231121064457/merge-markdown-related-links
< 3797e1edf846ec9b43a4d0bd0ee8f6d5  zet/20231114070621/scrapetags
11,13d8
< 771f07a3e69b62e61d82f65441290e37  zet/20231114070621/generate-prompt
< 77d1892ae9f612518f59e99c3a543002  zet/20231114070621/generate-tags
< 864334c55ed4ef62ffe42a203252bc4f  zet/20230919172630/root-knowledge-base-repo-path
15a11
> 9cda6d8ce722acb785ee7a1629ab9374  zet/20221013021614/graphbrowser
22,23d17
< e08b0be689a93ddf1d3f4323e2f7b74b  zet/20221013021614/graphbrowser
< e78047db565e7e9464744c9a1e07b410  zet/20231112170729/git-remote-url
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

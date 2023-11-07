# automatically keeping track of changes to zkvr binaries

- concept of `automatically keeping track of changes to zkvr binaries`
- this script will use md5sum to keep track of changes to all executable code files
- it uses the zet minimum dependency script to find all cards related to zkvr
  - [20231001000026](/zet/20231001000026/README.md) script to find the minimum required set of zettels to ship a scripting project
- update the data file after you ship using the data generation script
  - `zet/20231001082012/get-data > zet/20231001082012/data`

```diff
1,6c1,22
< d41d8cd98f00b204e9800998ecf8427e  -
< d41d8cd98f00b204e9800998ecf8427e  -
< d41d8cd98f00b204e9800998ecf8427e  -
< d41d8cd98f00b204e9800998ecf8427e  -
< d41d8cd98f00b204e9800998ecf8427e  -
< d41d8cd98f00b204e9800998ecf8427e  -
---
> 047e42f39bb16c1c7ca3b368eb67a78e  zet/20221013021614/getcopycontent
> 1a763b95b0a39fc86b3e1cb14de67623  zet/20221006032546/addsnippet
> 1af2a23543d89ef54fa406f407883d0e  zet/20221006032546/parseids
> 2b7181eeb7ba7ca7797222c3fcf6181a  zet/20230926234809/find-executable
> 2eb6eafb1f62a65fa7dd47d6b64bedfc  zet/20221006032546/quickrefs
> 529e9e2a382d01da985cccdf258bca9f  zet/20231004044241/url-scrape
> 53f9dbbf2104db584b6c39ab8e3b07d7  zet/20221025024238/enumtags
> 565eb5d465c85ff04b20616f00744601  zet/20221006032546/zetcmd
> 722d0d20905b59d35a08814e09b2eede  zet/20221013021614/graphbrowser
> 88508ed9d8269e6433cc9ed0212c7298  zet/20221014025416/tagboundary
> 9803dc8d04b70310858144266101e223  zet/20221006032546/previewgit
> 9f054deca25991a347401b73213712ea  zet/20221006032546/scanrefs
> b31d5271ad228f18fa713a15013d6340  zet/20221006032546/countlines
> bf16378c83d855c50f7b71b65b580c0a  zet/20221006032546/autoexec_enrich
> c4d20f865bacc248f7ccac59cf69a809  zet/20221006032546/insertsnippet
> c61addf030e2226847eaab5c9c8d8122  zet/20221013021614/connectome_deep
> c61b60b72cfbec877ea8c5af6b7acd2a  zet/20221006032546/getids
> ec032a646a05bf7546f0d49865cf7e13  zet/20221006032546/getcontent
> edb038a6aef6aca48a6cef680062aba6  zet/20221014025416/testscript
> edbfc153e050d944615b217e76362817  zet/20221006032546/saverefs
> f7fab880ad7b0849be0f44d1e6fac3f0  zet/20221014025416/clonecardto
> fd31af7e50d435ce407bc79bb08a0fb1  zet/20221006032546/fixlines
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

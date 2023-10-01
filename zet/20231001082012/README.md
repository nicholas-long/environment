# automatically keeping track of changes to zkvr binaries

- concept of `automatically keeping track of changes to zkvr binaries`

```
./zet/20221008063052/snippet
./zet/20221009192000/snippet
./zet/20221006213953/snippet
./zet/20230925055222/snippet
./zet/20221026064448/snippet

for id in $(zet/20231001000026/minimum-required-dependency-zets 20221013021614); do
  find-executable zet/$id -type f | xargs md5sum
done | sort

047e42f39bb16c1c7ca3b368eb67a78e  zet/20221013021614/getcopycontent
1a763b95b0a39fc86b3e1cb14de67623  zet/20221006032546/addsnippet
1af2a23543d89ef54fa406f407883d0e  zet/20221006032546/parseids
2b7181eeb7ba7ca7797222c3fcf6181a  zet/20230926234809/find-executable
2eb6eafb1f62a65fa7dd47d6b64bedfc  zet/20221006032546/quickrefs
41f4f4a648f2c4c07d051c34d7c67b51  zet/20221013021614/graphbrowser
53f9dbbf2104db584b6c39ab8e3b07d7  zet/20221025024238/enumtags
5d8e528de073b7a40f2c493f52cf1fe4  zet/20221006032546/zetcmd
88508ed9d8269e6433cc9ed0212c7298  zet/20221014025416/tagboundary
9803dc8d04b70310858144266101e223  zet/20221006032546/previewgit
9f054deca25991a347401b73213712ea  zet/20221006032546/scanrefs
b31d5271ad228f18fa713a15013d6340  zet/20221006032546/countlines
bf16378c83d855c50f7b71b65b580c0a  zet/20221006032546/autoexec_enrich
c4d20f865bacc248f7ccac59cf69a809  zet/20221006032546/insertsnippet
c61b60b72cfbec877ea8c5af6b7acd2a  zet/20221006032546/getids
e830e9db2762ca7cccdba0efba7bbe66  zet/20221013021614/connectome_deep
ec032a646a05bf7546f0d49865cf7e13  zet/20221006032546/getcontent
edb038a6aef6aca48a6cef680062aba6  zet/20221014025416/testscript
edbfc153e050d944615b217e76362817  zet/20221006032546/saverefs
f7fab880ad7b0849be0f44d1e6fac3f0  zet/20221014025416/clonecardto
fd31af7e50d435ce407bc79bb08a0fb1  zet/20221006032546/fixlines

```

` zet/20231001082012/README.md `

# Related

- [20230922214602](/zet/20230922214602/README.md) things i want to implement in zkvr after working on the environment
- [20221008063052](/zet/20221008063052/README.md) autorunning scripts in cards
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea

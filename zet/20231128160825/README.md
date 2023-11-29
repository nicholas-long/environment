# cross platform scripts to implement broken zkvr features on mac os

- need to make custom scripts in order to implement certain features on mac os
  - `sed` does not have working implementations of the `-e` or `-i` arguments on Mac OS
- include changes in zkvr

## things to implement
- [ ] add tags
- [ ] delete tags
- [ ] spawn from template and replace content

```bash
$ ./addtag macos README.md
# unchanged
$ ./addtag newtag README.md
# new tag added
```

` zet/20231128160825/README.md `

# Related

- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #script #macos

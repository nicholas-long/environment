# bat interactive install script

- concept of `bat interactive install script`
- make a script to select the correct version using fzf
- fzf and stuff will be installed at this point, but the shortcuts might not be
  - refer to the github script by full path

```
zet/20230905030303/github-latest-files https://github.com/sharkdp/bat
downloadurl=$(zet/20230905030303/github-latest-files https://github.com/sharkdp/bat | fzf --preview=lscpu "--prompt=select the version of bat for your cpu> " | awk '{print $2}')
```

` zet/20230907151050/README.md `

# Related

- [20230905021249](/zet/20230905021249/README.md) the issue with installing bat
- [20221011145143](/zet/20221011145143/README.md) bat command pretty printer
- [20230905030303](/zet/20230905030303/README.md) script to get github release links
- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #script

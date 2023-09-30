# bat interactive install script

- concept of `bat interactive install script`
- make a script to select the correct version using fzf
- fzf and stuff will be installed at this point, but the shortcuts might not be
  - refer to the github script by full path
- errors installing fff with makefile, but there's a brew package for it too
- this now will attempt to install the correct version using lscpu and awk and github bash scripts

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
- [20230922051930](/zet/20230922051930/README.md) lazygit interactive install script
- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20230905210416](/zet/20230905210416/README.md) fast file manager fff
- [20230930145814](/zet/20230930145814/README.md) determining cpu version for install

Tags:

    #script

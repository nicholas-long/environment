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

# the issue with installing bat

- https://github.com/sharkdp/bat
- bat never works correctly in package managers
- could make a script to parse the latest version and download from github
  - need jq to parse API responses
  - [20230905030303](/zet/20230905030303/README.md) script to get github release links
- could build from source on github? - probably the better idea
  - it is rust though. i cannot expect to have rust installed on any random environment?
  - easy to install on a kali distro with tons of dev tools

- use github API responses and jq to parse out URLs
- should use awk to parse the correct version and architecture
- can download from this URL with wget
- can find this machine's architecture with `lscpu | awk '/Arch/ { print $2 }'`
- architecture AArch64 is the same as ARM64

```bash
┌──(parallels㉿kali-linux-2022-2)-[/media/psf/zk/20230831_batversionscript]
└─$ cat batversion
#!/bin/bash

tagname=$(curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/sharkdp/bat/releases | jq -r '.[].name' | head -n 1)

curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/sharkdp/bat/releases/tags/$tagname | jq -r '.assets[] | "\(.name) \(.browser_download_url)"'

┌──(parallels㉿kali-linux-2022-2)-[/media/psf/zk/20230831_batversionscript]
└─$ ./batversion
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  828k    0  828k    0     0   904k      0 --:--:-- --:--:-- --:--:--  903k
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 35053    0 35053    0     0   152k      0 --:--:-- --:--:-- --:--:--  152k
bat-musl_0.23.0_amd64.deb https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-musl_0.23.0_amd64.deb
bat-musl_0.23.0_i686.deb https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-musl_0.23.0_i686.deb
bat-v0.23.0-aarch64-unknown-linux-gnu.tar.gz https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-aarch64-unknown-linux-gnu.tar.gz
bat-v0.23.0-arm-unknown-linux-gnueabihf.tar.gz https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-arm-unknown-linux-gnueabihf.tar.gz
bat-v0.23.0-arm-unknown-linux-musleabihf.tar.gz https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-arm-unknown-linux-musleabihf.tar.gz
bat-v0.23.0-i686-pc-windows-msvc.zip https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-i686-pc-windows-msvc.zip
bat-v0.23.0-i686-unknown-linux-gnu.tar.gz https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-i686-unknown-linux-gnu.tar.gz
bat-v0.23.0-i686-unknown-linux-musl.tar.gz https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-i686-unknown-linux-musl.tar.gz
bat-v0.23.0-x86_64-apple-darwin.tar.gz https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-x86_64-apple-darwin.tar.gz
bat-v0.23.0-x86_64-pc-windows-gnu.zip https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-x86_64-pc-windows-gnu.zip
bat-v0.23.0-x86_64-pc-windows-msvc.zip https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-x86_64-pc-windows-msvc.zip
bat-v0.23.0-x86_64-unknown-linux-gnu.tar.gz https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-x86_64-unknown-linux-gnu.tar.gz
bat-v0.23.0-x86_64-unknown-linux-musl.tar.gz https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-x86_64-unknown-linux-musl.tar.gz
bat_0.23.0_amd64.deb https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_amd64.deb
bat_0.23.0_arm64.deb https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_arm64.deb
bat_0.23.0_armhf.deb https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_armhf.deb
bat_0.23.0_i686.deb https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_i686.deb
```


# Related

- [20221011145143](/zet/20221011145143/README.md) bat command pretty printer
- [20230905030303](/zet/20230905030303/README.md) script to get github release links
- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20230922051930](/zet/20230922051930/README.md) lazygit interactive install script
- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20230905210416](/zet/20230905210416/README.md) fast file manager fff
- [20230930145814](/zet/20230930145814/README.md) determining cpu version for install
- [20230922203837](/zet/20230922203837/README.md) get rid of all platform specific binaries from zkvr
- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment

Tags:

    #script

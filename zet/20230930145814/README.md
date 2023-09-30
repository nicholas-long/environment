# determining cpu version for install

- concept of `determining cpu version for install`
- lscpu is in package `util-linux`
  - https://command-not-found.com/lscpu
- i think i can mostly automate this install now

## procedure
- check if it has dpkg
- determine version for arch

```bash
# netbook
lscpu |  awk '/Architecture/ { print $2 }'
x86_64
uname -a
Linux netbook3 6.4.0-kali3-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.4.11-1kali1 (2023-08-21) x86_64 GNU/Linux

# macbook parallels
lscpu |  awk '/Architecture/ { print $2 }'
aarch64
Linux kali-linux-2022-2 6.4.0-kali3-arm64 #1 SMP Debian 6.4.11-1kali1 (2023-08-21) aarch64 GNU/Linux

which dpkg
/usr/bin/dpkg

zet/20230905030303/github-latest-files https://github.com/sharkdp/bat | grep -v musl | awk '$1 ~ deb$'

bat-v0.23.0-aarch64-unknown-linux-gnu.tar.gz	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-aarch64-unknown-linux-gnu.tar.gz
bat-v0.23.0-arm-unknown-linux-gnueabihf.tar.gz	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-arm-unknown-linux-gnueabihf.tar.gz
bat-v0.23.0-i686-pc-windows-msvc.zip	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-i686-pc-windows-msvc.zip
bat-v0.23.0-i686-unknown-linux-gnu.tar.gz	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-i686-unknown-linux-gnu.tar.gz
bat-v0.23.0-x86_64-apple-darwin.tar.gz	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-x86_64-apple-darwin.tar.gz
bat-v0.23.0-x86_64-pc-windows-gnu.zip	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-x86_64-pc-windows-gnu.zip
bat-v0.23.0-x86_64-pc-windows-msvc.zip	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-x86_64-pc-windows-msvc.zip
bat-v0.23.0-x86_64-unknown-linux-gnu.tar.gz	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat-v0.23.0-x86_64-unknown-linux-gnu.tar.gz
bat_0.23.0_amd64.deb	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_amd64.deb
bat_0.23.0_arm64.deb	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_arm64.deb
bat_0.23.0_armhf.deb	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_armhf.deb
bat_0.23.0_i686.deb	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_i686.deb

zet/20230905030303/github-latest-files https://github.com/sharkdp/bat | grep -v musl | awk '$1 ~ /deb$/'
bat_0.23.0_amd64.deb	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_amd64.deb
bat_0.23.0_arm64.deb	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_arm64.deb
bat_0.23.0_armhf.deb	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_armhf.deb
bat_0.23.0_i686.deb	https://github.com/sharkdp/bat/releases/download/v0.23.0/bat_0.23.0_i686.deb

lscpu |  awk '/Architecture/ { print $2 }' | awk '
/aarch/ { print "arm64" }
/arm.*64/ { print "arm64" }
/arm.*32/ { print "armhf" } # test this
/x.*64/ { print "amd64" }
'

```

` zet/20230930145814/README.md `

# Related

- [20230922220109](/zet/20230922220109/README.md) create a dockerfile for this environment
- [20230905184854](/zet/20230905184854/README.md) prerequesites for environment
- [20230907151050](/zet/20230907151050/README.md) bat interactive install script
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #script #install #version

# lazygit interactive install script

- concept of `lazygit interactive install script`
  - `zet/20230922051930/install-lazygit-interactive`
- https://github.com/jesseduffield/lazygit
- [x] create script to automatically select version based on architecture and informatin from `uname -a`
- linux vs darwin
  - `uname` returns `Linux` on linux
  - `uname` returns `Darwin` on mac os terminal
- 2023-10-05 version selector script `zet/20230922051930/lazygit-version-selector`

```bash
┌──(coyote㉿netbook3)-[~/environment/zet/20230922051930]
└─$ github-latest-files https://github.com/jesseduffield/lazygit
checksums.txt   https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/checksums.txt
lazygit_0.40.2_Darwin_arm64.tar.gz      https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_Darwin_arm64.tar.gz
lazygit_0.40.2_Darwin_x86_64.tar.gz     https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_Darwin_x86_64.tar.gz
lazygit_0.40.2_freebsd_32-bit.tar.gz    https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_freebsd_32-bit.tar.gz
lazygit_0.40.2_freebsd_arm64.tar.gz     https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_freebsd_arm64.tar.gz
lazygit_0.40.2_freebsd_armv6.tar.gz     https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_freebsd_armv6.tar.gz
lazygit_0.40.2_freebsd_x86_64.tar.gz    https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_freebsd_x86_64.tar.gz
lazygit_0.40.2_Linux_32-bit.tar.gz      https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_Linux_32-bit.tar.gz
lazygit_0.40.2_Linux_arm64.tar.gz       https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_Linux_arm64.tar.gz
lazygit_0.40.2_Linux_armv6.tar.gz       https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_Linux_armv6.tar.gz
lazygit_0.40.2_Linux_x86_64.tar.gz      https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_Linux_x86_64.tar.gz
lazygit_0.40.2_Windows_32-bit.zip       https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_Windows_32-bit.zip
lazygit_0.40.2_Windows_arm64.zip        https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_Windows_arm64.zip
lazygit_0.40.2_Windows_armv6.zip        https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_Windows_armv6.zip
lazygit_0.40.2_Windows_x86_64.zip       https://github.com/jesseduffield/lazygit/releases/download/v0.40.2/lazygit_0.40.2_Windows_x86_64.zip

zet/20230905030303/github-latest-files https://github.com/jesseduffield/lazygit

tar -xzvf lazygit_0.40.2_Linux_x86_64.tar.gz

```

` zet/20230922051930/README.md `

# Related

- [20230907151050](/zet/20230907151050/README.md) bat interactive install script
- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20230905210416](/zet/20230905210416/README.md) fast file manager fff
- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20230930145814](/zet/20230930145814/README.md) determining cpu version for install

Tags:

    #script #git #install

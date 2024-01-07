# java version selector for linux

- should work with environment variables
  - need to source the script, so make an alias
- java versions are stored in `/usr/lib/jvm` on linux
- this is occasionally required to get ysoserial to run on the correct platform
- export the path to java in front of the other directories on `PATH` so it finds that java first
- set `JAVA_HOME` environment variable to the directory you found it in
- created script `zet/20240107171624/java-selector`
- using linux alternatives for this seems like a permanent solution for a temporary problem
  - https://askubuntu.com/questions/740757/switch-between-multiple-java-versions

```bash
export PATH=/usr/lib/jvm/java-11-openjdk-arm64/bin:$PATH
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-arm64

alias java-selector='source $ENVIRON_BASEPATH/zet/20240107171624/java-selector'
```

## example switching java versions
```bash
┌──(parallels㉿kali-gnu-linux-2023)-[~/environment/zet/20240107171624]
└─$ java-selector

┌──(parallels㉿kali-gnu-linux-2023)-[~/environment/zet/20240107171624]
└─$ java --version
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=on -Dswing.aatext=true
openjdk 11.0.20-ea 2023-07-18
OpenJDK Runtime Environment (build 11.0.20-ea+7-post-Debian-1)
OpenJDK 64-Bit Server VM (build 11.0.20-ea+7-post-Debian-1, mixed mode)

┌──(parallels㉿kali-gnu-linux-2023)-[~/environment/zet/20240107171624]
└─$ java-selector

┌──(parallels㉿kali-gnu-linux-2023)-[~/environment/zet/20240107171624]
└─$ java --version
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=on -Dswing.aatext=true
openjdk 17.0.9 2023-10-17
OpenJDK Runtime Environment (build 17.0.9+9-Debian-2)
OpenJDK 64-Bit Server VM (build 17.0.9+9-Debian-2, mixed mode, sharing)
```

` zet/20240107171624/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #script

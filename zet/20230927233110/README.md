# colorizing and prettifying scripts for transforming text

- concept of `colorizing and prettifying scripts for transforming text`
- [x] update references here - scripts to decorate things use colorize.sh
- colorize.sh requires `spc` command to be installed, `sudo apt install supercat`

```bash
/home/parallels/kb/bash-scripting/colorize.sh # colorize words from stdin with regular expressions
/home/parallels/kb/awk-scripting/colorize.awk # replace words with colorized versions
/home/parallels/kb/bash-scripting/decorate-passwd-file.sh # decorate and colorize a passwd file piped from stdin
/home/parallels/kb/bash-scripting/decorate-xml.sh # decorate XML with colors for tags, attributes, and content

cp /home/parallels/kb/bash-scripting/colorize.sh /home/parallels/kb/awk-scripting/colorize.awk /home/parallels/kb/bash-scripting/decorate-passwd-file.sh /home/parallels/kb/bash-scripting/decorate-xml.sh .

zet/20230925024118/scripts-dependencies zet/20230927233110
zet/20230927233110/decorate-passwd-file.sh references executable file colorize.sh
> $ENVIRON_BASEPATH/zet/20230927233110/colorize.sh -y '^.*sh$' -c '^[^:]+' -r root -g '[^:/]+$' -b 'false|nologin'
zet/20230927233110/decorate-xml.sh references executable file colorize.sh
> $ENVIRON_BASEPATH/zet/20230927233110/colorize.sh -g '>[^<]+<' -c '\[[^]]+' -r CDATA -y '<[^>]+ [^>]*>'
```

` zet/20230927233110/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) script to describe other kb scripts based on their comments
- [20230906050031](/zet/20230906050031/README.md) script to center text in the terminal
- [20230905184854](/zet/20230905184854/README.md) prerequesites for environment

Tags:

    #script #color

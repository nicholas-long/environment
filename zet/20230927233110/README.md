# colorizing and prettifying scripts for transforming text

- concept of `colorizing and prettifying scripts for transforming text`

```bash
/home/parallels/kb/bash-scripting/colorize.sh # colorize words from stdin with regular expressions
/home/parallels/kb/awk-scripting/colorize.awk # replace words with colorized versions
/home/parallels/kb/bash-scripting/decorate-passwd-file.sh # decorate and colorize a passwd file piped from stdin
/home/parallels/kb/bash-scripting/decorate-xml.sh # decorate XML with colors for tags, attributes, and content

cp /home/parallels/kb/bash-scripting/colorize.sh /home/parallels/kb/awk-scripting/colorize.awk /home/parallels/kb/bash-scripting/decorate-passwd-file.sh /home/parallels/kb/bash-scripting/decorate-xml.sh .

zet/20230925024118/scripts-dependencies zet/20230927233110
zet/20230927233110/decorate-passwd-file.sh references kb
> ~/kb/bash-scripting/colorize.sh -y '^.*sh$' -c '^[^:]+' -r root -g '[^:/]+$' -b 'false|nologin'
zet/20230927233110/decorate-passwd-file.sh references executable file colorize.sh
> ~/kb/bash-scripting/colorize.sh -y '^.*sh$' -c '^[^:]+' -r root -g '[^:/]+$' -b 'false|nologin'
zet/20230927233110/decorate-xml.sh references kb
> ~/kb/bash-scripting/colorize.sh -g '>[^<]+<' -c '\[[^]]+' -r CDATA -y '<[^>]+ [^>]*>'
zet/20230927233110/decorate-xml.sh references executable file colorize.sh
> ~/kb/bash-scripting/colorize.sh -g '>[^<]+<' -c '\[[^]]+' -r CDATA -y '<[^>]+ [^>]*>'
```

` zet/20230927233110/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20230906050031](/zet/20230906050031/README.md) script to center text in the terminal
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #script #color

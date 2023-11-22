# meta note related scripts

- concept of `meta note related scripts`
- some of this is related to kb stuff, but it could be useful again in the future as examples
- `get-bash-lines-from-kb-snippets.sh` - get bash lines from kb snippets
- `get-current-notes-line-count.sh` - attempt to get a line count of notes while ignoring certain file extensions

```
# meta note related scripts -> link to zettelkasten
/home/parallels/kb/bash-scripting/get-bash-lines-from-kb-snippets.sh # get bash lines from kb snippets
/home/parallels/kb/bash-scripting/get-current-notes-line-count.sh # attempt to get a line count of notes while ignoring certain file extensions

cp /home/parallels/kb/bash-scripting/get-bash-lines-from-kb-snippets.sh /home/parallels/kb/bash-scripting/get-current-notes-line-count.sh .
#!/bin/bash

# get bash lines from kb snippets
grep -A 1 -h -R '^```bash' . | grep -v '^```\|^--'

#!/bin/bash

# get line count of notes and ignore extensions
find ~/kb -type f | grep -f ~/kb/notes-extensions | xargs cat | wc -l
```

` zet/20230929024225/README.md `

# Related

- [20231001000026](/zet/20231001000026/README.md) script to find the minimum required set of dependent zettels to ship a scripting project
- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment

Tags:

    #markdown #notes #meta #script #list

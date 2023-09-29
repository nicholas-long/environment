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

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea #markdown #notes #meta

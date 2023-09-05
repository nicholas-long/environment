# directory for executable short commands to run on path

- concept of `directory for executable short commands to run on path`
- [ ] add this directory to path in install scripts
  - [20230905015223](/zet/20230905015223/README.md) install scripts
- can use tags to automatically keep up to date?
- example for testing: github release links
  - [20230905030303](/zet/20230905030303/README.md) script to get github release links #script #github
- i could either use shortcuts or write little bash stubs that fix up the working directory?
- should little programs or commands in here contain references to each other by name?

```bash
./graphquery @shortcmd
query @shortcmd
20230905030303

# loop over all the zet IDs that have tag shortcmd and enumerate all executable files and filenames
./graphquery @shortcmd | while read id; do
  find zet/$id -type f -executable | while read filepath; do
    echo $filepath $(basename $filepath)
  done
done
```

` zet/20230905160850/README.md `

# Related

- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20221008063052](/zet/20221008063052/README.md) autorunning scripts in cards

Tags:

    #idea

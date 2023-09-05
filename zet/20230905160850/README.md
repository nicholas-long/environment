# directory for executable short commands to run on path

- concept of `directory for executable short commands to run on path`
- [ ] add this directory to path in install scripts
  - [20230905015223](/zet/20230905015223/README.md) install scripts
  - the reason this should be run when installing is to generate the actual initial shortcuts - they will be absolute paths
- example for testing: github release links
  - [20230905030303](/zet/20230905030303/README.md) script to get github release links #script #github
- i could either use shortcuts or write little bash stubs that fix up the working directory?
- should little programs or commands in here contain references to each other by name?
- uses scripts run during enrich stage to keep the list of shortcuts up to date
  - [20221008063052](/zet/20221008063052/README.md) autorunning scripts in cards
  - script is called from file `autoexec_enrich`
  - the reason this runs in the enrich stage is so my shortcuts are kept up-to-date during my own development process

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

    #directory

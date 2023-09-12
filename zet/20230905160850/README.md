# directory for executable short commands to run on path

- shortcut directory `shortcuts/`
  - [x] add this directory to path in bashrc
    - [20230905015120](/zet/20230905015120/README.md) bash rc file and config
    - can do something like `x=123 source test.sh`
- maintenance script `zet/20230905160850/update-shortcuts` located in this card
  - run shortcut maintenance script during installing. the reason this should be run when installing is to generate the actual initial shortcuts - they will be absolute paths
  - i could also write little bash stubs that fix up the working directory?
  - [ ] ought to ignore files like `autoexec_enrich` that are used for zkvr cards when finding shortcuts
- this card uses scripts run during enrich stage to keep the list of shortcuts up to date
  - [20221008063052](/zet/20221008063052/README.md) autorunning scripts in cards
  - script is called from file `autoexec_enrich`
  - the reason this runs in the enrich stage is so my shortcuts are kept up-to-date during my own development process
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
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config

Tags:

    #directory

# places to update find command to use new executable version in order to be compatible on mac

- concept of `places to update find command to use new executable version in order to be compatible on mac`
- [ ] work this list until all places the find command is used are updated
- queries used to find these locations with grep
  ```bash
  grep -R 'find.*executable' zet
  # created list by taking above and using ./graphquery --human /dev/stdin
  ```

## places within code that might need to be updated

```
zet/20230905160850/README.md:  find zet/$id -type f -executable | while read filepath; do
zet/20230905160850/README.md:  find --help | grep '[-]executable'
zet/20230905160850/README.md:- [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files
zet/20230905160850/update-shortcuts:  # find executable files
zet/20230905160850/update-shortcuts:  zet/20230926234809/find-executable zet/$id -type f | grep -v autoexec_enrich | while read filepath; do
zet/20230925193834/README.md:    - find doesn't support `-executable` on mac os. i use this quite frequently.
zet/20230925193834/README.md:    - https://apple.stackexchange.com/questions/116367/find-all-executable-files-within-a-folder-in-terminal
zet/20230925193834/README.md:- [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files
zet/20221027011800/orig_zetcmd:    find zet -executable -name autoexec_enrich | awk '
zet/20230926234809/find-executable:if 2>&1 find --help | grep '[-]executable' >/dev/null; then
zet/20230926234809/find-executable:  findcommandmods="-executable"
zet/20230926234809/README.md:# a non-platform-specific find command script for executable files
zet/20230926234809/README.md:- concept of `a non-platform-specific find command script for executable files`
zet/20230926234809/README.md:- need to replace find executable commands within here to work on mac os
zet/20230926234809/README.md:- first uncovered this issue testing on mac os with the short cmd directory script not finding executables
zet/20230926234809/README.md:- script name `zet/20230926234809/find-executable`
zet/20230926234809/README.md:└─$ find-executable . -type f -name autoexec_enrich
zet/20230926234809/README.md:# need to check if find command supports executable parameter
zet/20230926234809/README.md:if find --help | grep '[-]executable' >/dev/null; then
zet/20230926234809/README.md:  findcommandmods="-type f -executable"
zet/20221006032546/zetcmd:    find zet -executable -name autoexec_enrich | awk '
zet/20221012171100/README.md:- [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files
zet/20230921220840/kb_dependencies.log:./bash-scripting/find-alphanum-base64.sh references executable file space-invader.awk
zet/20230921220840/README.md:find ~/kb -type f -not -executable | grep -v '\.md$'
zet/20230921220840/README.md:find ~/kb -type f -executable
zet/20230925024118/scripts-dependencies:#find zet -type f -executable | sort > "$executable_files"
zet/20230925024118/scripts-dependencies:$SCRIPT_DIR/check-script-dependencies $( find $directory -type f -executable )
zet/20230925024118/check-script-dependencies:  command = "find . -type f -executable | awk -F / '{print $NF}'"

# created this list by taking above and using ./graphquery --human /dev/stdin
- [20221006032546](/zet/20221006032546/README.md) my original implementation of zet cmd #zettelkasten #bash #coding #program #script #command #command #repo
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub #hub
- [20221027011800](/zet/20221027011800/README.md) zetcli bash wrapper subcommand implementation #idea #bash #command #program #filesystem
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path #directory
- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over #idea #list #script
- [20230925024118](/zet/20230925024118/README.md) script to display information about other scripts and their dependencies #shortcmd #script
- [20230925193834](/zet/20230925193834/README.md) testing on mac os #idea
- [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files #shortcmd #bash #command
```

` zet/20230927001343/README.md `

# Related

- [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files
- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #list #broken

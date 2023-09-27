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
grep 'find.*executable' $(find-executable zet -type f) | grep -v 'find-executable'
zet/20230925024118/scripts-dependencies:#find zet -type f -executable | sort > "$executable_files"
zet/20230925024118/scripts-dependencies:$SCRIPT_DIR/check-script-dependencies $( find $directory -type f -executable )
zet/20230925024118/check-script-dependencies:  command = "find . -type f -executable | awk -F / '{print $NF}'"
zet/20221006032546/zetcmd:    find zet -executable -name autoexec_enrich | awk '

# created this list by taking above and using ./graphquery --human /dev/stdin
query --human /dev/stdin
- [20221006032546](/zet/20221006032546/README.md) my original implementation of zet cmd #zettelkasten #bash #coding #program #script #command #command #repo
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path #directory
- [20230925024118](/zet/20230925024118/README.md) script to display information about other scripts and their dependencies #shortcmd #script
- [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files #shortcmd #bash #command

` zet/20230927001343/README.md `

# Related

- [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files
- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #list #broken

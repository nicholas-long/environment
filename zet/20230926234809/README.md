# a non-platform-specific find command script for executable files

- concept of `a non-platform-specific find command script for executable files`
- need to replace find executable commands within here to work on mac os
- first uncovered this issue testing on mac os with the short cmd directory script not finding executables
  - [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path

- usage
```bash
┌──(parallels㉿kali-linux-2022-2)-[~/environment]
└─$ find-executable . -type f -name autoexec_enrich
./zet/20230905160850/autoexec_enrich
./zet/20221012144502/autoexec_enrich
./zet/20221006032546/autoexec_enrich
./zet/20221026064448/autoexec_enrich
./zet/20221006213953/autoexec_enrich
./zet/20221008063052/autoexec_enrich
./zet/20230925055222/autoexec_enrich
./zet/20221009192000/autoexec_enrich
```

- original fix
```bash
# need to check if find command supports executable parameter
if find --help | grep '[-]executable' >/dev/null; then
  findcommandmods="-type f -executable"
else
  # if it doesn't, there's a non-portable alternative for mac os
  findcommandmods="-perm +111 -type f"
fi
```

` zet/20230926234809/README.md `

# places to update find command to use new executable version in order to be compatible on mac

- concept of `places to update find command to use new executable version in order to be compatible on mac`
- [x] work this list until all places the find command is used are updated
- queries used to find these locations with grep
```bash
grep -R 'find.*executable' zet
# created readable list with links by taking the IDs from above and using ./graphquery --human /dev/stdin
grep 'find.*executable' $(find-executable zet -type f) | grep -v 'find-executable'
```

- 2023-10-06 i think this is resolved with the new subcommand. should i delete this or create a card to make sure there are no additional references to it in the future? i think this is resolved with the find subcommand.
  - should i delete this or create a card to make sure there are no additional references to it in the future?


# Related

- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path
- [20221006032546](/zet/20221006032546/README.md) my original implementation of zet cmd

Tags:

    #script #command #shortcmd #bash #file

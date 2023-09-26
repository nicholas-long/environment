# a non-platform-specific find command script for executable files

- concept of `a non-platform-specific find command script for executable files`
- need to replace find executable commands within here to work on mac os
- first uncovered this issue testing on mac os with the short cmd directory script not finding executables
  - [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path

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

# Related

- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path

Tags:

    #idea #shortcmd

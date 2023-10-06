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

` zet/20230927001343/README.md `

# Related

- [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files
- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20221006032546](/zet/20221006032546/README.md) my original implementation of zet cmd

Tags:

    #list #broken

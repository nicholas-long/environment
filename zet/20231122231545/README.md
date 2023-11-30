# publishing fsdb to github as a standalone project in a repository

- [ ] publish and move fsdb to its own repository
- learn how to make a makefile and install step

- find all dependencies required to ship binaries
```bash
./graphquery --human <(zet/20231001000026/minimum-required-dependency-zets 20230929145418)
- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data #data #file #database #project #shortcmd
- [20231004133128](/zet/20231004133128/README.md) an optimized hashcode generator for partitioning work into multiple processes #enhancement
```

- C build step required
```bash
cat zet/20230929145418/build-fsdb
#!/bin/bash

gcc zet/20231004133128/fsdb-hashcode.c -o zet/20230929145418/subcommands/hashcode-optimized
```

` zet/20231122231545/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas

Tags:

    #github #project

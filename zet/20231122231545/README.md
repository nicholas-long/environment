# publishing fsdb to github as a standalone project in a repository

- [x] publish and move fsdb to its own repository
- learn how to make a makefile and install step
- requires building [20231004133128](/zet/20231004133128/README.md) an optimized hashcode generator for partitioning work into multiple processes

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

- setting it up
```bash
cp fsdb-hashcode.c ~/fsdb/src
coyote@Nicholass-MacBook-Pro 20230929145418 % cp fsdb build-fsdb README.md ~/fsdb/
coyote@Nicholass-MacBook-Pro 20230929145418 % cp -r subcommands ~/fsdb/
```
- updated build script to point to src directory
- update links in readme to point to github - could automate this?

` zet/20231122231545/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230930041146](/zet/20230930041146/README.md) fsdb developing ideas
- [20231004133128](/zet/20231004133128/README.md) an optimized hashcode generator for partitioning work into multiple processes

Tags:

    #github #project

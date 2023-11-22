# privesc scripts and lists

## windows
- fodhelper is a UAC bypass that remained unpatched. not sure if it's still unpatched in 2023
- printnightmare update list

## linux
- `zet/20230928191243/strings-all-memory.sh` run strings on memory dumps for every readable process

## setting up this card
```bash
/home/parallels/kb/hacking/priv-esc/strings-all-memory.sh # run strings on memory dumps for every readable process
/home/coyote/kb/hacking/windows/printnightmare-kb-list.txt # list of printnightmare KB patches
/home/coyote/kb/hacking/windows/uacbypass/fodhelper.ps1 # a fodhelper bypass that should go in zk hacking notes

cp /home/parallels/kb/hacking/priv-esc/strings-all-memory.sh /home/coyote/kb/hacking/windows/printnightmare-kb-list.txt /home/coyote/kb/hacking/windows/uacbypass/fodhelper.ps1 .
```

` zet/20230928191243/README.md `

# Related

- [20230920022857](/zet/20230920022857/README.md) script to get linpeas to current directory
- [20230928191955](/zet/20230928191955/README.md) get library dependency versions from composer.lock json file
- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment

Tags:

    #hacking #script #hub #privesc

# script to search tldr commands by features to find ways to do things

- concept of `script to search tldr commands by features to find ways to do things`
- original script from https://github.com/nicholas-long/kb/blob/main/bash-scripting/search-tldr-commands-text.sh
- `zet/20230920031249/tldr-command-descriptions`

```bash
cp ~/kb/bash-scripting/search-tldr-commands-text.sh .
```

## example output
- searching for ways to read files
```
  .../tldr/pages/common/less.md  3       less    > Open a file for interactive reading, allowing scrolling and search.
  .../tldr/pages/common/more.md  3       more    > Open a file for interactive reading, allowing scrolling and search.
  .../tldr/pages/osx/tail.md     23      tail    - Keep reading file until `Ctrl + C`, even if the file is inaccessible:
  .../tldr/pages/linux/gs.md     10      gs      - Reduce PDF file size to 150 dpi images for reading on a e-book device:
  .../tldr/pages/common/pv.md    22      pv      - Read an erroneous file, skip errors as `dd conv=sync,noerror` would:
  .../tldr/pages/common/mysqld.md        22      mysqld  - Start the server, reading arguments and values from a file:
  .../tldr/pages/common/git-symbolic-ref.md      3       git     > Read, change, or delete files that store references.
  .../tldr/pages/common/tee.md   3       tee     > Read from `stdin` and write to `stdout` and files (or commands).
  .../tldr/pages/common/lynx.md  22      lynx    - Open a link, using a specific file to read and write cookies:
  .../tldr/pages/linux/kreadconfig5.md   10      kreadconfig5    - Read a key from a specific configuration file:
  .../tldr/pages/linux/setfacl.md        6       setfacl - Modify ACL of a file for user with read and write access:
  .../tldr/pages/common/etcdctl.md       18      etcdctl - Store a key-value pair, reading the value from a file:
  .../tldr/pages/common/peerindex.md     4       peerindex       > Can read files compressed with gzip, bzip2 and xz.
  .../tldr/pages/common/git-commit.md    10      git     - Commit staged files with a message read from a file:
  .../tldr/pages/common/readlink.md      6       readlink        - Get the actual file to which the symlink points:
  .../tldr/pages/common/od.md    27      od      - Read only 100 bytes of a file starting from the 500th byte:
  .../tldr/pages/common/bgpgrep.md       4       bgpgrep > Can read files compressed with gzip, bzip2 and xz.
  .../tldr/pages/common/nbtscan.md       22      nbtscan - Read IP addresses/networks to scan from a file:
  .../tldr/pages/common/httpry.md        19      httpry  - Read from an input capture file and filter by IP:
  .../tldr/pages/linux/readelf.md        10      readelf - Display all the headers present in the ELF file:
  .../tldr/pages/common/llvm-as.md       14      llvm-as - Read an IR file from `stdin` and assemble it:
  .../tldr/pages/common/ocaml.md 11      ocaml   - Read OCaml commands from a file and execute them:
  .../tldr/pages/common/mpd.md   10      mpd     - Start MPD but don't read from the configuration file:
  .../tldr/pages/linux/asciiart.md       6       asciiart        - Read an image from a file and print in ASCII:
  .../tldr/pages/common/httpflow.md      18      httpflow        - Read packets from pcap format binary file:
  .../tldr/pages/common/samtools.md      35      samtools        - Split input file according to read groups:
  .../tldr/pages/common/sysbench.md      18      sysbench        - Prepare a filesystem-level read benchmark:
  .../tldr/pages/linux/readpe.md 14      readpe  - Display all the sections present in a PE file:
  .../tldr/pages/common/exiftool.md      3       exiftool        > Read and write meta information in files.
  .../tldr/pages/linux/readpe.md 10      readpe  - Display all the headers present in a PE file:
  .../tldr/pages/linux/readelf.md        6       readelf - Display all information about the ELF file:
  .../tldr/pages/common/jp2a.md  6       jp2a    - Read JPEG image from a file and print in ASCII:
  .../tldr/pages/linux/losetup.md        18      losetup - Attach a file to a read-only loop device:
  .../tldr/pages/linux/debugfs.md        10      debugfs - Open the filesystem in read write mode:
  .../tldr/pages/linux/readpe.md 18      readpe  - Display a specific header from a PE file:
  .../tldr/pages/common/mailx.md 14      mailx   - Send mail with content read from a file:
  .../tldr/pages/linux/debugfs.md        6       debugfs - Open the filesystem in read only mode:
  .../tldr/pages/linux/eyed3.md  3       eyeD3   > Read and manipulate metadata of MP3 files.
  .../tldr/pages/linux/readpe.md 6       readpe  - Display all information about a PE file:
  .../tldr/pages/linux/readelf.md        3       readelf > Displays information about ELF files.
  .../tldr/pages/common/readlink.md      10      readlink        - Get the absolute path to a file:
  .../tldr/pages/common/kcat.md  22      kcat    - Publish messages by reading from a file:
  .../tldr/pages/linux/flashrom.md       10      flashrom        - Read flash and save it to a file:
  .../tldr/pages/linux/e2fsck.md 14      e2fsck  - Check filesystem in read only mode:
  .../tldr/pages/linux/readpe.md 3       readpe  > Displays information about PE files.
  .../tldr/pages/common/joe.md   18      joe     - Open a specific file in read-only mode:
  .../tldr/pages/windows/del.md  14      del     - Force the deletion of read-only files:
  .../tldr/pages/windows/replace.md      19      replace - Replace even read only files:
  .../tldr/pages/linux/debman.md 14      debman  - Read a man page in a `.deb` file:
  .../tldr/pages/common/tcpdump.md       34      tcpdump - Read from a given dump file:
  .../tldr/pages/linux/named.md  10      named   - Read a custom configuration file:
  .../tldr/pages/common/mg.md    14      mg      - Open files in a read-only mode:
  .../tldr/pages/common/moe.md   10      moe     - Open a file as read-only:
> .../tldr/pages/osx/say.md      10      say     - Read a file aloud:                                                                                           │
```

` zet/20230920031249/README.md `

# Related

- [20230906033259](/zet/20230906033259/README.md) functions to copy over and possibly remake as commands
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line

Tags:

    #bash #script #shortcmd

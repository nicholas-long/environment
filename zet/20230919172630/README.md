# script to get root of repository or obsidian knowledge base

- `zet/20230919172630/root-knowledge-base-repo-path`
- pass in filename as argument
- prints the root knowledge base or git repository path containing this file
- traverse up the directory until it finds the root of the thing we are in...
- things i want to find the root of:
  - knowledge base or zettelkasten
    - look for .obsidian directory
  - git repository
    - look for .git directory

```bash
zet/20230919172630/root-knowledge-base-repo-path "/media/psf/zk/books/9780060731335 Freakonomics.md"
/media/psf/zk
zet/20230919172630/root-knowledge-base-repo-path ~/environment/zet/20221003150098/
/home/parallels/environment

```

- testing as short command and invalid files
```bash
# the first example is an invalid file
┌──(parallels㉿kali-linux-2022-2)-[~]
└─$ root-knowledge-base-repo-path zet/20221003150098/README.md
root path not found

┌──(parallels㉿kali-linux-2022-2)-[~]
└─$ root-knowledge-base-repo-path environment/zet/20221003150098/README.md
environment
```

` zet/20230919172630/README.md `

# Related

- [20230919153113](/zet/20230919153113/README.md) obsidian links scripts
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #bash #script #directory #filepath #shortcmd

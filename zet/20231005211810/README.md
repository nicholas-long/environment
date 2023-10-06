# script to sync only markdown files from zk to github

- [x] implement github zk markdown sync script
- concept of `script to sync only markdown files from zk to github`
- i need to get access to scripts and commands and stuff, but obsidian sync is so slow
- image and pdf files are too big to include in repo to keep size down
  - just need access to the raw text anyway for data or code snippets
- env var `ZK_PATH` tells the path for the script to search markdown - intended to be optional so far
- include in a cron
  - [20221105222236](/zet/20221105222236/README.md) cron syntax
- this does not work on my macbook. the issue is that `cp` cannot copy files on a mac if they have some sort of extended attributes
  - tried `-f` and `-R` and `-X`

```bash
zet/20231005211810/sync-script /media/psf/zk https://github.com/nicholas-long/zkmirror
```

` zet/20231005211810/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20221105222236](/zet/20221105222236/README.md) cron syntax

Tags:

    #idea #script

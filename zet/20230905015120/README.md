# bash rc file and config

- concept of `bash rc file and config`
- splash screen: `cat zet/20230906032330/splash`
- base path to this repository in env var: `$ENVIRON_BASEPATH`
  - can use script to get base path if this is not expected to be available, like debugging in vim
    - [20230919172630](/zet/20230919172630/README.md) script to get root of repository or obsidian knowledge base
- example snippet working with shortcut symlink commands from environment in vim
- need to automatically set `EDITOR` environment variable so features in some other programs work
  - sudoedit and fff use this variable
- rc scripts will `source ~/.variables.sh` if it is a file that exists.
  - `vars` shortcut alias to quickly edit this file
  - common use case: storing IP of target in environment variable that persists across new terminal tabs

```bash
source zet/20230905015120/bashrc
# now subcommands are included
getmyip_silent

```

` zet/20230905015120/README.md `

# Related

- [20230905015028](/zet/20230905015028/README.md) dotfiles hub
- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20230905210416](/zet/20230905210416/README.md) fast file manager fff
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path
- [20230906032330](/zet/20230906032330/README.md) ascii art splash screen
- [20230906035744](/zet/20230906035744/README.md) scripts to optimize alphanumeric base64
- [20230906043752](/zet/20230906043752/README.md) make it easy to work with and source this file from vim
- [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
- [20230916125704](/zet/20230916125704/README.md) terminal color schemes
- [20230919172630](/zet/20230919172630/README.md) script to get root of repository or obsidian knowledge base
- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20231017183957](/zet/20231017183957/README.md) command shortcut to pick and kill dockers
- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment
- [20240107171624](/zet/20240107171624/README.md) java version selector for linux

Tags:

    #bash #file #script

# tmux config

- concept of `tmux config`
- copied from my previous version https://github.com/nicholas-long/pen-test-environ/blob/main/tmux.conf
- `zet/20230905015107/tmux.conf`
- `zet/20230905015107/install-tmux-config` is called from install scripts
- the buffer edit hotkey references a script at a path where it is kind of assumed this environment is cloned in home directory. this needs to be fixed eventually.
- how can i read environment variables like the path variable i set from within tmux configs?
  - i can use prefix `:` and type `show-environment` to debug tmux environment

## old scripts called from tmux config that need to be migrated
- [x] buffer edit

```
```

` zet/20230905015107/README.md `

# Related

- [20230905015028](/zet/20230905015028/README.md) dotfiles hub
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20221022000131](/zet/20221022000131/README.md) put tmux and vim rc config in dockerfile
- [20230913044318](/zet/20230913044318/README.md) tmux buffer edit hotkey script

Tags:

    #dotfile

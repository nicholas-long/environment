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
- [x] fff file names
- [x] tmux-pwn-menu has its own repository. i can move it into this environment [20230914030626](/zet/20230914030626/README.md)
- [x] main menu script - what was in this? `~/tmux-scripts/menu.sh` - Knowledge base search, Exploit search, Reverse shell kit, Manage files, Start Apache, Stop Apache, Copy file path to tmux, Help
  - not copying this
- hotkeys - not important. make a new one.
- [x] TODO: finish enumerating from
  - [20230916125222](/zet/20230916125222/README.md) tmux scripts directory
  - everything that should be brought over is.
  - some other things should have actually been bash aliases instead of tmux hotkeys. there's not a lot of advantage to a tmux hotkey over a bash alias except if you are in the middle of doing something?
- enumerating old scripts from tmux config
```bash
grep 'tmux-scripts' zet/20230905015107/tmux.conf
grep 'kb' zet/20230905015107/tmux.conf
#bind C-e display-popup -E -w 80% -h 80% '~/tmux-scripts/search-fzf-sploit.sh' 
#bind C-g display-popup -E -w 80% -h 80% './tmux-scripts/run-github-exploit-index.sh' 
#bind C-e new-window -c "#{pane_current_path}" '~/tmux-scripts/exploit-search-init.sh'
#bind C-q split-window -c "#{pane_current_path}" -h '~/tmux-scripts/fff/fff'
#bind C-m split-window -c "#{pane_current_path}" -h bash -c 'bat --paging=always -pp ~/tmux-scripts/hotkeys.md'
#bind C-a new-window -c "#{pane_current_path}" bash -c 'sudo apt install -y $(apt list 2>/dev/null | fzf "--preview=~/tmux-scripts/apt-preview.sh {}" | cut -d "/" -f 1)'
#bind C-o split-window -h -c "#{pane_current_path}" bash -c '~/tmux-scripts/kb.sh -p ~/kb'
#bind C-Space display-popup -E -w 80% -h 80% '~/tmux-scripts/menu.sh'
#bind C-r split-window -c "#{pane_current_path}" bash -c '~/tmux-scripts/lazygit'
#bind C-o split-window -h -c "#{pane_current_path}" bash -c '~/tmux-scripts/kb.sh -p ~/kb'
```

## old scripts not migrating
- fuzzy apt install - should be a shortcut. needed an external script because it has an fzf preview
- searching for exploits on github or searchsploit - should be handled by shortcuts

```
```

` zet/20230905015107/README.md `

# Related

- [20230905015028](/zet/20230905015028/README.md) dotfiles hub
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20221022000131](/zet/20221022000131/README.md) put tmux and vim rc config in dockerfile for testing zkvr
- [20230913044318](/zet/20230913044318/README.md) tmux buffer edit hotkey script
- [20230914030626](/zet/20230914030626/README.md) tmux pwn menu script for hacking reverse shells and file transfer commands
- [20230916125222](/zet/20230916125222/README.md) tmux scripts directory

Tags:

    #dotfile

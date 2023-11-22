# install scripts

- concept of `install scripts`
- install my rc script
  - this script [20230905015120](/zet/20230905015120/README.md) bash rc file and config
  - [x] into bashrc
  - [x] into zshrc
  - also into rc file for bourne shell? maybe only if planning on packaging this into a lightweight environment to transfer to target machines
- [x] install with makefile [20230905210416](/zet/20230905210416/README.md) fast file manager fff
- [x] run maintenance script to update
- [x] tmux
- [x] nvim - this is done in the vim config install scripts only if neovim is installed
  - should i include plugins?
- [x] vim - basic set of keybinds
- [x] lazygit
  - [20230922051930](/zet/20230922051930/README.md) lazygit interactive install script
- [x] install python requirements for tmux scripts
- [x] choose correct config and location for both vim and neovim
- testing on Mac OS, and the install script did not work. tried to run homebrew as root?
- [ ] do i need to run the install scripts in the github actions runner docker? scripts that run during the enrich process might expect certain commands installed.

- is it a good idea to set up git credential storage?
```
git config --global credential.helper store
```

- original install scripts from https://github.com/nicholas-long/pen-test-environ/blob/main/setup-environment.sh
  - sorted into high and low priority items
  - [20230905212307](/zet/20230905212307/README.md) important things from install scripts

## installation paths in bashrc
- writing paths to bashrc
- example: `envpath=asdf source zet/1234/test.sh` echo this to bashrc
- check if installed
```bash
grep "20230905015120" ~/.bashrc
echo $?
```

## symlink to installation script
```
ln -s zet/20230905015223/install-environment ./install
```

` zet/20230905015223/README.md `

# get platform install command

- use apt or brew or whatever
- i think it would be cool to accept arguments, like say `get-install-platform list` and it would return "apt list" as the command to list packages
  - pass "install" to get the install command, i.e. `sudo apt install`

## determine if user is root and if sudo is needed
- determine if we need to use sudo if the user is not root
```bash
# get user id
id -u
1000
```

# symlinks needed for install script

- concept of `symlinks needed for install script`
- originally from https://github.com/nicholas-long/pen-test-environ/blob/main/symlinks.sh

```bash
ln -s $(pwd)/functions.sh $HOME/functions.sh
ln -s $(pwd)/tmux-scripts $HOME/tmux-scripts
ln -s $(pwd)/tmux.conf $HOME/.tmux.conf
ln -s $(pwd)/neovim-bindings.vim $HOME/.config/nvim/init.vim
ln -s $(pwd)/gruvbox.dircolors $HOME/.dircolors
ln -s $(pwd)/alacritty.yml $HOME/.alacritty.yml
```


# Related

- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment
- [20230905015028](/zet/20230905015028/README.md) dotfiles hub
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path
- [20230905184854](/zet/20230905184854/README.md) prerequesites for environment
- [20230905210416](/zet/20230905210416/README.md) fast file manager fff
- [20230907151050](/zet/20230907151050/README.md) bat interactive install script
- [20230914030626](/zet/20230914030626/README.md) tmux pwn menu script for hacking reverse shells and file transfer commands
- [20230922051930](/zet/20230922051930/README.md) lazygit interactive install script
- [20230905015059](/zet/20230905015059/README.md) vim config
- [20230925024118](/zet/20230925024118/README.md) script to display information about other scripts and their dependencies
- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20230916125222](/zet/20230916125222/README.md) tmux scripts directory
- [20230922214323](/zet/20230922214323/README.md) this environment

Tags:

    #setup #script #install #list

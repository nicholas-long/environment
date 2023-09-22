# install scripts

- concept of `install scripts`
- [ ] choose correct config and location for both vim and neovim
- install my rc script
  - this script [20230905015120](/zet/20230905015120/README.md) bash rc file and config
  - [x] into bashrc
  - [ ] into zshrc
  - [ ] also into rc file for bourne shell?
- [x] install with makefile [20230905210416](/zet/20230905210416/README.md) fast file manager fff
- [x] run maintenance script to update
- [x] tmux
- [x] nvim
- [ ] vim - basic set of keybinds
- [ ] lazygit
  - [20230922051930](/zet/20230922051930/README.md) lazygit interactive install script
- [x] install python requirements for tmux scripts

- is it a good idea to set up git credential storage?
```
git config --global credential.helper store
```

- original install scripts from https://github.com/nicholas-long/pen-test-environ/blob/main/setup-environment.sh
  - sorted into high and low priority items
  - [20230905212307](/zet/20230905212307/README.md) important things from install scripts
  - [20230905212316](/zet/20230905212316/README.md) low priority or optional things from install scripts

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

# Related

- [20230905212307](/zet/20230905212307/README.md) important things from install scripts
- [20230905212316](/zet/20230905212316/README.md) low priority or optional things from install scripts
- [20230905015028](/zet/20230905015028/README.md) dotfiles hub
- [20230905020305](/zet/20230905020305/README.md) symlinks needed for install script
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230905021157](/zet/20230905021157/README.md) log of commands run to set up previous environment
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20230905021249](/zet/20230905021249/README.md) the issue with installing bat
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path
- [20230905184854](/zet/20230905184854/README.md) prerequesites for environment
- [20230905210416](/zet/20230905210416/README.md) fast file manager fff
- [20230907151050](/zet/20230907151050/README.md) bat interactive install script
- [20230914030626](/zet/20230914030626/README.md) tmux pwn menu script for hacking reverse shells and file transfer commands
- [20230916132320](/zet/20230916132320/README.md) script to get platform install command
- [20230922051930](/zet/20230922051930/README.md) lazygit interactive install script

Tags:

    #script #setup

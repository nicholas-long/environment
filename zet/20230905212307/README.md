# important things from old install scripts

- concept of `important things from install scripts`
- [x] fff

```
echo "initialize neovim config dir"
mkdir -p $HOME/.config/nvim

echo "set up symlinks"
ln -s $(pwd)/functions.sh $HOME/functions.sh
ln -s $(pwd)/tmux-scripts $HOME/tmux-scripts
ln -s $(pwd)/tmux.conf $HOME/.tmux.conf
ln -s $(pwd)/neovim-bindings.vim $HOME/.config/nvim/init.vim
ln -s $(pwd)/gruvbox.dircolors $HOME/.dircolors
ln -s $(pwd)/alacritty.yml $HOME/.alacritty.yml

echo "install into bashrc"
echo "source ~/functions.sh" >> ~/.bashrc

echo "install lazygit - disabled"
# i can do this with the script to get github releases!
#mkdir unzip
#cp lazy*.tar.gz unzip/
#cd unzip/
#tar -xzvf lazy*.tar.gz
#sudo cp lazygit /usr/bin
#cd -
#rm -rf unzip/

```

- bat 
```
echo "install bat - disabled"
#sudo dpkg -i bat*.deb

```

` zet/20230905212307/README.md `

# low priority or optional things from install scripts

- concept of `low priority or optional things from install scripts`

```
echo "installing prerequisites"
sudo apt install -y git fzf neovim tmux figlet lolcat

echo set up neovim plugins
git clone https://github.com/VundleVim/Vundle.vim.git $HOME/.vim/bundle/Vundle.vim
nvim -c ':PluginInstall' -c ':q' -c ':q'

echo "install figlet fonts"
sudo bash -c 'mkdir -p /usr/share/figlet && cd /usr/share/figlet && git clone https://github.com/xero/figlet-fonts && mv figlet-fonts/* .'

# i no longer use this repository directly
echo "get kb"
[ -d $HOME/kb ] || cd $HOME && git clone https://github.com/nicholas-long/kb

# install tldr and update database for reverse search
sudo apt install -y tldr
tldr -u

# install gtfobins for search
[ -d ~/GTFOBins.github.io ] || git clone https://github.com/GTFOBins/GTFOBins.github.io
```

` zet/20230905212316/README.md `

# log of commands run to set up previous environment

- concept of `log of commands run to set up previous environment`
- this could be useful

```bash
sudo apt install fzf
sudo apt install tmux neovim
git clone https://github.com/nicholas-long/pen-test-environ
cd pen-test-environ
mkdir -p ~/.config/nvim
mkdir -p ~/.vim
./install-themes.sh
./symlinks.sh
bash
sudo dpkg -i bat_0.19.0_amd64.deb
touch ~/.hushlogin
tar -xzvf lazygit_0.32.2_Linux_x86_64.tar.gz
sudo cp lazygit /usr/bin

# clone fff here
# install fff
sudo cp fff /usr/bin
```

` zet/20230905021157/README.md `

# functions to copy over and possibly remake as commands

- from https://github.com/nicholas-long/pen-test-environ/blob/main/functions.sh
- [x] check this out and find any good ones

```bash

# helpful info scripts
alias common='bat --style=plain --paging=never ~/kb/hacking/common-commands.md'
alias ssh_perimeter='~/kb/bash-scripting/watch-failed-ssh-logins-live-check-shodan.sh'

# helpful commands
alias bc='sudo bettercap -autostart events.stream,net.recon,net.sniff,net.probe,arp.spoof,any.proxy'
alias ocrurl='~/kb/bash-scripting/copy-text-from-image-url.sh'

# left for reference but dont copy below this line
#--------------------------------------------------------------------------------
alias ttl='~/tmux-scripts/markdown-vivid.sh ~/kb/hacking/to-try-list.md'
alias tl='~/kb/bash-scripting/search-tldr-commands-text.sh'
alias gtfo='~/tmux-scripts/gtfobins.sh'

# this sounds like a good idea in theory, but it is so useless and returns way too much old shit to actually help find anything
alias exploits='~/tmux-scripts/search-fzf-sploit.sh'

# combine these to search hacktricks and payloads? or a menu?
alias ht='~/tmux-scripts/searchmarkdown.sh -q "^# " ~/hacktricks'
alias payl='~/tmux-scripts/searchmarkdown.sh -q "^#\+ " ~/PayloadsAllTheThings'

```

` zet/20230906033259/README.md `

# Related

- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20230905184854](/zet/20230905184854/README.md) prerequesites for environment
- [20230907151050](/zet/20230907151050/README.md) bat interactive install script
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20230906033727](/zet/20230906033727/README.md) commands to get ip
- [20230906035236](/zet/20230906035236/README.md) scripts to draw title bars
- [20230906035650](/zet/20230906035650/README.md) script to print reverse shell snippets
- [20230906044835](/zet/20230906044835/README.md) script to obfuscate a nishang reverse tcp shell for windows powershell
- [20230906050031](/zet/20230906050031/README.md) script to center text in the terminal
- [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
- [20230913044318](/zet/20230913044318/README.md) tmux buffer edit hotkey script
- [20230920031249](/zet/20230920031249/README.md) script to search tldr commands by features to find ways to do things
- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20221008042814](/zet/20221008042814/README.md) WIP

Tags:

    #environment #log #command #install #list #old

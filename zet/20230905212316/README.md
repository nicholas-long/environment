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

# Related

- [20230905015223](/zet/20230905015223/README.md) install scripts

Tags:

    #idea

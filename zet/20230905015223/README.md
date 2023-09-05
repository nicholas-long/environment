# install scripts

- concept of `install scripts`
- is it a good idea to set up git credential storage?
```
git config --global credential.helper store
```

- original install scripts from https://github.com/nicholas-long/pen-test-environ/blob/main/setup-environment.sh
```bash
#!/bin/bash

echo "installing prerequisites"
sudo apt install -y git fzf neovim tmux figlet lolcat

echo "initialize neovim config dir"
mkdir -p $HOME/.config/nvim

echo "set up symlinks"
ln -s $(pwd)/functions.sh $HOME/functions.sh
ln -s $(pwd)/tmux-scripts $HOME/tmux-scripts
ln -s $(pwd)/tmux.conf $HOME/.tmux.conf
ln -s $(pwd)/neovim-bindings.vim $HOME/.config/nvim/init.vim
ln -s $(pwd)/gruvbox.dircolors $HOME/.dircolors
ln -s $(pwd)/alacritty.yml $HOME/.alacritty.yml

echo set up neovim plugins
git clone https://github.com/VundleVim/Vundle.vim.git $HOME/.vim/bundle/Vundle.vim
nvim -c ':PluginInstall' -c ':q' -c ':q'

echo "installing fff"
git clone https://github.com/dylanaraps/fff
cd fff
sudo cp fff /usr/bin/
cd -
rm -rf fff

echo "install into bashrc"
echo "source ~/functions.sh" >> ~/.bashrc

echo "install bat - disabled"
#sudo dpkg -i bat*.deb

echo "install figlet fonts"
sudo bash -c 'mkdir -p /usr/share/figlet && cd /usr/share/figlet && git clone https://github.com/xero/figlet-fonts && mv figlet-fonts/* .'

echo "install lazygit - disabled"
#mkdir unzip
#cp lazy*.tar.gz unzip/
#cd unzip/
#tar -xzvf lazy*.tar.gz
#sudo cp lazygit /usr/bin
#cd -
#rm -rf unzip/

echo "get kb"
[ -d $HOME/kb ] || cd $HOME && git clone https://github.com/nicholas-long/kb

# install tldr and update database for reverse search
sudo apt install -y tldr
tldr -u

# install gtfobins for search
[ -d ~/GTFOBins.github.io ] || git clone https://github.com/GTFOBins/GTFOBins.github.io
```

` zet/20230905015223/README.md `

# Related

- [20230905015028](/zet/20230905015028/README.md) dotfiles hub
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230905020305](/zet/20230905020305/README.md) symlinks needed for install script
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230905021157](/zet/20230905021157/README.md) log of commands run to set up previous environment
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20230905021249](/zet/20230905021249/README.md) the issue with installing bat
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config

Tags:

    #script #setup

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

# Related

- [20230905015223](/zet/20230905015223/README.md) install scripts

Tags:

    #list #install #DEL

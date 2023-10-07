# dotfiles hub

- concept of `dotfiles hub`
- symlinks for dotfiles are installed by the install scripts within each respective zet directory
  - `zet/20230905015059/install-vim-config`
  - `zet/20230905015107/install-tmux-config`
- a line to source this environment bashrc and zshrc file is put into the actual bashrc and zshrc

```bash
# these are lines to install symlinks
ln -s $(pwd)/zet/20230905015059/plainvimconfig.vim $HOME/.vimrc
ln -s $(pwd)/zet/20230905015059/vimconfig.vim "$HOME/.config/nvim/init.vim"
ln -s "$(realpath zet/20230905015107/tmux.conf)" $HOME/.tmux.conf
```

` zet/20230905015028/README.md `

# Related

- [20230905015059](/zet/20230905015059/README.md) vim config
- [20230905015107](/zet/20230905015107/README.md) tmux config
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20230922214323](/zet/20230922214323/README.md) this environment

Tags:

    #dotfile #hub

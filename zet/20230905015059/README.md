# vim config

- concept of `vim config`
- copied from my old config https://github.com/nicholas-long/pen-test-environ/blob/main/neovim-bindings.vim
- created a new plain version for normal vim bindings. i guess i'm assuming that if you have vim instead of nvim then you want less bindings or lightweight set of useful hotkeys?
  - `plainvimconfig.vim`
> Vim's user-specific configuration file is located in the home directory: `~/.vimrc`, and Vim files of current user are located inside ~/.vim/ . The global configuration file is located at /etc/vimrc .Jul 29, 2023
- created script to install `zet/20230905015059/install-vim-config`
- i like having space q to quit while working in zkvr
- a lot of vim users don't recomment using visual mode, but i think it's really useful for picking lines and throwing them up and down within paragraphs or to the top or bottom of the document.
```vim
" cool feature for sorting lines
" visual move to top and bottom
vmap <Up> :m0<Enter>
vmap <Down> :m$<Enter>
" left and right move a line to the beginning or end of a paragraph
vmap <Left> :m'{<Enter>
vmap <Right> :m'}-1<Enter>
```

- https://unix.stackexchange.com/questions/732092/vim-warning-input-is-not-from-a-terminal
- [ ] i am having an issue where neovim tabstop is resetting to 4 by itself on my macbook. seems to only happen on markdown files.

- install it
```bash
mv ~/.vimrc ~/vimrc.bak
ln -s zet/20230905015059/plainvimconfig.vim ~/.vimrc
```

- check if it's installed
```bash
ls -al ~/.vimrc
lrwxrwxrwx 1 coyote coyote 62 Sep 22 14:42 /home/coyote/.vimrc -> /home/coyote/environment/zet/20230905015059/plainvimconfig.vim
ls -al ~/.vimrc | grep 20230905015059
echo $?

if ls -al ~/.vimrc 2>/dev/null | grep 20230905015059 2>/dev/null >/dev/null ; then
  echo vimrc symlink is installed
else
  echo not installed
fi
```

## installing neovim bindings and plugins
- needs to clone repo
- added to install script conditionally
```bash
if which nvim; then
  echo "installing neovim config"
  # initialize neovim config dir
  # ...
  if ls -al "$neovimrc" 2>/dev/null | grep 20230905015059 >/dev/null; then
    echo "neovim config is already installed"
  else
    # nvim config is is zet/20230905015059/vimconfig.vim
    # ...
  fi

  if [ ! -d $HOME/.vim/bundle/Vundle.vim/.git ]; then
    echo "installing neovim plugin vundle"
    # set up vundle for neovim plugins
    git clone https://github.com/VundleVim/Vundle.vim.git $HOME/.vim/bundle/Vundle.vim
  else
    echo "neovim plugin vundle is already initialized"
  fi
  nvim -c ':PluginInstall' -c ':q' -c ':q'
fi
```

` zet/20230905015059/README.md `

# Related

- [20230905015028](/zet/20230905015028/README.md) dotfiles hub
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20230905015223](/zet/20230905015223/README.md) install scripts

Tags:

    #dotfile

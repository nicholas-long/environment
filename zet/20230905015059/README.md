# vim config

- concept of `vim config`
- copied from my old config https://github.com/nicholas-long/pen-test-environ/blob/main/neovim-bindings.vim
- created a new plain version for normal vim bindings. i guess i'm assuming that if you have vim instead of nvim then you want less bindings or lightweight set of useful hotkeys?
  - `plainvimconfig.vim`
> Vim's user-specific configuration file is located in the home directory: `~/.vimrc`, and Vim files of current user are located inside ~/.vim/ . The global configuration file is located at /etc/vimrc .Jul 29, 2023
- created script to install `zet/20230905015059/install-vim-config`

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

` zet/20230905015059/README.md `

# Related

- [20230905015028](/zet/20230905015028/README.md) dotfiles hub
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20230905015223](/zet/20230905015223/README.md) install scripts

Tags:

    #dotfile

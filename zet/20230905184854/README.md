# prerequesites for environment

- fzf - called `fzf` everywhere https://command-not-found.com/fzf
- tmux
- vim or nvim
  - choose one to install into?
- coreutils bash
  - [20230905185446](/zet/20230905185446/README.md) bash file commands that are not builtins

```bash
# select install program
if which brew >/dev/null ; then
  installprog="brew install"
elif which apt-get >/dev/null ; then
  installprog="apt-get install"
fi
echo $installprog

function install_it {
  if ! which $1 >/dev/null ; then
    echo Installing $1 from $2
    sudo $installprog $2
  else
    echo $1 is installed
  fi
}

install_it fzf fzf
install_it realpath coreutils
install_it realpath realpath # if debian or ubuntu install realpath as well?
install_it realpath coreutils

if ! which nvim >/dev/null; then
  echo no neovim
  install_it vim vim
else
  echo neovim is installed
fi
```

` zet/20230905184854/README.md `

# Related

- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20230905185446](/zet/20230905185446/README.md) bash file commands that are not builtins
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230905021157](/zet/20230905021157/README.md) log of commands run to set up previous environment

Tags:

    #environment

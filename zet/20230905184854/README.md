# prerequesites for environment

- [x] fzf - called `fzf` everywhere https://command-not-found.com/fzf
- tmux
- [x] vim or nvim
  - choose one to install into?
- [x] coreutils bash
  - [20230905185446](/zet/20230905185446/README.md) bash file commands that are not builtins
- [x] jq
- normal programs that might not be in light distros or containers
  - curl
  - wget
- script is called `zet/20230905184854/install-prerequisites`
- python3 and pip3

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

```

` zet/20230905184854/README.md `

# Related

- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20230905185446](/zet/20230905185446/README.md) bash file commands that are not builtins
- [20230905021157](/zet/20230905021157/README.md) log of commands run to set up previous environment
- [20230914030626](/zet/20230914030626/README.md) tmux pwn menu script for hacking reverse shells and file transfer commands

Tags:

    #environment

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
- xclip - xclip does not work on mac os. use pbcopy instead.
  - [x] i still want xclip installed as a dependency on linux.
- [x] ip command
  - https://command-not-found.com/ip
  - add iproute2 to dependencies
  - mac os is still missing the `ip` command. there is not a version for it? will need to update scripts
- [x] golang
  - i'm not so sure about this one. it feels like bloat to install so many programming languages
  - go looks useful for scripting though, and bash scripts that depend on go scripts can call them with `go run` without even installing the scripts first.
  - there's a lot of useful libraries out there in go that work as programs i think
  - go will end up being a dependency for hacking related scripts that have to parse files
  - rwxrob uses it and he likes bash scripting too
  - i don't think i'm going to learn how to program in go right now, but i can use libraries and programs
  - lazygit is written in go. can i install it with go instead of the interactive binary selector?
- gcc - obvious

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
- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20230927233110](/zet/20230927233110/README.md) colorizing and prettifying scripts for transforming text
- [20230928133216](/zet/20230928133216/README.md) scripts to work with burpsuite saved requests and automatically generate python code
- [20230930145814](/zet/20230930145814/README.md) determining cpu version for install
- [20230922220109](/zet/20230922220109/README.md) create a dockerfile for this environment

Tags:

    #environment

# prerequesites for environment

- fzf - called `fzf` everywhere https://command-not-found.com/fzf
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

if which fzf >/dev/null ; then
  $installprog fzf
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

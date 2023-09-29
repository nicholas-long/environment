# tmux scripts directory

- https://github.com/nicholas-long/pen-test-environ/tree/main/tmux-scripts
- [x] first figure out if there are any tmux scripts i actually want to preserve
- some of these things should have actually been bash aliases instead of tmux hotkeys. there's not a lot of advantage to a tmux hotkey over a bash alias except if you are in the middle of doing something?
- [x] clean up scripts with relative path issues
  - i fixed up references in `search-fzf-sploit.sh`. it is now identical to [20230925143506](/zet/20230925143506/README.md) searchsploit fuzzy search for exploits
- old hierarchy of UI `menu -> kb.sh -> searchmarkdown.sh`
- github exploit search shouldn't be used because it is out of date

- scripts with relative path issues
```bash
grep -R 'tmux-scripts' zet/20230916125222
grep -R 'kb' zet/20230916125222

zet/20230916125222/run-github-exploit-index.sh:repo=$(~/tmux-scripts/github-exploit-code-repository-index/browse.sh)
zet/20230916125222/search-fzf-sploit.sh:choice=$($HOME/tmux-scripts/parse-searchsploit-csv.sh | fzf --no-hscroll -d ':' --with-nth=2 --preview="$HOME/tmux-scripts/preview.sh {}")
zet/20230916125222/exploit-search-init.sh:  ~/tmux-scripts/run-github-exploit-index.sh
zet/20230916125222/exploit-search-init.sh:  ~/tmux-scripts/search-fzf-sploit.sh
zet/20230916125222/README.md:- https://github.com/nicholas-long/pen-test-environ/tree/main/tmux-scripts
zet/20230916125222/README.md:ls ~/tmux-scripts/
zet/20230916125222/README.md:tmux-scripts
zet/20230916125222/kali-stuff-to-add-to-zsh.rc:source $HOME/tmux-scripts/gruvbox.zsh-theme
zet/20230916125222/kali-stuff-to-add-to-zsh.rc:source $HOME/tmux-scripts/agnoster.zsh-theme

zet/20230916125222/gtfobins.sh:      echo "Usage: $0 -q \"(grep pattern)\" [ options ] kb_directory"
grep: zet/20230916125222/.README.md.swp: binary file matches
zet/20230916125222/kb.sh:# prompt for kb dir if not provided
zet/20230916125222/kb.sh:  # select kb
zet/20230916125222/kb.sh:  KB_DIR=$(cat $SCRIPT_DIR/kb_locations.lst | fzf --preview-window=$WINDOWLOC "--preview=bat --color=always {}/README.md")
zet/20230916125222/print-kb.awk:#awk -v line=4 -f print-kb.awk test.md
zet/20230916125222/README.md:kb_locations.lst
zet/20230916125222/README.md:kb.sh
zet/20230916125222/README.md:print-kb.awk
zet/20230916125222/menu.sh:  echo "Knowledge base search:$SCRIPT_DIR/kb.sh"
zet/20230916125222/searchmarkdown.sh:      echo "Usage: $0 -q \"(grep pattern)\" [ options ] kb_directory"
zet/20230916125222/searchmarkdown.sh:  awk -v "line=$line" -f ~/kb/awk-scripting/print-markdown-content-nested-in-heading.awk "$file" | bat --language=md --paging=never --style=plain --color=always
zet/20230916125222/searchmarkdown.sh:    awk -v "line=$line" -f ~/kb/awk-scripting/print-markdown-content-nested-in-heading.awk "$file" | tmux loadb -
zet/20230916125222/searchmarkdown.sh:  xargs awk -f ~/kb/awk-scripting/get-headings.awk | \

# checking dependencies using script
zet/20230925024118/scripts-dependencies zet/20230916125222
zet/20230916125222/search-fzf-sploit.sh references tmux-scripts
> choice=$($HOME/tmux-scripts/parse-searchsploit-csv.sh | fzf --no-hscroll -d ':' --with-nth=2 --preview="$HOME/tmux-scripts/preview.sh {}")
zet/20230916125222/search-fzf-sploit.sh references executable file preview.sh
> choice=$($HOME/tmux-scripts/parse-searchsploit-csv.sh | fzf --no-hscroll -d ':' --with-nth=2 --preview="$HOME/tmux-scripts/preview.sh {}")

# unimportant
zet/20230916125222/searchmarkdown.sh references kb
>   awk -v "line=$line" -f ~/kb/awk-scripting/print-markdown-content-nested-in-heading.awk "$file" | bat --language=md --paging=never --style=plain --color=always
zet/20230916125222/searchmarkdown.sh references executable file print-markdown-content-nested-in-heading.awk
>   awk -v "line=$line" -f ~/kb/awk-scripting/print-markdown-content-nested-in-heading.awk "$file" | bat --language=md --paging=never --style=plain --color=always
zet/20230916125222/searchmarkdown.sh references kb
>     awk -v "line=$line" -f ~/kb/awk-scripting/print-markdown-content-nested-in-heading.awk "$file" | tmux loadb -
zet/20230916125222/searchmarkdown.sh references executable file print-markdown-content-nested-in-heading.awk
>     awk -v "line=$line" -f ~/kb/awk-scripting/print-markdown-content-nested-in-heading.awk "$file" | tmux loadb -
zet/20230916125222/searchmarkdown.sh references kb
>   xargs awk -f ~/kb/awk-scripting/get-headings.awk | \
zet/20230916125222/menu.sh references executable file kb.sh
>   echo "Knowledge base search:$SCRIPT_DIR/kb.sh"
zet/20230916125222/menu.sh references executable file tmux-pwn-menu
>   echo "Reverse shell kit:$SCRIPT_DIR/tmux-pwn-menu/tmux-pwn-menu.py"
zet/20230916125222/menu.sh references executable file recent-files.sh
>   echo "Copy file path to tmux:$SCRIPT_DIR/recent-files.sh"
zet/20230916125222/kb.sh references executable file searchmarkdown.sh
> $SCRIPT_DIR/searchmarkdown.sh -q '^# ' -p "$KB_DIR"

```

- original list of scripts
```
ls ~/tmux-scripts/

# removed
apt-preview.sh
lazygit
kb_locations.lst

# kept
exploit-search-init.sh
get-markdown-snippet.py
gtfobins.sh
hotkeys.md
kali-stuff-to-add-to-zsh.rc
kb.sh
markdown-vivid.sh
menu.sh
nishang.sh
parse-searchsploit-csv.sh
preview.sh
print-kb.awk
recent-files.sh
run-github-exploit-index.sh
search-fzf-sploit.sh
searchmarkdown.sh
searchsploit-plain-text.sh
tmux-pwn-menu
tmux-scripts

```

` zet/20230916125222/README.md `

# Related

- [20230905015107](/zet/20230905015107/README.md) tmux config
- [20230916125704](/zet/20230916125704/README.md) terminal color schemes
- [20230913044318](/zet/20230913044318/README.md) tmux buffer edit hotkey script
- [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
- [20230914030626](/zet/20230914030626/README.md) tmux pwn menu script for hacking reverse shells and file transfer commands
- [20230916132320](/zet/20230916132320/README.md) script to get platform install command
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20230925143506](/zet/20230925143506/README.md) searchsploit fuzzy search for exploits

Tags:

    #tmux #script #directory

# searchsploit fuzzy search for exploits

- concept of `searchsploit CSV parser and fuzzy searcher`
- originally from tmux scripts, but this should really be a bash alias or shortcut
- obviously requires exploitdb to be installed. should maybe just error out if it isn't.
- right now it echoes files with colon separator before csv
- [ ] fix relative paths
- there's a script called exploit search init for selecting whether to search github exploits or searchsploit

```
zet/20230925024118/scripts-dependencies

zet/20230916125222/search-fzf-sploit.sh references tmux-scripts
> choice=$($HOME/tmux-scripts/parse-searchsploit-csv.sh | fzf --no-hscroll -d ':' --with-nth=2 --preview="$HOME/tmux-scripts/preview.sh {}")
zet/20230916125222/search-fzf-sploit.sh references executable file parse-searchsploit-csv.sh
> choice=$($HOME/tmux-scripts/parse-searchsploit-csv.sh | fzf --no-hscroll -d ':' --with-nth=2 --preview="$HOME/tmux-scripts/preview.sh {}")
zet/20230916125222/search-fzf-sploit.sh references executable file preview.sh
> choice=$($HOME/tmux-scripts/parse-searchsploit-csv.sh | fzf --no-hscroll -d ':' --with-nth=2 --preview="$HOME/tmux-scripts/preview.sh {}")
```

` zet/20230925143506/README.md `

# Related

- [20230916125222](/zet/20230916125222/README.md) tmux scripts directory
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #script #hacking

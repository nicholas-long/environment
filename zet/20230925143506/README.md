# searchsploit fuzzy search for exploits

- concept of `searchsploit CSV parser and fuzzy searcher`
- originally from tmux scripts, but this should really be a bash alias or shortcut
- obviously requires exploitdb to be installed. should maybe just error out if it isn't.
- right now it echoes files with colon separator before csv
- [x] fix relative paths
- there's a script called exploit-search-init for selecting whether to search github exploits or searchsploit. it's not really relevant here.

```
zet/20230925024118/scripts-dependencies zet/20230925143506
zet/20230925143506/exploit-fuzzy-search references executable file exploit-fuzzy-search-preview
> choice=$(bash $SCRIPT_DIR/parse-searchsploit-csv.sh | fzf --no-hscroll -d ':' --with-nth=2 --preview="$SCRIPT_DIR/exploit-fuzzy-search-preview {}")
```

` zet/20230925143506/README.md `

# Related

- [20230916125222](/zet/20230916125222/README.md) tmux scripts directory
- [20230925033312](/zet/20230925033312/README.md) bash current script directory
- [20221009095853](/zet/20221009095853/README.md) finished

Tags:

    #script #hacking #shortcmd

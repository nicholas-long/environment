# functions to copy over and possibly remake as commands

- concept of `functions to copy over and possibly remake as commands`
- https://github.com/nicholas-long/pen-test-environ/blob/main/functions.sh
- awesome base64 optimization script

```bash
function key {
  filename=$1
  ~/kb/bash-scripting/ssh-keygen-generate-file.exp $filename
  cat $filename.pub
}

# aliases for quick shell commands

# productivity boosts
alias startnotes="nvim -c ':split' -c ':e scratch.md' notes.md"
alias s='nvim scratch.md'
alias vars='nvim ~/variables.sh && source ~/variables.sh'

# helpful info scripts
alias k='~/tmux-scripts/searchmarkdown.sh -q "^# " ~/kb'
alias kc='~/tmux-scripts/searchmarkdown.sh -c -q "^# " ~/kb'
alias payl='~/tmux-scripts/searchmarkdown.sh -q "^#\+ " ~/PayloadsAllTheThings'
alias ht='~/tmux-scripts/searchmarkdown.sh -q "^# " ~/hacktricks'
alias gtfo='~/tmux-scripts/gtfobins.sh'
alias common='bat --style=plain --paging=never ~/kb/hacking/common-commands.md'
alias ttl='~/tmux-scripts/markdown-vivid.sh ~/kb/hacking/to-try-list.md'
alias exploits='~/tmux-scripts/search-fzf-sploit.sh'
alias ssh_perimeter='~/kb/bash-scripting/watch-failed-ssh-logins-live-check-shodan.sh'
alias tl='~/kb/bash-scripting/search-tldr-commands-text.sh'

# helpful commands
alias http='python3 -m http.server'
alias bc='sudo bettercap -autostart events.stream,net.recon,net.sniff,net.probe,arp.spoof,any.proxy'
alias ocrurl='~/kb/bash-scripting/copy-text-from-image-url.sh'

```

` zet/20230906033259/README.md `

# Related

- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20230906033727](/zet/20230906033727/README.md) commands to get ip
- [20230906035236](/zet/20230906035236/README.md) scripts to draw title bars
- [20230906035650](/zet/20230906035650/README.md) script to print reverse shell snippets
- [20230906044835](/zet/20230906044835/README.md) script to obfuscate a nishang reverse tcp shell for windows powershell
- [20230906050031](/zet/20230906050031/README.md) script to center text in the terminal
- [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
- [20230913044318](/zet/20230913044318/README.md) tmux buffer edit hotkey script

Tags:

    #idea

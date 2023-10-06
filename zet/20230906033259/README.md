# functions to copy over and possibly remake as commands

- from https://github.com/nicholas-long/pen-test-environ/blob/main/functions.sh
- [x] check this out and find any good ones

```bash

# helpful info scripts
alias common='bat --style=plain --paging=never ~/kb/hacking/common-commands.md'
alias ssh_perimeter='~/kb/bash-scripting/watch-failed-ssh-logins-live-check-shodan.sh'

# helpful commands
alias bc='sudo bettercap -autostart events.stream,net.recon,net.sniff,net.probe,arp.spoof,any.proxy'
alias ocrurl='~/kb/bash-scripting/copy-text-from-image-url.sh'

# left for reference but dont copy below this line
#--------------------------------------------------------------------------------
alias ttl='~/tmux-scripts/markdown-vivid.sh ~/kb/hacking/to-try-list.md'
alias tl='~/kb/bash-scripting/search-tldr-commands-text.sh'
alias gtfo='~/tmux-scripts/gtfobins.sh'

# this sounds like a good idea in theory, but it is so useless and returns way too much old shit to actually help find anything
alias exploits='~/tmux-scripts/search-fzf-sploit.sh'

# combine these to search hacktricks and payloads? or a menu?
alias ht='~/tmux-scripts/searchmarkdown.sh -q "^# " ~/hacktricks'
alias payl='~/tmux-scripts/searchmarkdown.sh -q "^#\+ " ~/PayloadsAllTheThings'

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
- [20230920031249](/zet/20230920031249/README.md) script to search tldr commands by features to find ways to do things
- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20221008042814](/zet/20221008042814/README.md) WIP

Tags:

    #command #list #environment #old

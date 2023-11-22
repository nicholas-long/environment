# important things from old install scripts and pen test environ that were copied to environment

- concept of `important things from install scripts`
- [x] fff

```
echo "initialize neovim config dir"
mkdir -p $HOME/.config/nvim

echo "set up symlinks"
ln -s $(pwd)/functions.sh $HOME/functions.sh
ln -s $(pwd)/tmux-scripts $HOME/tmux-scripts
ln -s $(pwd)/tmux.conf $HOME/.tmux.conf
ln -s $(pwd)/neovim-bindings.vim $HOME/.config/nvim/init.vim
ln -s $(pwd)/gruvbox.dircolors $HOME/.dircolors
ln -s $(pwd)/alacritty.yml $HOME/.alacritty.yml

echo "install into bashrc"
echo "source ~/functions.sh" >> ~/.bashrc

echo "install lazygit - disabled"
# i can do this with the script to get github releases!
#mkdir unzip
#cp lazy*.tar.gz unzip/
#cd unzip/
#tar -xzvf lazy*.tar.gz
#sudo cp lazygit /usr/bin
#cd -
#rm -rf unzip/

```

- bat 
```
echo "install bat - disabled"
#sudo dpkg -i bat*.deb

```

` zet/20230905212307/README.md `

# low priority or optional things from install scripts

- concept of `low priority or optional things from install scripts`

```
echo "installing prerequisites"
sudo apt install -y git fzf neovim tmux figlet lolcat

echo set up neovim plugins
git clone https://github.com/VundleVim/Vundle.vim.git $HOME/.vim/bundle/Vundle.vim
nvim -c ':PluginInstall' -c ':q' -c ':q'

echo "install figlet fonts"
sudo bash -c 'mkdir -p /usr/share/figlet && cd /usr/share/figlet && git clone https://github.com/xero/figlet-fonts && mv figlet-fonts/* .'

# i no longer use this repository directly
echo "get kb"
[ -d $HOME/kb ] || cd $HOME && git clone https://github.com/nicholas-long/kb

# install tldr and update database for reverse search
sudo apt install -y tldr
tldr -u

# install gtfobins for search
[ -d ~/GTFOBins.github.io ] || git clone https://github.com/GTFOBins/GTFOBins.github.io
```

` zet/20230905212316/README.md `

# log of commands run to set up previous environment

- concept of `log of commands run to set up previous environment`
- this could be useful

```bash
sudo apt install fzf
sudo apt install tmux neovim
git clone https://github.com/nicholas-long/pen-test-environ
cd pen-test-environ
mkdir -p ~/.config/nvim
mkdir -p ~/.vim
./install-themes.sh
./symlinks.sh
bash
sudo dpkg -i bat_0.19.0_amd64.deb
touch ~/.hushlogin
tar -xzvf lazygit_0.32.2_Linux_x86_64.tar.gz
sudo cp lazygit /usr/bin

# clone fff here
# install fff
sudo cp fff /usr/bin
```

` zet/20230905021157/README.md `

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

# determining which scripts have kb references using grep

- concept of `determining which scripts have kb references using grep`
- get list from other card
- filter to just filenames
- xargs grep '/kb/'

- grep list
```
grep: /home/coyote/kb/hacking/notes-template: Is a directory
grep: /home/coyote/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell: Is a directory
grep: /home/coyote/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell-user-feature-test: Is a directory
/home/coyote/kb/awk-scripting/autogenerate-headings-for-source-files.awk:    print "~/kb/" file
/home/coyote/kb/awk-scripting/autogenerate-headings-for-source-files.awk:    print "~/kb/" file
/home/coyote/kb/hacking/cve/get-tsv.sh:  ~/kb/python/convert-csv-to-tsv.py | \
/home/coyote/kb/hacking/scripts/copy-burp-request-as-python-script.sh:getparams=$(echo $url | ~/kb/python/get-url-params.py)
/home/coyote/kb/hacking/scripts/copy-burp-request-as-python-script.sh:  ' $http_request | ~/kb/python/tsv-to-python-dict.py
/home/coyote/kb/hacking/scripts/copy-burp-request-as-python-script.sh:' $http_request | ~/kb/python/decode-cookies.py)
/home/coyote/kb/hacking/scripts/copy-burp-request-as-python-script.sh:    postdata=$(~/kb/awk-scripting/get-http-post-content.awk $http_request | ~/kb/python/decode-post-params.py)
/home/coyote/kb/hacking/dockers/enum4linux-ng.sh:source ~/kb/docker/build-github-repo-docker-image.sh
/home/coyote/kb/hacking/dockers/impacket.sh:source ~/kb/docker/build-github-repo-docker-image.sh
/home/coyote/kb/hacking/dockers/crackmapexec.sh:source ~/kb/docker/build-github-repo-docker-image.sh
/home/coyote/kb/bash-scripting/decorate-passwd-file.sh:~/kb/bash-scripting/colorize.sh -y '^.*sh$' -c '^[^:]+' -r root -g '[^:/]+$' -b 'false|nologin'
/home/coyote/kb/bash-scripting/ubuntu-docker-build-environment.sh:  export tag=$(~/kb/docker/get-tags.sh ubuntu | fzf --prompt="select tag")
/home/coyote/kb/bash-scripting/ubuntu-docker-build-environment.sh:~/kb/docker/templates/ubuntu-dockerfile-template.sh $tag > Dockerfile 
/home/coyote/kb/bash-scripting/update-all-git-repos.sh:~/kb/bash-scripting/enum-git-repos-in-directory.sh $HOME |\
/home/coyote/kb/bash-scripting/decorate-xml.sh:~/kb/bash-scripting/colorize.sh -g '>[^<]+<' -c '\[[^]]+' -r CDATA -y '<[^>]+ [^>]*>'
/home/coyote/kb/bash-scripting/pull-all-git-repos.sh:~/kb/bash-scripting/enum-git-repos-in-directory.sh $HOME |\
/home/coyote/kb/bash-scripting/get-current-notes-line-count.sh:find ~/kb -type f | grep -f ~/kb/notes-extensions | xargs cat | wc -l
```

- original list
```
/home/coyote/kb/hacking/tricks/python-fuzz-valid-dates.py
/home/coyote/kb/hacking/nmap.commands.old
/home/coyote/kb/linux/mount-shared-folders-in-vm.sh
/home/coyote/kb/linux/install_sublime.sh
/home/coyote/kb/linux/install_vscode.sh
/home/coyote/kb/awk-scripting/colorize.awk
/home/coyote/kb/awk-scripting/snippet.awk
/home/coyote/kb/awk-scripting/autogenerate-headings-for-source-files.awk
/home/coyote/kb/bash-scripting/get-wikipedia-info.sh
/home/coyote/kb/hacking/general-notes.md.old
/home/coyote/kb/hacking/windows/convert-msds-managed-password-to-ntlm-hash.py
/home/coyote/kb/hacking/passwords/password_cracking_rules/OneRuleToRuleThemAll.rule
/home/coyote/kb/hacking/pwn/boilerplate-pwn-script.py
/home/coyote/kb/hacking/notes-template
/home/coyote/kb/wordlists/etc.files
/home/coyote/kb/wordlists/active_directory_brute
/home/coyote/kb/wordlists/custom.dirbusting
/home/coyote/kb/sed-scripting/httpd-conf-enable-cgi.sed
/home/coyote/kb/linux/java8.sh
/home/coyote/kb/linux/setup_aliases.sh
/home/coyote/kb/linux/oracle.sh
/home/coyote/kb/linux/old-machine-project/tandy-output-filter.c
/home/coyote/kb/awk-scripting/get-interface.awk
/home/coyote/kb/hacking/windows/printnightmare-kb-list.txt
/home/coyote/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell
/home/coyote/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell-user-feature-test
/home/coyote/kb/hacking/windows/uacbypass/fodhelper.ps1
/home/coyote/kb/linux/runneo4j.sh
/home/coyote/kb/linux/alacritty-run-tmux.sh
/home/coyote/kb/hacking/cve/get-tsv.sh
/home/coyote/kb/hacking/cve/relevant.awk
/home/coyote/kb/hacking/priv-esc/strings-all-memory.sh
/home/coyote/kb/hacking/scripts/print-all-md5s.sh
/home/coyote/kb/hacking/scripts/copy-burp-request-as-python-script.sh
/home/coyote/kb/hacking/scripts/get-burp-http-saved-request.sh
/home/coyote/kb/hacking/passwords/generate-common-passwords.sh
/home/coyote/kb/hacking/dockers/enum4linux-ng.sh
/home/coyote/kb/hacking/dockers/impacket.sh
/home/coyote/kb/hacking/dockers/crackmapexec.sh
/home/coyote/kb/hacking/tricks/get-versions-from-composer-lock-json.sh
/home/coyote/kb/hacking/tricks/extract-pdf-embedded-file-stream.sh
/home/coyote/kb/bash-scripting/get-random-unique-id.sh
/home/coyote/kb/bash-scripting/docker-current-directory.sh
/home/coyote/kb/bash-scripting/get-github-credentials.sh
/home/coyote/kb/bash-scripting/enum-git-repos-in-directory.sh
/home/coyote/kb/bash-scripting/colorize.sh
/home/coyote/kb/bash-scripting/hash-git-repository.sh
/home/coyote/kb/bash-scripting/loop-array-pull-git-repositories.sh
/home/coyote/kb/bash-scripting/decorate-passwd-file.sh
/home/coyote/kb/bash-scripting/ubuntu-docker-build-environment.sh
/home/coyote/kb/bash-scripting/awk-print-unique-lines.sh
/home/coyote/kb/bash-scripting/update-all-git-repos.sh
/home/coyote/kb/bash-scripting/git-file-modification-date.sh
/home/coyote/kb/bash-scripting/ssh-keygen-generate-file.exp
/home/coyote/kb/bash-scripting/watch-failed-ssh-logins-live-check-shodan.sh
/home/coyote/kb/bash-scripting/urlencode-base64-every-line.sh
/home/coyote/kb/bash-scripting/search-tldr-commands-text.sh
/home/coyote/kb/bash-scripting/urlencode.sh
/home/coyote/kb/bash-scripting/exif-all-images.sh
/home/coyote/kb/bash-scripting/nmap-get-top-ports.sh
/home/coyote/kb/bash-scripting/template.sh
/home/coyote/kb/bash-scripting/generate-dates.sh
/home/coyote/kb/bash-scripting/get-current-ubuntu-distro.sh
/home/coyote/kb/bash-scripting/get-bash-lines-from-kb-snippets.sh
/home/coyote/kb/bash-scripting/decorate-xml.sh
/home/coyote/kb/bash-scripting/string-to-hex.sh
/home/coyote/kb/bash-scripting/sort-words-by-length.sh
/home/coyote/kb/bash-scripting/find-largest-files.sh
/home/coyote/kb/bash-scripting/pull-all-git-repos.sh
/home/coyote/kb/bash-scripting/copy-text-from-image-url.sh
/home/coyote/kb/bash-scripting/list-github-repos.sh
/home/coyote/kb/bash-scripting/get-github-api-key.sh
/home/coyote/kb/python/tsv-to-python-dict.py
/home/coyote/kb/python/decode-post-params.py
/home/coyote/kb/python/decode-cookies.py
/home/coyote/kb/python/urlencode.py
/home/coyote/kb/python/get-url-params.py
/home/coyote/kb/python/convert-csv-to-tsv.py
/home/coyote/kb/docker/build-github-repo-docker-image.sh
/home/coyote/kb/awk-scripting/line-lengths.awk
/home/coyote/kb/awk-scripting/live-combine.awk
/home/coyote/kb/awk-scripting/get-columns.awk
/home/coyote/kb/awk-scripting/hydra-bruteforce-with-database.awk
/home/coyote/kb/awk-scripting/nmap-ports.sh
/home/coyote/kb/awk-scripting/print-markdown-content-nested-in-heading.awk
/home/coyote/kb/awk-scripting/file-grep-multi-lines.awk
/home/coyote/kb/awk-scripting/toggle-case-combinatoric.awk
/home/coyote/kb/awk-scripting/base64-every-line.awk
/home/coyote/kb/awk-scripting/combine-files.awk
/home/coyote/kb/awk-scripting/get-http-post-content.awk
/home/coyote/kb/bash-scripting/what-installed-this-file.sh
/home/coyote/kb/awk-scripting/find-only-h1-files.awk
/home/coyote/kb/awk-scripting/user-interface-fzf.awk
/home/coyote/kb/awk-scripting/start-service.awk
/home/coyote/kb/awk-scripting/docker-exec-picker.awk
/home/coyote/kb/awk-scripting/get-headings.awk
/home/coyote/kb/docker/get-tags.sh
/home/coyote/kb/docker/destroy-containers-and-images.sh
/home/coyote/kb/awk-scripting/nmap-script-types.sh
/home/coyote/kb/tmux/tmux-script-log.sh
/home/coyote/kb/docker/templates/ubuntu-dockerfile-template.sh
/home/coyote/kb/bash-scripting/get-interface-ip.sh
/home/coyote/kb/bash-scripting/get-current-notes-line-count.sh
/home/coyote/kb/linux/package-it-all.sh
/home/coyote/kb/linux/get-ip-tmux.sh
/home/coyote/kb/linux/named-pipe-to-netcat.sh
/home/coyote/kb/linux/getip.sh
/home/coyote/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell/run-docker-catch-rev-shell.sh
/home/coyote/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell-user-feature-test/run-docker-catch-rev-shell.sh
/home/coyote/kb/bash-scripting/self-parsing-code-function-names.sh

```

` zet/20230923065000/README.md `

# Related

- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20230905184854](/zet/20230905184854/README.md) prerequesites for environment
- [20230907151050](/zet/20230907151050/README.md) bat interactive install script
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20230906033727](/zet/20230906033727/README.md) commands to get ip
- [20230906035236](/zet/20230906035236/README.md) scripts to draw title bars
- [20230906035650](/zet/20230906035650/README.md) script to print reverse shell snippets
- [20230906044835](/zet/20230906044835/README.md) script to obfuscate a nishang reverse tcp shell for windows powershell
- [20230906050031](/zet/20230906050031/README.md) script to center text in the terminal
- [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
- [20230913044318](/zet/20230913044318/README.md) tmux buffer edit hotkey script
- [20230920031249](/zet/20230920031249/README.md) script to search tldr commands by features to find ways to do things
- [20230921220840](/zet/20230921220840/README.md) script to describe other kb scripts based on their comments
- [20230922214323](/zet/20230922214323/README.md) this environment
- [20230925024118](/zet/20230925024118/README.md) script to display information about other scripts and their dependencies

Tags:

    #environment #log #script #install #command #list #old

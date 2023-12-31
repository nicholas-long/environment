# important things from old install scripts and pen test environ that were copied to environment

- this file is kind of a log of the setup process for the environment
  - copying all the scripts over
  - updating kb references

## important
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

# process of converting kb scripts

- used this to convert kb scripts
  - i looked for non executable scripts as well
  - 2023-09-29 early AM - everything is converted!
  - 2023-10-06 now this card can serve to link together the old scripts

## filtered list
```bash
# then went and manually worked on them
# then moved them to be included in "filtered list" of everything to copy

# maybe
/home/coyote/kb/.github/workflows/main.yml # example github workflow

# done and converted
/home/parallels/kb/awk-scripting/center.awk # center text within the terminal - i think i mgiht have converted this one already?
/home/parallels/kb/awk-scripting/space-invader.awk # print all variations of spaces between tokens
/home/parallels/kb/bash-scripting/find-alphanum-base64.sh # find alphanumeric base64 using awk script
/home/parallels/kb/python/convert-csv-to-tsv.py # convert CSV to TSV
/home/parallels/kb/hacking/cve/get-tsv.sh # download the current CVE list get as Tab Separated Values. everything in this cve directory is about this project.
/home/parallels/kb/hacking/cve/relevant.awk # filter the CVE list for potentially valid, relevant vulnerabilities
/home/parallels/kb/awk-scripting/get-headings.awk # get nested headings from markdown in order to get full keyword contents
/home/parallels/kb/awk-scripting/nmap-ports.sh # query nmap ports and service description definitions
/home/parallels/kb/bash-scripting/nmap-get-top-ports.sh # get top N most common ports from nmap list pass argument
/home/parallels/kb/awk-scripting/nmap-script-types.sh # enumerate all available types of nmap scripts
/home/parallels/kb/docker/get-tags.sh # get the tags of a particular docker repository using curl and jq
/home/parallels/kb/docker/destroy-containers-and-images.sh # shutdown and destroy docker images manually to clean up space
/home/parallels/kb/awk-scripting/docker-exec-picker.awk # testing an interactive docker menu with fzf
/home/parallels/kb/bash-scripting/ubuntu-docker-build-environment.sh # launch ubuntu build environment docker with current directory mounted as working directory
/home/parallels/kb/linux/runneo4j.sh # run neo4j in a docker
/home/parallels/kb/docker/build-github-repo-docker-image.sh # clone github repository and build docker image with its name
/home/parallels/kb/hacking/dockers/enum4linux-ng.sh # build and run enum4linux-ng docker
/home/parallels/kb/hacking/dockers/impacket.sh # build and run impacket docker
/home/parallels/kb/hacking/dockers/crackmapexec.sh # build and run CrackMapExec docker
/home/parallels/kb/bash-scripting/docker-current-directory.sh # run docker image with current directory mounted as working directory
/home/parallels/kb/bash-scripting/get-github-api-key.sh # get the current user's github api key
/home/parallels/kb/bash-scripting/update-all-git-repos.sh # update all the git repos in home directory and prompt with lazygit
/home/parallels/kb/bash-scripting/loop-array-pull-git-repositories.sh # define bash array
/home/parallels/kb/bash-scripting/hash-git-repository.sh # clone repo into temp dir
/home/parallels/kb/bash-scripting/get-github-credentials.sh # get the current user's github colon separated credentials
/home/parallels/kb/bash-scripting/enum-git-repos-in-directory.sh # find all git repositories in a directory
/home/parallels/kb/bash-scripting/pull-all-git-repos.sh # pull all the git repos in home directory
/home/parallels/kb/bash-scripting/list-github-repos.sh # list public github repositories for user
/home/parallels/kb/bash-scripting/git-file-modification-date.sh # get the date of the last commit to modify a file as epoch timestamp and iso date
/home/coyote/kb/wordlists/active_directory_brute # simple season and year wordlist plus some simple passwords
/home/coyote/kb/wordlists/etc.files # list of etc files from seclists project. could just link to project.
/home/coyote/kb/wordlists/custom.dirbusting # my custom dirbusting list of things that sounded important and missing from existing lists
/home/coyote/kb/hacking/windows/convert-msds-managed-password-to-ntlm-hash.py # convert a GMSA managed password structure to a NTLM hash
/home/parallels/kb/hacking/scripts/print-all-md5s.sh # print the md5 hashes of all lines in a wordlist file
/home/parallels/kb/awk-scripting/line-lengths.awk # constrict line widths of input text stream
/home/parallels/kb/bash-scripting/string-to-hex.sh # convert string to hex with no newlines
/home/parallels/kb/bash-scripting/sort-words-by-length.sh # sort words by length
/home/parallels/kb/awk-scripting/hydra-bruteforce-with-database.awk # attempt to reuse credentials using hydra and keep track of usernames and passwords tried
/home/parallels/kb/awk-scripting/toggle-case-combinatoric.awk # print all variations of upper and lower case for given lowercase string
/home/parallels/kb/awk-scripting/base64-every-line.awk # base64 encode lines individually
/home/parallels/kb/awk-scripting/combine-files.awk # combine lines from two files combinatorically with symbol between
/home/parallels/kb/awk-scripting/live-combine.awk # combine lines with all previous lines combinatorically
/home/parallels/kb/bash-scripting/colorize.sh # colorize words from stdin with regular expressions
/home/coyote/kb/awk-scripting/colorize.awk # replace words with colorized versions
/home/parallels/kb/bash-scripting/decorate-passwd-file.sh # decorate and colorize a passwd file piped from stdin
/home/parallels/kb/bash-scripting/decorate-xml.sh # decorate XML with colors for tags, attributes, and content
/home/parallels/kb/hacking/tricks/extract-pdf-embedded-file-stream.sh # extract PDF embedded file stream for use with PDF file attach exploits like mpdf
/home/parallels/kb/hacking/scripts/get-burp-http-saved-request.sh # get raw HTTP request data from burp saved request
/home/parallels/kb/hacking/scripts/copy-burp-request-as-python-script.sh # parse burpsuite saved request file and convert to python requests script for copying
/home/parallels/kb/awk-scripting/get-http-post-content.awk # get HTTP POST content from HTTP request stream
/home/parallels/kb/python/decode-post-params.py # parse all post params from post content given on standard input
/home/parallels/kb/python/decode-cookies.py # parse a cookie from every line on standard input
/home/parallels/kb/python/get-url-params.py # parse all get parameters from a url
/home/parallels/kb/python/tsv-to-python-dict.py # convert tsv with key and value fields to python dictionary
/home/parallels/kb/python/urlencode.py # urlencode every input line
/home/parallels/kb/bash-scripting/urlencode.sh # urlencode a line of text from stdin
/home/parallels/kb/bash-scripting/urlencode-base64-every-line.sh # urlencode and base64 encode lines individually
/home/parallels/kb/docker/templates/ubuntu-dockerfile-template.sh # create an ubuntu dockerfile
/home/parallels/kb/hacking/passwords/generate-common-passwords.sh # generate common passwords
/home/coyote/kb/hacking/passwords/password_cracking_rules/OneRuleToRuleThemAll.rule # rule file for hashcat that is worth having
/home/parallels/kb/bash-scripting/awk-print-unique-lines.sh # use awk to print only unique lines as a stream processor
/home/parallels/kb/bash-scripting/copy-text-from-image-url.sh # copy and read text from PNG image URL arg print with tesseract OCR
/home/parallels/kb/bash-scripting/exif-all-images.sh # run exiftool on all of the images within a directory
/home/parallels/kb/bash-scripting/watch-failed-ssh-logins-live-check-shodan.sh # watch failed ssh login attempts as a live stream
/home/coyote/kb/awk-scripting/autogenerate-headings-for-source-files.awk # autogenerate headings for source files
/home/coyote/kb/hacking/pwn/boilerplate-pwn-script.py # pwntools template binary exploit script
/home/coyote/kb/linux/old-machine-project/tandy-output-filter.c # a poor attempt to create a text filter to get the tandy screen working as a terminal. link this to the old machine terminal project.
/home/parallels/kb/bash-scripting/ssh-keygen-generate-file.exp # expect script to generate ssh key by filename
/home/coyote/kb/awk-scripting/snippet.awk # awk print markdown snippet text between backtick lines
/home/parallels/kb/bash-scripting/self-parsing-code-function-names.sh # test self-parsing scripts
/home/parallels/kb/awk-scripting/print-markdown-content-nested-in-heading.awk # print nested markdown content within headings
/home/parallels/kb/linux/package-it-all.sh # attempt to package up all dependencies deb files into a tar to install on a remote target machine
/home/parallels/kb/awk-scripting/find-only-h1-files.awk # parse a list of files and figure out if they contain h2 headings
/home/parallels/kb/hacking/priv-esc/strings-all-memory.sh # run strings on memory dumps for every readable process
/home/coyote/kb/hacking/windows/printnightmare-kb-list.txt # this should really go in zk or somewhere else
/home/coyote/kb/hacking/windows/uacbypass/fodhelper.ps1 # a fodhelper bypass that should go in zk hacking notes
/home/parallels/kb/hacking/tricks/get-versions-from-composer-lock-json.sh # get library dependency versions from composer.lock json file
/home/parallels/kb/bash-scripting/search-tldr-commands-text.sh # search through tldr command descriptions with fzf and display file with bat
/home/coyote/kb/linux/java8.sh # source this in order to use a java 8 environment if it is installed
/home/coyote/kb/linux/oracle.sh # environment required to get oracle client working
/home/coyote/kb/linux/mount-shared-folders-in-vm.sh # mount shared folders on VM
/home/parallels/kb/linux/alacritty-run-tmux.sh # shortcut to start tmux session in a working directory with alacritty
/home/parallels/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell/run-docker-catch-rev-shell.sh # test running an ubuntu docker and catching a reverse shell from it
/home/parallels/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell-user-feature-test/run-docker-catch-rev-shell.sh # test running an ubuntu docker and catching a reverse shell from it
/home/coyote/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell # save this directory
/home/coyote/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell-user-feature-test # save this directory
/home/parallels/kb/bash-scripting/what-installed-this-file.sh # find what apt package caused a particular specific file to be installed
/home/parallels/kb/bash-scripting/get-current-ubuntu-distro.sh # return the most recently updated ubuntu distro
/home/parallels/kb/bash-scripting/find-largest-files.sh # find the largest N files
/home/coyote/kb/bash-scripting/get-wikipedia-info.sh # get headings from wikipedia page
/home/parallels/kb/awk-scripting/user-interface-fzf.awk # testing a user interface in fzf from within awk
/home/coyote/kb/awk-scripting/get-interface.awk # get your preferred networking interface to work with, tunnels first, then networks, and then lan
/home/coyote/kb/hacking/tricks/python-fuzz-valid-dates.py # fuzz valid dates
/home/parallels/kb/bash-scripting/get-bash-lines-from-kb-snippets.sh # get bash lines from kb snippets
/home/parallels/kb/bash-scripting/get-current-notes-line-count.sh # attempt to get a line count of notes while ignoring certain file extensions
/home/parallels/kb/awk-scripting/file-grep-multi-lines.awk # check output of grep and next line using awk "grep -A 1 -R '^# ' ."
/home/parallels/kb/awk-scripting/start-service.awk # an attempt to select and start linux services from an fzf menu
/home/coyote/kb/sed-scripting/httpd-conf-enable-cgi.sed # example sed script to edit httpd conf
/home/parallels/kb/bash-scripting/get-random-unique-id.sh # get random hex unique ID bash
/home/parallels/kb/bash-scripting/template.sh # parse args with case statement
/home/parallels/kb/bash-scripting/generate-dates.sh # generate ISO format dates wordlists for the last few years
/home/parallels/kb/awk-scripting/get-columns.awk # get column headings from first line of CSV
/home/parallels/kb/linux/named-pipe-to-netcat.sh # example of how to communicate between the network and a named pipe
/home/parallels/kb/tmux/tmux-script-log.sh # attempt to create script logs from tmux panes

```

## do not copy these
```
/home/coyote/kb/awk-scripting/convert-to-try-list-to-separate-files.awk # rewriting a lot of commands. trash this
/home/coyote/kb/zettelkasten-tag-ideas # example tags to use in zettelkasten? trash this
/home/coyote/kb/fix-headings # comment only says: not doing? this looks like a scratch list from an old project
/home/coyote/kb/vim/example-vimrc-bindings.vim # old vimrc that looks unimportant
/home/coyote/kb/vim/example-neovim-bindings.vim # old vimrc that looks unimportant
/home/parallels/kb/bash-scripting/get-interface-ip.sh # select a network interface with fzf menu
/home/coyote/kb/hacking/nmap.commands.old # Initial Fast TCP Scan
/home/coyote/kb/hacking/general-notes.md.old # figure out what to do with this
/home/coyote/kb/hacking/notes-template # directory that is a template folder structure for hacking notes
/home/coyote/kb/linux/setup_aliases.sh # an attempt to sync zshrc and bashrc
/home/coyote/kb/linux/install_sublime.sh # install sublimetext
/home/coyote/kb/linux/install_vscode.sh # install vscode
/home/parallels/kb/linux/get-ip-tmux.sh # test tmux script to get IP? looks pretty bad
/home/parallels/kb/linux/getip.sh # another script to get ip. isn't there enough of these?

# kb internal stuff
/home/parallels/kb/bash-scripting/autogenerate.sh # generated the markdown content for files named auto-bash, auto-awk, etc
/home/parallels/kb/autogenerate-all-languages.sh # generated the markdown content for files named auto-bash, auto-awk, etc
```

## full list of kb files
```bash
find ~/kb -type f -executable
/home/parallels/kb/linux/package-it-all.sh
/home/parallels/kb/linux/runneo4j.sh
/home/parallels/kb/linux/alacritty-run-tmux.sh
/home/parallels/kb/linux/get-ip-tmux.sh
/home/parallels/kb/linux/named-pipe-to-netcat.sh
/home/parallels/kb/linux/getip.sh
/home/parallels/kb/autogenerate-all-languages.sh
/home/parallels/kb/.git/hooks/pre-applypatch.sample
/home/parallels/kb/.git/hooks/pre-commit.sample
/home/parallels/kb/.git/hooks/update.sample
/home/parallels/kb/.git/hooks/fsmonitor-watchman.sample
/home/parallels/kb/.git/hooks/pre-receive.sample
/home/parallels/kb/.git/hooks/post-update.sample
/home/parallels/kb/.git/hooks/commit-msg.sample
/home/parallels/kb/.git/hooks/applypatch-msg.sample
/home/parallels/kb/.git/hooks/prepare-commit-msg.sample
/home/parallels/kb/.git/hooks/push-to-checkout.sample
/home/parallels/kb/.git/hooks/pre-merge-commit.sample
/home/parallels/kb/.git/hooks/pre-rebase.sample
/home/parallels/kb/.git/hooks/pre-push.sample
/home/parallels/kb/hacking/cve/get-tsv.sh
/home/parallels/kb/hacking/cve/relevant.awk
/home/parallels/kb/hacking/priv-esc/strings-all-memory.sh
/home/parallels/kb/hacking/scripts/print-all-md5s.sh
/home/parallels/kb/hacking/scripts/copy-burp-request-as-python-script.sh
/home/parallels/kb/hacking/scripts/get-burp-http-saved-request.sh
/home/parallels/kb/hacking/passwords/generate-common-passwords.sh
/home/parallels/kb/hacking/dockers/enum4linux-ng.sh
/home/parallels/kb/hacking/dockers/impacket.sh
/home/parallels/kb/hacking/dockers/crackmapexec.sh
/home/parallels/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell/run-docker-catch-rev-shell.sh
/home/parallels/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell-user-feature-test/run-docker-catch-rev-shell.sh
/home/parallels/kb/hacking/tricks/get-versions-from-composer-lock-json.sh
/home/parallels/kb/hacking/tricks/extract-pdf-embedded-file-stream.sh
/home/parallels/kb/bash-scripting/get-random-unique-id.sh
/home/parallels/kb/bash-scripting/docker-current-directory.sh
/home/parallels/kb/bash-scripting/get-github-credentials.sh
/home/parallels/kb/bash-scripting/enum-git-repos-in-directory.sh
/home/parallels/kb/bash-scripting/find-alphanum-base64.sh
/home/parallels/kb/bash-scripting/colorize.sh
/home/parallels/kb/bash-scripting/hash-git-repository.sh
/home/parallels/kb/bash-scripting/self-parsing-code-function-names.sh
/home/parallels/kb/bash-scripting/what-installed-this-file.sh
/home/parallels/kb/bash-scripting/loop-array-pull-git-repositories.sh
/home/parallels/kb/bash-scripting/decorate-passwd-file.sh
/home/parallels/kb/bash-scripting/get-interface-ip.sh
/home/parallels/kb/bash-scripting/get-current-notes-line-count.sh
/home/parallels/kb/bash-scripting/ubuntu-docker-build-environment.sh
/home/parallels/kb/bash-scripting/awk-print-unique-lines.sh
/home/parallels/kb/bash-scripting/update-all-git-repos.sh
/home/parallels/kb/bash-scripting/git-file-modification-date.sh
/home/parallels/kb/bash-scripting/ssh-keygen-generate-file.exp
/home/parallels/kb/bash-scripting/watch-failed-ssh-logins-live-check-shodan.sh
/home/parallels/kb/bash-scripting/urlencode-base64-every-line.sh
/home/parallels/kb/bash-scripting/search-tldr-commands-text.sh
/home/parallels/kb/bash-scripting/urlencode.sh
/home/parallels/kb/bash-scripting/exif-all-images.sh
/home/parallels/kb/bash-scripting/nmap-get-top-ports.sh
/home/parallels/kb/bash-scripting/template.sh
/home/parallels/kb/bash-scripting/generate-dates.sh
/home/parallels/kb/bash-scripting/get-current-ubuntu-distro.sh
/home/parallels/kb/bash-scripting/get-bash-lines-from-kb-snippets.sh
/home/parallels/kb/bash-scripting/decorate-xml.sh
/home/parallels/kb/bash-scripting/autogenerate.sh
/home/parallels/kb/bash-scripting/string-to-hex.sh
/home/parallels/kb/bash-scripting/sort-words-by-length.sh
/home/parallels/kb/bash-scripting/find-largest-files.sh
/home/parallels/kb/bash-scripting/pull-all-git-repos.sh
/home/parallels/kb/bash-scripting/copy-text-from-image-url.sh
/home/parallels/kb/bash-scripting/list-github-repos.sh
/home/parallels/kb/bash-scripting/get-github-api-key.sh
/home/parallels/kb/python/tsv-to-python-dict.py
/home/parallels/kb/python/decode-post-params.py
/home/parallels/kb/python/decode-cookies.py
/home/parallels/kb/python/urlencode.py
/home/parallels/kb/python/get-url-params.py
/home/parallels/kb/python/convert-csv-to-tsv.py
/home/parallels/kb/tmux/tmux-script-log.sh
/home/parallels/kb/docker/templates/ubuntu-dockerfile-template.sh
/home/parallels/kb/docker/build-github-repo-docker-image.sh
/home/parallels/kb/docker/get-tags.sh
/home/parallels/kb/docker/destroy-containers-and-images.sh
/home/parallels/kb/awk-scripting/nmap-script-types.sh
/home/parallels/kb/awk-scripting/line-lengths.awk
/home/parallels/kb/awk-scripting/live-combine.awk
/home/parallels/kb/awk-scripting/get-columns.awk
/home/parallels/kb/awk-scripting/hydra-bruteforce-with-database.awk
/home/parallels/kb/awk-scripting/center.awk
/home/parallels/kb/awk-scripting/nmap-ports.sh
/home/parallels/kb/awk-scripting/print-markdown-content-nested-in-heading.awk
/home/parallels/kb/awk-scripting/file-grep-multi-lines.awk
/home/parallels/kb/awk-scripting/toggle-case-combinatoric.awk
/home/parallels/kb/awk-scripting/docker-exec-picker.awk
/home/parallels/kb/awk-scripting/get-headings.awk
/home/parallels/kb/awk-scripting/base64-every-line.awk
/home/parallels/kb/awk-scripting/combine-files.awk
/home/parallels/kb/awk-scripting/find-only-h1-files.awk
/home/parallels/kb/awk-scripting/user-interface-fzf.awk
/home/parallels/kb/awk-scripting/start-service.awk
/home/parallels/kb/awk-scripting/get-http-post-content.awk
/home/parallels/kb/awk-scripting/space-invader.awk
```


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
- [20230922214323](/zet/20230922214323/README.md) this environment
- [20230925024118](/zet/20230925024118/README.md) script to display information about other scripts and their dependencies
- [20230921220633](/zet/20230921220633/README.md) list of cool ideas i still want to implement in my environment
- [20230923211501](/zet/20230923211501/README.md) get current CVE list as tsv
- [20230924221605](/zet/20230924221605/README.md) script to get nested markdown headings for keyword searching
- [20230924224635](/zet/20230924224635/README.md) scripts to get nmap information
- [20230916125222](/zet/20230916125222/README.md) tmux scripts directory
- [20230925001420](/zet/20230925001420/README.md) cool docker scripts to migrate
- [20230925052317](/zet/20230925052317/README.md) wordlists for pentesting
- [20230925054339](/zet/20230925054339/README.md) convert MSDS managed password structure to NTLM hash
- [20230925180416](/zet/20230925180416/README.md) print md5 of every line in a password wordlist
- [20230926190350](/zet/20230926190350/README.md) scripts to process text with line by line operations
- [20230927233110](/zet/20230927233110/README.md) colorizing and prettifying scripts for transforming text
- [20230928014124](/zet/20230928014124/README.md) script to extract an embedded file stream from a PDF
- [20230928133216](/zet/20230928133216/README.md) scripts to work with burpsuite saved requests and automatically generate python code
- [20230928134931](/zet/20230928134931/README.md) scripts for URL and HTTP encoding
- [20230928164014](/zet/20230928164014/README.md) dockerfile templates
- [20230928164948](/zet/20230928164948/README.md) password cracking rules
- [20230928165457](/zet/20230928165457/README.md) awk print unique lines
- [20230928172527](/zet/20230928172527/README.md) image analysis commands
- [20230928173645](/zet/20230928173645/README.md) live ssh perimeter defense script with colorized login attempts and shodan lookup
- [20230928174503](/zet/20230928174503/README.md) script to automatically generate headings and markdown for displaying code files as snippets
- [20230928175049](/zet/20230928175049/README.md) pwntools template binary exploit script
- [20230928175434](/zet/20230928175434/README.md) tandy project notes and scripts for old machine project
- [20230928175625](/zet/20230928175625/README.md) ssh keygen automated expect script to generate a public and private key pair
- [20230928184621](/zet/20230928184621/README.md) markdown helper scripts
- [20230928185057](/zet/20230928185057/README.md) bash self parsing code
- [20230928185603](/zet/20230928185603/README.md) script to print the content of markdown text within the heading level of a particular line
- [20230928185944](/zet/20230928185944/README.md) script to package up program and debian dependencies a tar to install on a remote target machine
- [20230928191243](/zet/20230928191243/README.md) privesc scripts and lists
- [20230928191955](/zet/20230928191955/README.md) get library dependency versions from composer.lock json file
- [20230928192818](/zet/20230928192818/README.md) micro environment scripts needed to get programs working
- [20230928193054](/zet/20230928193054/README.md) docker reverse shell testing project
- [20230928193803](/zet/20230928193803/README.md) find what apt package installed a particular specific file
- [20230928220222](/zet/20230928220222/README.md) get the currently released ubuntu distro
- [20230928220755](/zet/20230928220755/README.md) find the largest N files
- [20230929022947](/zet/20230929022947/README.md) script to get headings from wikipedia page
- [20230929023221](/zet/20230929023221/README.md) testing user interfaces in fzf
- [20230929023608](/zet/20230929023608/README.md) script to get your preferred networking interface based on what is available
- [20230929024225](/zet/20230929024225/README.md) meta note related scripts
- [20230929024545](/zet/20230929024545/README.md) scripts for linux tricks
- [20230929053721](/zet/20230929053721/README.md) get random hex unique ID bash
- [20230929054003](/zet/20230929054003/README.md) bash scripting simple program template parsing arguments with case statement
- [20230929054848](/zet/20230929054848/README.md) awk script to get column headings from the first line of CSV
- [20230929055042](/zet/20230929055042/README.md) example of how to communicate between the network and a named pipe
- [20230929055134](/zet/20230929055134/README.md) attempt to create script logs from tmux panes
- [20221009095853](/zet/20221009095853/README.md) finished
- [20231122213142](/zet/20231122213142/README.md) script to describe other scripts based on their comments

Tags:

    #environment #log #script #command #install #list #old

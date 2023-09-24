# list of kb scripts that i could decide whether to copy over

- this is definitely going to be an ongoing project. i think i should copy over the most interesting and useful scripts first, and copy the rest as needed.
  - i should be able to locate that these scripts exist by name by searching within zkvr as needed
- created script `zet/20230921220840/describe-script` to print the first comment it finds in scripts to help sorting these
- [ ] i could just copy most of these in to a card here and fix up all the relative paths
  - there are definitely like 100 scripts here. i think any ones that don't need a lot of cleanup can just be brought right in.
  - is there a way to check with grep if the scripts contain a nested mess of references to other kb scripts?
  - [20230923065000](/zet/20230923065000/README.md) determining which scripts have kb references using grep
  - i could copy them to a card with the intent of storing them and updating them as needed.
  - should tag cards i make from kb scripts with a tag to keep track of them
  - could automatically generate cards with some content about each script using manually updated titles in here
- [x] i need to look for non executable scripts as well
- [ ] i could definitely make a card to store wordlists

# list of non-executable scripts
- [x] finish going though this list

```bash
find ~/kb -type f -not -executable | grep -v '\.md$'
# filtering the list to find some interesting files i might want to copy over
/home/coyote/kb/.github/workflows/main.yml # example github workflow

# used zet/20230921220840/describe-script to print headings, but lots of them had no comments
# then went and manually worked on them
# then moved them to be included in "filtered list" of everything to copy

```

# filtered list
```bash

/home/parallels/kb/docker/build-github-repo-docker-image.sh # clone github repository and build docker image with its name
/home/parallels/kb/hacking/dockers/enum4linux-ng.sh # build and run enum4linux-ng docker
/home/parallels/kb/hacking/dockers/impacket.sh # build and run impacket docker
/home/parallels/kb/hacking/dockers/crackmapexec.sh # build and run CrackMapExec docker
/home/parallels/kb/bash-scripting/docker-current-directory.sh # run docker image with current directory mounted as working directory
/home/parallels/kb/awk-scripting/live-combine.awk # combine lines with all previous lines combinatorically
/home/parallels/kb/bash-scripting/exif-all-images.sh # run exiftool on all of the images within a directory
/home/parallels/kb/hacking/tricks/extract-pdf-embedded-file-stream.sh # extract PDF embedded file stream for use with PDF file attach exploits like mpdf
/home/parallels/kb/bash-scripting/self-parsing-code-function-names.sh # test self-parsing scripts
/home/parallels/kb/bash-scripting/ssh-keygen-generate-file.exp # expect script to generate ssh key by filename
/home/parallels/kb/bash-scripting/watch-failed-ssh-logins-live-check-shodan.sh # watch failed ssh login attempts as a live stream
/home/parallels/kb/linux/runneo4j.sh # run neo4j in a docker
/home/coyote/kb/awk-scripting/snippet.awk # awk print markdown snippet text between backtick lines
/home/parallels/kb/bash-scripting/pull-all-git-repos.sh # pull all the git repos in home directory
/home/parallels/kb/bash-scripting/list-github-repos.sh # list public github repositories for user
/home/parallels/kb/bash-scripting/git-file-modification-date.sh # get the date of the last commit to modify a file as epoch timestamp and iso date
/home/parallels/kb/bash-scripting/copy-text-from-image-url.sh # copy and read text from PNG image URL arg print with tesseract OCR
/home/parallels/kb/hacking/priv-esc/strings-all-memory.sh # run strings on memory dumps for every readable process
/home/coyote/kb/hacking/windows/uacbypass/fodhelper.ps1 # a fodhelper bypass that should go in zk hacking notes
/home/parallels/kb/linux/package-it-all.sh # attempt to package up all dependencies deb files into a tar to install on a remote target machine
/home/coyote/kb/awk-scripting/get-interface.awk # get your preferred networking interface to work with, tunnels first, then networks, and then lan
/home/coyote/kb/wordlists/custom.dirbusting # my custom dirbusting list of things that sounded important and missing from existing lists
/home/coyote/kb/hacking/pwn/boilerplate-pwn-script.py # pwntools template binary exploit script
/home/coyote/kb/bash-scripting/get-wikipedia-info.sh # get headings from wikipedia page
/home/coyote/kb/linux/mount-shared-folders-in-vm.sh # mount shared folders on VM
/home/coyote/kb/hacking/tricks/python-fuzz-valid-dates.py # fuzz valid dates
/home/coyote/kb/hacking/nmap.commands.old # Initial Fast TCP Scan
/home/coyote/kb/linux/install_sublime.sh # install sublimetext
/home/coyote/kb/linux/install_vscode.sh # install vscode
/home/coyote/kb/awk-scripting/colorize.awk # replace words with colorized versions
/home/coyote/kb/awk-scripting/autogenerate-headings-for-source-files.awk # autogenerate headings for source files
/home/coyote/kb/hacking/general-notes.md.old # figure out what to do with this
/home/coyote/kb/hacking/windows/convert-msds-managed-password-to-ntlm-hash.py # convert a GMSA managed password structure to a NTLM hash
/home/coyote/kb/hacking/passwords/password_cracking_rules/OneRuleToRuleThemAll.rule # rule file for hashcat that is worth having
/home/coyote/kb/hacking/notes-template # directory that is a template folder structure for hacking notes
/home/coyote/kb/wordlists/etc.files # list of etc files from seclists project. could just link to project.
/home/coyote/kb/wordlists/active_directory_brute # simple season and year wordlist plus some simple passwords
/home/coyote/kb/sed-scripting/httpd-conf-enable-cgi.sed # example sed script to edit httpd conf
/home/coyote/kb/linux/java8.sh # source this in order to use a java 8 environment if it is installed
/home/coyote/kb/linux/setup_aliases.sh # an attempt to sync zshrc and bashrc
/home/coyote/kb/linux/oracle.sh # environment required to get oracle client working
/home/coyote/kb/linux/old-machine-project/tandy-output-filter.c # a poor attempt to create a text filter to get the tandy screen working as a terminal. link this to the old machine terminal project.
/home/coyote/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell # save this directory
/home/coyote/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell-user-feature-test # save this directory
/home/parallels/kb/linux/alacritty-run-tmux.sh # shortcut to start tmux session in a working directory with alacritty
/home/parallels/kb/hacking/scripts/print-all-md5s.sh # print the md5 hashes of all lines in a wordlist file
/home/parallels/kb/hacking/scripts/copy-burp-request-as-python-script.sh # parse burpsuite saved request file and convert to python requests script for copying
/home/parallels/kb/hacking/scripts/get-burp-http-saved-request.sh # get raw HTTP request data from burp saved request
/home/parallels/kb/hacking/passwords/generate-common-passwords.sh # generate common passwords
/home/parallels/kb/hacking/tricks/get-versions-from-composer-lock-json.sh # get library dependency versions from composer.lock json file
/home/parallels/kb/bash-scripting/get-random-unique-id.sh # get random hex unique ID bash
/home/parallels/kb/bash-scripting/get-github-credentials.sh # get the current user's github colon separated credentials
/home/parallels/kb/bash-scripting/enum-git-repos-in-directory.sh # find all git repositories in a directory
/home/parallels/kb/bash-scripting/colorize.sh # colorize words from stdin with regular expressions
/home/parallels/kb/bash-scripting/hash-git-repository.sh # clone repo into temp dir
/home/parallels/kb/bash-scripting/loop-array-pull-git-repositories.sh # define bash array
/home/parallels/kb/bash-scripting/decorate-passwd-file.sh # decorate and colorize a passwd file piped from stdin
/home/parallels/kb/bash-scripting/ubuntu-docker-build-environment.sh # launch ubuntu build environment docker with current directory mounted as working directory
/home/parallels/kb/bash-scripting/awk-print-unique-lines.sh # use awk to print only unique lines as a stream processor
/home/parallels/kb/bash-scripting/update-all-git-repos.sh # update all the git repos in home directory and prompt with lazygit
/home/parallels/kb/bash-scripting/urlencode-base64-every-line.sh # urlencode and base64 encode lines individually
/home/parallels/kb/bash-scripting/search-tldr-commands-text.sh # search through tldr command descriptions with fzf and display file with bat
/home/parallels/kb/bash-scripting/urlencode.sh # urlencode a line of text from stdin
/home/parallels/kb/bash-scripting/template.sh # parse args with case statement
/home/parallels/kb/bash-scripting/generate-dates.sh # generate ISO format dates wordlists for the last few years
/home/parallels/kb/bash-scripting/get-current-ubuntu-distro.sh # return the most recently updated ubuntu distro
/home/parallels/kb/bash-scripting/get-bash-lines-from-kb-snippets.sh # get bash lines from kb snippets
/home/parallels/kb/bash-scripting/decorate-xml.sh # decorate XML with colors for tags, attributes, and content
/home/parallels/kb/bash-scripting/string-to-hex.sh # convert string to hex with no newlines
/home/parallels/kb/bash-scripting/sort-words-by-length.sh # sort words by length
/home/parallels/kb/bash-scripting/find-largest-files.sh # find the largest N files
/home/parallels/kb/bash-scripting/get-github-api-key.sh # get the current user's github api key
/home/parallels/kb/python/tsv-to-python-dict.py # convert tsv with key and value fields to python dictionary
/home/parallels/kb/python/decode-post-params.py # parse all post params from post content given on standard input
/home/parallels/kb/python/decode-cookies.py # parse a cookie from every line on standard input
/home/parallels/kb/python/urlencode.py # urlencode every input line
/home/parallels/kb/python/get-url-params.py # parse all get parameters from a url
/home/parallels/kb/awk-scripting/line-lengths.awk # constrict line widths of input text stream
/home/parallels/kb/awk-scripting/get-columns.awk # get column headings from first line of CSV
/home/parallels/kb/awk-scripting/hydra-bruteforce-with-database.awk # attempt to reuse credentials using hydra and keep track of usernames and passwords tried
/home/parallels/kb/awk-scripting/print-markdown-content-nested-in-heading.awk # print nested markdown content within headings
/home/parallels/kb/awk-scripting/file-grep-multi-lines.awk # check output of grep and next line using awk "grep -A 1 -R '^# ' ."
/home/parallels/kb/awk-scripting/toggle-case-combinatoric.awk # print all variations of upper and lower case for given lowercase string
/home/parallels/kb/awk-scripting/base64-every-line.awk # base64 encode lines individually
/home/parallels/kb/awk-scripting/combine-files.awk # combine lines from two files combinatorically with symbol between
/home/parallels/kb/awk-scripting/get-http-post-content.awk # get HTTP POST content from HTTP request stream
/home/parallels/kb/bash-scripting/what-installed-this-file.sh # find what apt package caused a particular specific file to be installed
/home/parallels/kb/awk-scripting/find-only-h1-files.awk # parse a list of files and figure out if they contain h2 headings
/home/parallels/kb/awk-scripting/user-interface-fzf.awk # testing a user interface in fzf from within awk
/home/parallels/kb/awk-scripting/start-service.awk # an attempt to select and start linux services from an fzf menu
/home/parallels/kb/awk-scripting/docker-exec-picker.awk # testing an interactive docker menu with fzf
/home/parallels/kb/docker/get-tags.sh # get the tags of a particular docker repository using curl and jq
/home/parallels/kb/docker/destroy-containers-and-images.sh # shutdown and destroy docker images manually to clean up space
/home/parallels/kb/docker/templates/ubuntu-dockerfile-template.sh # create an ubuntu dockerfile
/home/parallels/kb/bash-scripting/get-current-notes-line-count.sh # attempt to get a line count of notes while ignoring certain file extensions
/home/parallels/kb/linux/get-ip-tmux.sh # test tmux script to get IP? looks pretty bad
/home/parallels/kb/linux/named-pipe-to-netcat.sh # example of how to communicate between the network and a named pipe
/home/parallels/kb/linux/getip.sh # another script to get ip. isn't there enough of these?
/home/parallels/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell/run-docker-catch-rev-shell.sh # test running an ubuntu docker and catching a reverse shell from it
/home/parallels/kb/hacking/test-vuln-in-dockers/ubuntu-reverse-shell-user-feature-test/run-docker-catch-rev-shell.sh # test running an ubuntu docker and catching a reverse shell from it
/home/coyote/kb/hacking/windows/printnightmare-kb-list.txt # this should really go in zk or somewhere else
/home/parallels/kb/tmux/tmux-script-log.sh # attempt to create script logs from tmux panes

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

```

# do not copy these
```
/home/coyote/kb/awk-scripting/convert-to-try-list-to-separate-files.awk # rewriting a lot of commands. trash this
/home/coyote/kb/zettelkasten-tag-ideas # example tags to use in zettelkasten? trash this
/home/coyote/kb/fix-headings # comment only says: not doing? this looks like a scratch list from an old project
/home/coyote/kb/vim/example-vimrc-bindings.vim # old vimrc that looks unimportant
/home/coyote/kb/vim/example-neovim-bindings.vim # old vimrc that looks unimportant
/home/parallels/kb/bash-scripting/get-interface-ip.sh # select a network interface with fzf menu

# kb internal stuff
/home/parallels/kb/bash-scripting/autogenerate.sh # generated the markdown content for files named auto-bash, auto-awk, etc
/home/parallels/kb/autogenerate-all-languages.sh # generated the markdown content for files named auto-bash, auto-awk, etc
```

# full list
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

` zet/20230921220840/README.md `

# Related

- [20230921220633](/zet/20230921220633/README.md) list of cool ideas i still want to implement in my environment
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230923065000](/zet/20230923065000/README.md) determining which scripts have kb references using grep
- [20230906033259](/zet/20230906033259/README.md) functions to copy over and possibly remake as commands
- [20230922214323](/zet/20230922214323/README.md) this environment
- [20230923211501](/zet/20230923211501/README.md) get current CVE list as tsv
- [20230924221605](/zet/20230924221605/README.md) script to get nested markdown headings for keyword searching
- [20230924224635](/zet/20230924224635/README.md) scripts to get nmap information

Tags:

    #idea #list #script

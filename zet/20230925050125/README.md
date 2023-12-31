# git scripting hub

- concept of `git scripting related hub`
- it loooks like there could be a couple duplicates?
- [x] still need to update references and dependencies
- a lot of these scripts still have `.sh` extensions and stuff. i can rename them.
- the one that is a dependency of other scripts has been renamed `git-enum-repos-in-directory`

- list of scripts with descriptions
```bash

/home/coyote/kb/bash-scripting/get-github-credentials.sh # get the current user's github colon separated credentials
/home/coyote/kb/bash-scripting/get-github-api-key.sh # get the current user's github api key

/home/coyote/kb/bash-scripting/pull-all-git-repos.sh # pull all the git repos in home directory
/home/coyote/kb/bash-scripting/update-all-git-repos.sh # update all the git repos in home directory and prompt with lazygit

/home/coyote/kb/bash-scripting/enum-git-repos-in-directory.sh # find all git repositories in a directory
/home/coyote/kb/bash-scripting/list-github-repos.sh # list public github repositories for user

/home/coyote/kb/bash-scripting/hash-git-repository.sh # clone a github repository and hash all the files
/home/coyote/kb/bash-scripting/git-file-modification-date.sh # get the date of the last commit to modify a file as epoch timestamp and iso date

/home/coyote/kb/bash-scripting/loop-array-pull-git-repositories.sh # define bash array and show example looping on it to pull repositories in a couple known locations

cp /home/coyote/kb/bash-scripting/get-github-api-key.sh /home/coyote/kb/bash-scripting/update-all-git-repos.sh /home/coyote/kb/bash-scripting/loop-array-pull-git-repositories.sh /home/coyote/kb/bash-scripting/hash-git-repository.sh /home/coyote/kb/bash-scripting/get-github-credentials.sh /home/coyote/kb/bash-scripting/enum-git-repos-in-directory.sh /home/coyote/kb/bash-scripting/pull-all-git-repos.sh /home/coyote/kb/bash-scripting/list-github-repos.sh /home/coyote/kb/bash-scripting/git-file-modification-date.sh .
```

- checking references within scripts
```
zet/20230925050125/update-all-git-repos.sh references executable file git-enum-repos-in-directory
> $SCRIPT_DIR/git-enum-repos-in-directory $HOME |\
zet/20230925050125/pull-all-git-repos.sh references executable file git-enum-repos-in-directory
> $SCRIPT_DIR/git-enum-repos-in-directory $HOME |\
```

` zet/20230925050125/README.md `

# Related

- [20230929054003](/zet/20230929054003/README.md) bash scripting simple program template parsing arguments with case statement
- [20231112170729](/zet/20231112170729/README.md) script to get remote github URL from git repository
- [20221007193324](/zet/20221007193324/README.md) github actions
- [20231023142155](/zet/20231023142155/README.md) script to scrape information from github pages to avoid API usage
- [20230905030303](/zet/20230905030303/README.md) script to get github release links
- [20231203212512](/zet/20231203212512/README.md) TUCTF23 blog post about git blob analysis forensics challenge

Tags:

    #git #script

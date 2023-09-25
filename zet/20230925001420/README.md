# cool docker scripts to migrate

- concept of `cool docker scripts to migrate`
- these are not done yet
- [ ] update and fix any relative paths or kb references

```

/home/coyote/kb/docker/build-github-repo-docker-image.sh # clone github repository and build docker image with its name. this is a dependency of others
/home/coyote/kb/docker/get-tags.sh # get the tags of a particular docker repository using curl and jq
/home/coyote/kb/docker/destroy-containers-and-images.sh # shutdown and destroy docker images manually to clean up space
/home/coyote/kb/awk-scripting/docker-exec-picker.awk # testing an interactive docker menu with fzf
/home/coyote/kb/bash-scripting/ubuntu-docker-build-environment.sh # launch ubuntu build environment docker with current directory mounted as working directory
/home/coyote/kb/linux/runneo4j.sh # run neo4j in a docker
/home/coyote/kb/hacking/dockers/enum4linux-ng.sh # build and run enum4linux-ng docker
/home/coyote/kb/hacking/dockers/impacket.sh # build and run impacket docker
/home/coyote/kb/hacking/dockers/crackmapexec.sh # build and run CrackMapExec docker
/home/coyote/kb/bash-scripting/docker-current-directory.sh # run docker image with current directory mounted as working directory

cp /home/coyote/kb/docker/build-github-repo-docker-image.sh /home/coyote/kb/docker/get-tags.sh /home/coyote/kb/docker/destroy-containers-and-images.sh /home/coyote/kb/awk-scripting/docker-exec-picker.awk /home/coyote/kb/bash-scripting/ubuntu-docker-build-environment.sh /home/coyote/kb/linux/runneo4j.sh /home/coyote/kb/hacking/dockers/enum4linux-ng.sh /home/coyote/kb/hacking/dockers/impacket.sh /home/coyote/kb/hacking/dockers/crackmapexec.sh /home/coyote/kb/bash-scripting/docker-current-directory.sh .

```

` zet/20230925001420/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221022000131](/zet/20221022000131/README.md) put tmux and vim rc config in dockerfile for testing zkvr
- [20221028172836](/zet/20221028172836/README.md) old dockerfile for testing zkvr with vim and tmux config
- [20230922220109](/zet/20230922220109/README.md) create a dockerfile for this environment

Tags:

    #docker #script

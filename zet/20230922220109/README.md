# create a dockerfile for this environment

- concept of `create a dockerfile for this environment`
- old examples from zkvr
  - [20221028172836](/zet/20221028172836/README.md) old dockerfile for testing zkvr with vim and tmux config
  - [20221022000131](/zet/20221022000131/README.md) put tmux and vim rc config in dockerfile for testing zkvr
- it should be much easier now that the install script is much more sophisticated.
  - it might need to be updated to run in a docker where there are often missing prerequisites that should normally be installed
- 2023-09-30 i tried the old zkvr dockerfile and it still basically works. i might just need to try running the install command
- attempting to have the dockerfile install nothing at all
- it is assumed when you get this environment that you got it with git, but i should install it as a prerequisite in the environment
- 2023-10-07 docker was caching builds where "apt update" had run, then later, apt installs were failing
  - i put apt update on the same line as the environment install command
- general practice: cannot install things with sudo? might be root or be in docker

## developing
- the prerequisites are not installing in docker. sudo isn't installed in docker.
  - can use tty to determine if we can install bat interactively
  - should i have a fallback version?
```
Step 6/6 : RUN tty
 ---> Running in ea39de95341e
not a tty
The command '/bin/sh -c tty' returned a non-zero code: 1
```
- 2023-10-06 all install scripts now have architecture selection logic and do not require interactive fzf install

```bash
ln -s zet/20230922220109/Dockerfile Dockerfile
```

` zet/20230922220109/README.md `

# Related

- [20221028172836](/zet/20221028172836/README.md) old dockerfile for testing zkvr with vim and tmux config
- [20221022000131](/zet/20221022000131/README.md) put tmux and vim rc config in dockerfile for testing zkvr
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230925001420](/zet/20230925001420/README.md) cool docker scripts to migrate
- [20230930145814](/zet/20230930145814/README.md) determining cpu version for install
- [20230905184854](/zet/20230905184854/README.md) prerequesites for environment
- [20231007140839](/zet/20231007140839/README.md) references to sudo and other considerations for scripts running within a docker
- [20231007144749](/zet/20231007144749/README.md) integration test for dockerfile

Tags:

    #docker #script

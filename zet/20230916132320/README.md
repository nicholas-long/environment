# script to get platform install command

- concept of `script to get platform install command`
- use apt or brew or whatever
- determine if we need to use sudo if the user is not root
- i think it would be cool to accept arguments, like say `get-install-platform list` and it would return "apt list" as the command to list packages
  - pass "install" to get the install command, i.e. `sudo apt install`

```bash
# get user id
id -u
1000
```

` zet/20230916132320/README.md `

# Related

- [20230916125222](/zet/20230916125222/README.md) tmux scripts directory

Tags:

    #script #install

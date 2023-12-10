# chisel continuous ssh tunnel script

- install chisel
```bash
go install github.com/jpillora/chisel@latest
```
- need to run chisel in a loop on target client machines so that it reconnects if it dies
- there should be a service to do this here
- credentials and ports are required so there should be a config file on every machine that can be specific to ports for that machine
  - how about `$HOME/.chiselsetup`
- created script `zet/20231205173345/chiselpivot` to run this in a loop

- example config file
```bash
creds="username:SUPER_SECRET_PASSWRD"
port=9001
```

` zet/20231205173345/README.md `

# Related

- [20231206002013](/zet/20231206002013/README.md) webssh environment issues
- [20230922222627](/zet/20230922222627/README.md) testing environment on netbook

Tags:

    #net #script #pivot

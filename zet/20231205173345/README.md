# chisel continuous ssh tunnel script

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

- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20231206002013](/zet/20231206002013/README.md) webssh environment issues

Tags:

    #net #script #pivot

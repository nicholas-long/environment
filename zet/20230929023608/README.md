# script to get your preferred networking interface based on what is available

- concept of `get your preferred networking interface based on what is available`

```bash
/home/coyote/kb/awk-scripting/get-interface.awk # get your preferred networking interface to work with, tunnels first, then networks, and then lan
cp /home/coyote/kb/awk-scripting/get-interface.awk .

┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20230929023608]
└─$ ip a | awk -f get-interface.awk
eth0
```

` zet/20230929023608/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20230906035650](/zet/20230906035650/README.md) script to print reverse shell snippets
- [20230906033727](/zet/20230906033727/README.md) commands to get ip
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #script #net

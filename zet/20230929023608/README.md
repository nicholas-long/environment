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

- [20230906035650](/zet/20230906035650/README.md) script to print reverse shell snippets
- [20230906033727](/zet/20230906033727/README.md) commands to get ip
- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment

Tags:

    #script #net

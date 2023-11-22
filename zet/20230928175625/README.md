# ssh keygen automated expect script to generate a public and private key pair

- ssh keygen automated expect script to generate a public and private key pair
  - automatically answers ssh questions to generate the keypair
  - 2023-09-28 tested and this still works
```expect
#!/usr/bin/expect -f
set filename [lindex $argv 0];
set timeout -1
spawn ssh-keygen
match_max 100000
expect "/.ssh/id_rsa): "
send -- "$filename\r"
expect -exact "$filename\r
Enter passphrase (empty for no passphrase): "
send -- "\r"
expect -exact "\r
Enter same passphrase again: "
send -- "\r"
expect eof
```

- setting this card up
```bash
/home/parallels/kb/bash-scripting/ssh-keygen-generate-file.exp # expect script to generate ssh key by filename
cp /home/parallels/kb/bash-scripting/ssh-keygen-generate-file.exp .
```

` zet/20230928175625/README.md `

# Related

- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20230906035650](/zet/20230906035650/README.md) script to print reverse shell snippets
- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment

Tags:

    #shortcmd #hacking #script

# print md5 of every line in a password wordlist

- concept of `print md5 of every line in a wordlist`
- originally from kb script `cp /home/parallels/kb/hacking/scripts/print-all-md5s.sh .`
- not incredibly useful
- one use case was finding some cool md5s that are all numeric or something for PHP type confusion related reasons

```
/home/parallels/kb/hacking/scripts/print-all-md5s.sh # print the md5 hashes of all lines in a wordlist file
```

```bash
# print the md5 hashes of all lines in a wordlist file
function hashing {
  while read line; do
    echo -n "$line" | md5sum | awk "{print \$1, \"$line\"}"
  done
}
cat $1 | hashing
```

` zet/20230925180416/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20230925180815](/zet/20230925180815/README.md) password scripts hub

Tags:

    #script #hacking #password #hash

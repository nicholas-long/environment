# wordlists for pentesting

- concept of `wordlists for pentesting`
- also putting scripts that generate wordlists (like dates and stuff) in here
- script to generate common passwords `zet/20230925052317/generate-common-passwords.sh`
- date script appears broken

```bash
$ENVIRON_BASEPATH/zet/20230925052317/custom.dirbusting
feroxbuster --url http://$IP -w $ENVIRON_BASEPATH/zet/20230925052317/custom.dirbusting
gobuster dir -u $URL -w "$ENVIRON_BASEPATH/zet/20230925052317/custom.dirbusting"
```

` zet/20230925052317/README.md `

# Related

- [20230925180815](/zet/20230925180815/README.md) password scripts hub
- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment

Tags:

    #hacking #list #wordlist #data

# scripts to optimize alphanumeric base64

- concept of `scripts to optimize alphanumeric base64`
- ` zet/20230906035744/find-alnum-base64 `
- ` zet/20230906035744/space-invader `

```bash
┌──(parallels㉿kali-linux-2022-2)-[~/environment]
└─$ find-alnum-base64 "asdf asdf asdf" | head -n 1
YXNkZiBhc2RmICBhc2Rm
┌──(parallels㉿kali-linux-2022-2)-[~/environment]
└─$ echo YXNkZiBhc2RmICBhc2Rm | base64 -d
asdf asdf  asdf
```

` zet/20230906035744/README.md `

# Related

- [20230906035650](/zet/20230906035650/README.md) script to print reverse shell snippets
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #shortcmd #hacking #payload

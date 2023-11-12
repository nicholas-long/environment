# script to get remote github URL from git repository

- concept of `script to get remote github URL from git repository`
- `zet/20231112170729/git-remote-url`
- add as a feature in [zkvr](/zet/20221013021614/README.md)

```bash
grep -R github .git
.git/FETCH_HEAD:ddc65891bb3f1e2c44ba9853d40713281e489846		branch 'main' of https://github.com/nicholas-long/environment
.git/config:	url = https://github.com/nicholas-long/environment

git remote get-url $(git remote)
```

` zet/20231112170729/README.md `

# Related

- [20230925050125](/zet/20230925050125/README.md) git scripting hub
- [20230919172630](/zet/20230919172630/README.md) script to get root of repository or obsidian knowledge base
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser

Tags:

    #script #git #url #shortcmd

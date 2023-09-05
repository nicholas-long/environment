# script to get github release links

- concept of `script to get github release links`
- accepts one argument: github url
- returns filename and url as tab separated values
- requires jq
- use `tag_name` instead of `name` in case release names have spaces

```bash
# testing chopping up a github url given as a param
githuburl="https://github.com/nicholas-long/pen-test-environ"
username=$(echo $githuburl | cut -d / -f 4)
reponame=$(echo $githuburl | cut -d / -f 5)
echo $username $reponame

# testing peass-ng
githuburl="https://github.com/carlospolop/PEASS-ng"
username=$(echo $githuburl | cut -d / -f 4)
reponame=$(echo $githuburl | cut -d / -f 5)
tagname=$(curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/$username/$reponame/releases | jq -r '.[].tag_name' | head -n 1)
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/$username/$reponame/releases/tags/$tagname | jq -r '.assets[] | "\(.name) \(.browser_download_url)"'
```

` zet/20230905030303/README.md `

# Related

- [20230905021249](/zet/20230905021249/README.md) the issue with installing bat
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #script #github #shortcmd
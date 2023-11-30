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

- [20230907151050](/zet/20230907151050/README.md) bat interactive install script
- [20230920022857](/zet/20230920022857/README.md) script to get linpeas to current directory
- [20231016050313](/zet/20231016050313/README.md) scanning code for vulnerabilities
- [20231023142155](/zet/20231023142155/README.md) script to scrape information from github pages to avoid API usage
- [20230925050125](/zet/20230925050125/README.md) git scripting hub

Tags:

    #script #github #shortcmd

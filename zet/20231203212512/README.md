# TUCTF23 blog post about git blob analysis forensics challenge

- concept of `TUCTF23 blog post about git blob analysis forensics challenge`
- including challenge file `zet/20231203212512/tuctf-devops-2023.tar.gz`

- git blob enumeration commands
```bash
# print all object types
git rev-list --objects --all | git cat-file --batch-check='%(objectname) %(objecttype) %(rest)'
# count all blobs
git rev-list --objects --all | git cat-file --batch-check='%(objectname) %(objecttype) %(rest)' | awk '$2 == "blob" { print $1 }' | wc -l
```

` zet/20231203212512/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20231122214039](/zet/20231122214039/README.md) stuff i should blog about
- [20230925050125](/zet/20230925050125/README.md) git scripting hub

Tags:

    #blogpost

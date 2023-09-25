# list of unfinished todo items

- concept of `list of unfinished todo items`
- i can do this in obsidan wtih a query, so why not here?

```bash
grep -R TODO zet
grep -R '^ *- \[ \]' zet
grep -R '^ *- \[ \]' zet | cut -d : -f 1 | sort -u | cut -d / -f 2
./graphquery --human <( grep -R '^ *- \[ \]' zet | cut -d : -f 1 | sort -u | cut -d / -f 2 )
```

- where can i find snippets
- zet/20221008063052/autoexec_enrich
- zet/20221009192000/autoexec_enrich
- zet/20221006213953/autoexec_enrich
- zet/20221026064448/autoexec_enrich


` zet/20230925055222/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- 20221008063052

Tags:

    #script #todo #list

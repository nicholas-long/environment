# copy or jump to recently edited files feature

- concept of `jump to recently edited files feature or copy their filenams`

```bash
#!/bin/bash
find /path/to/directory -type f -print0 | xargs -0 ls -lt

find zet -type f -print0 | xargs -0 ls --full-time

# simple find recent
find zet -type f -print0 | xargs -0 ls --full-time | awk '
{
  gsub(/^[^ ]* *[^ ]* *[^ ]* *[^ ]* *[^ ]* */,"")
  print
}
' | sort
```

` zet/20231129161540/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #script #enhancement

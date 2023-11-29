# copy or jump to recently edited files feature

- concept of `jump to recently edited files feature or copy their filenams`

```
Sure, here is a Bash script that will do that:

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

Replace `/path/to/directory` with your actual directory path. This script lists all files in the directory and its subdirectories, sorted by modification date (most recently modified first).
```

` zet/20231129161540/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser

Tags:

    #script #enhancement

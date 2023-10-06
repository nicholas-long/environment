# things i want to implement in zkvr after working on the environment

- [x] fuzzy file search for opening and editing multiple files, any files in any directory
- [x] copy current fixes back up to zkvr
  - 2023-09-29 copied in
- [x] should copy up find executable command - id 20230926234809
- [x] copy up new code fixes 2023-09-30

- commands run and work on copying stuff over
```bash
for zkvrid in $(ls ~/zkvr/zet); do
  echo "doing id $zkvrid"
  cp -r zet/$zkvrid/* ~/zkvr/zet/$zkvrid/
done

find . -name find-executable
zet/20230926234809/find-executable
cp -r zet/20230926234809 ~/zkvr/zet/

zet/20231001000026/minimum-required-dependency-zets 20221013021614
zet/20231001000026/minimum-required-dependency-zets 20221013021614

./graphquery --human <(minimum-required-dependency-zets 20221013021614)
query --human /dev/fd/63
- [20221006032546](/zet/20221006032546/README.md) my original implementation of zet cmd #zettelkasten #bash #coding #program #script #command #command #repo
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser #tui #program #zettelkasten
- [20221014025416](/zet/20221014025416/README.md) clone a subsection of a graph by tag boundaries #idea
- [20221025024238](/zet/20221025024238/README.md) enumerate tags #bash #trick #awk #script #zet
- [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files #shortcmd #bash #command

for zkvrid in $(minimum-required-dependency-zets 20221013021614); do
  echo "doing id $zkvrid"
  cp -r zet/$zkvrid/* ~/zkvr/zet/$zkvrid/
done

# need the todo tracker
cp -r zet/20230925055222 ~/zkvr/zet/
```

` zet/20230922214602/README.md `

# Related

- [20230922214323](/zet/20230922214323/README.md) this environment
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20230930224454](/zet/20230930224454/README.md) problems encountered with zkvr while testing this environment
- [20231001000026](/zet/20231001000026/README.md) script to find the minimum required set of dependent zettels to ship a scripting project
- [20231001082012](/zet/20231001082012/README.md) automatically keeping track of changes to zkvr binaries

Tags:

    #list

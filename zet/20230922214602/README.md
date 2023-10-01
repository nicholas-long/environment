# things i want to implement in zkvr after working on the environment

- [x] fuzzy file search for opening and editing multiple files, any files in any directory
- [x] copy current fixes back up to zkvr
  - 2023-09-29 copied in
- [x] should copy up find executable command - id 20230926234809
- [ ] copy up new code fixes 2023-09-30

- commands run and work on copying stuff over
```bash
for zkvrid in $(ls ~/zkvr/zet); do
  echo "doing id $zkvrid"
  cp -r zet/$zkvrid/* ~/zkvr/zet/$zkvrid/
done

find . -name find-executable
zet/20230926234809/find-executable
cp -r zet/20230926234809 ~/zkvr/zet/
```

` zet/20230922214602/README.md `

# Related

- [20230922214323](/zet/20230922214323/README.md) this environment
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20230930224454](/zet/20230930224454/README.md) problems encountered with zkvr while testing this environment
- [20231001000026](/zet/20231001000026/README.md) script to find the minimum required set of zettels to ship a scripting project

Tags:

    #idea

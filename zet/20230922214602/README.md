# things i want to implement in zkvr after working on the environment

- [x] fuzzy file search for opening and editing multiple files, any files in any directory
- [x] copy current fixes back up to zkvr
  - 2023-09-29 copied in

```bash
for zkvrid in $(ls ~/zkvr/zet); do
  echo "doing id $zkvrid"
  cp -r zet/$zkvrid/* ~/zkvr/zet/$zkvrid/
done

```

` zet/20230922214602/README.md `

# Related

- [20230922214323](/zet/20230922214323/README.md) this environment
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser

Tags:

    #idea

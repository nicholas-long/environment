# track modification dates

- concept of `track modification dates`
- i wanted to track recently modified cards too, but it will be hard to determine what is modified with links changing all the time
- 2023-10-05 this card tracks other cards based on their timestamp ID numbers to create a list of cards modified in the last X hours
  - these nodes get connected to the [recently created nodes hub](/zet/20221012171100/README.md)

```bash
export recenttimestamp=$(date -u --date='100 hours ago' '+%Y%m%d%H%M%S')
```

` zet/20221012144502/README.md `

# Related

- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20221006032546](/zet/20221006032546/README.md) my original implementation of zet cmd
- [20221009095853](/zet/20221009095853/README.md) finished
- [20221008061845](/zet/20221008061845/README.md) workflow
- [20221008063052](/zet/20221008063052/README.md) autorunning scripts in cards

Tags:

    #meta

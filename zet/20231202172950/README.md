# converting hacking notes to zkvr

- concept of `converting hacking notes to zkvr`
- it is practical to use different things on different devices such as using Obsidian on my phone and using ZKVR in the Linux terminal
  - private zk - Obsidian
  - private hacking/development notes - zkvr
  - public environment - zkvr
- i want them on github
- i can still link to things in my notes directly from a zkvr repo
- can use [obsidian links scripts](/zet/20230919153113/README.md)  to get links
- i need private notes for hacking boxes
- i can release retired machine notes as blog posts

- count of unique files that have this tag
```bash
grep -R '#hacking' | cut -d : -f 1 | sort -u | wc -l
841
```

- create a list of files
```bash
grep -R '#hacking' ~/zkmirror/ | cut -d : -f 1 | sort -u > hacking-notes-list
```

` zet/20231202172950/README.md `

# Related

- [20231201154515](/zet/20231201154515/README.md) findings from converting to zettelkasten and converting formats
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20231025200905](/zet/20231025200905/README.md) zettelkasten to blog conversion hub
- [20230919153113](/zet/20230919153113/README.md) obsidian links scripts
- [20221008042814](/zet/20221008042814/README.md) WIP

Tags:

    #convert #markdown

# obsidian links scripts

- concept of `obsidian links scripts`
- [x] get all links
- [x] get all links filenames
  - can use `dirname $file` to get path of parent directory
- [ ] in order to actually work like obsidian, this should actually traverse back up to the top of the directory structure

```bash
zet/20230919153113/markdown-obsidian-links "/media/psf/zk/recycling ideas from old zkvr autorunning scripts.md"
obsidian query blocks
20221008063052 autorunning scripts in cards
20221005200242 empty zettels to fix
20221006032546 my original implementation of zet cmd
20221006213953 video notes
20221008063052 autorunning scripts in cards
20221009192000 stuff to put on main page
20221012144502 track modification dates
20221017173622 report about fixing problem tags in cards
20221021081636 template example card to run command output in snippet
20221024180316 check for duplicate hashtags in cards
20221026064448 check syntax of dash lists for tabstop 4
20221026135114 add step to check for duplicate links in enrich scanrefs
20221026165857 second snippet example card
20221028014614 keep track of scripts with graphquery
20221028033132 how many cards you got now
20221028161058 enforce assets live in nodes
20221028194014 check header line lengths in script
20221030041924 generate mermaid graph from set of zet cards
20221111225634 fix empty cards with only links

zet/20230919153113/markdown-obsidian-link-files "/media/psf/zk/recycling ideas from old zkvr autorunning scripts.md"
/media/psf/zk/obsidian query blocks.md
/media/psf/zk/20221008063052 autorunning scripts in cards.md
/media/psf/zk/20221005200242 empty zettels to fix.md
/media/psf/zk/20221006032546 my original implementation of zet cmd.md
/media/psf/zk/20221006213953 video notes.md
/media/psf/zk/20221008063052 autorunning scripts in cards.md
/media/psf/zk/20221009192000 stuff to put on main page.md
/media/psf/zk/20221012144502 track modification dates.md
/media/psf/zk/20221017173622 report about fixing problem tags in cards.md
/media/psf/zk/20221021081636 template example card to run command output in snippet.md
/media/psf/zk/20221024180316 check for duplicate hashtags in cards.md
/media/psf/zk/20221026064448 check syntax of dash lists for tabstop 4.md
/media/psf/zk/20221026135114 add step to check for duplicate links in enrich scanrefs.md
/media/psf/zk/20221026165857 second snippet example card.md
/media/psf/zk/20221028014614 keep track of scripts with graphquery.md
/media/psf/zk/20221028033132 how many cards you got now.md
/media/psf/zk/20221028161058 enforce assets live in nodes.md
/media/psf/zk/20221028194014 check header line lengths in script.md
/media/psf/zk/20221030041924 generate mermaid graph from set of zet cards.md
/media/psf/zk/20221111225634 fix empty cards with only links.md

```

## test running it in console
```bash
markdown-obsidian-links "/media/psf/zk/recycling ideas from old zkvr autorunning scripts.md"

┌──(parallels㉿kali-linux-2022-2)-[~]
└─$ markdown-obsidian-links "/media/psf/zk/recycling ideas from old zkvr autorunning scripts.md"
obsidian query blocks
20221008063052 autorunning scripts in cards
20221005200242 empty zettels to fix
20221006032546 my original implementation of zet cmd
20221006213953 video notes
20221008063052 autorunning scripts in cards
20221009192000 stuff to put on main page
20221012144502 track modification dates
20221017173622 report about fixing problem tags in cards
20221021081636 template example card to run command output in snippet
20221024180316 check for duplicate hashtags in cards
20221026064448 check syntax of dash lists for tabstop 4
20221026135114 add step to check for duplicate links in enrich scanrefs
20221026165857 second snippet example card
20221028014614 keep track of scripts with graphquery
20221028033132 how many cards you got now
20221028161058 enforce assets live in nodes
20221028194014 check header line lengths in script
20221030041924 generate mermaid graph from set of zet cards
20221111225634 fix empty cards with only links
```

# content of file

```md
- [[obsidian query blocks]] have similar use cases as in zkvr -> [[20221008063052 autorunning scripts in cards]]

- old autorunning cards
- [[20221005200242 empty zettels to fix]]
- [[20221006032546 my original implementation of zet cmd]]
- [[20221006213953 video notes]]
- [[20221008063052 autorunning scripts in cards]]
- [[20221009192000 stuff to put on main page]]
- [[20221012144502 track modification dates]]
- [[20221017173622 report about fixing problem tags in cards]]
- [[20221021081636 template example card to run command output in snippet]]
- [[20221024180316 check for duplicate hashtags in cards]]
- [[20221026064448 check syntax of dash lists for tabstop 4]]
- [[20221026135114 add step to check for duplicate links in enrich scanrefs]]
- [[20221026165857 second snippet example card]]
- [[20221028014614 keep track of scripts with graphquery]]
- [[20221028033132 how many cards you got now]]
- [[20221028161058 enforce assets live in nodes]]
- [[20221028194014 check header line lengths in script]]
- [[20221030041924 generate mermaid graph from set of zet cards]]
- [[20221111225634 fix empty cards with only links]]
```

- how to find something with 2 links to test
```
grep -R '\[\[.*\[\[' /home/coyote/Documents/zk/
```

` zet/20230919153113/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path
- [20221013221136](/zet/20221013221136/README.md) graph query language for zettelkasten
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #bash #script #zettelkasten #markdown #shortcmd

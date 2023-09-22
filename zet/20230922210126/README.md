# cards i can clean up

- workflow:
  - list all the cards and get summaries.
  - move bad cards to bottom and important ones to top.
  - remove cards from 2023
  - find something useless?
- [20221006213953](/zet/20221006213953/README.md) video notes
  - has a snippet and automatic enrich that finds all viedeo notes cards that are not linked. could be useful. keeping this for now.
- [20221023085822](/zet/20221023085822/README.md) implement returning paths or tables in graph query language
  - there is a script here that might be useful or used or something to look at in the future
- interesting stuff for dockerfile project
  - [20221028172836](/zet/20221028172836/README.md) symlink dockerfile
  - [20221022000131](/zet/20221022000131/README.md) put tmux and vim rc config in dockerfile
- might want to save - interesting
  - [20221105220915](/zet/20221105220915/README.md) add recurring timers using github cron actions
  - [20221014025416](/zet/20221014025416/README.md) clone a subsection of a graph by tag boundaries
  - [20221026064448](/zet/20221026064448/README.md) check syntax of dash lists for tabstop 4

```
ls zet/20221023085822
README.md
walkquery
ls zet/20221006013313
README.md
ls zet/20221006213953
README.md
autoexec_enrich
snippet
```

## batch 3 - stuff that was linked to the finished card

- [20221014215609](/zet/20221014215609/README.md) finished, but with ongoing related work
- [20221101163755](/zet/20221101163755/README.md) fix clone
- [20221105021715](/zet/20221105021715/README.md) git diff picker feature

```
ls -al zet/20221014215609
ls -al zet/20221101163755
ls -al zet/20221026064448
ls -al zet/20221105021715

total 12
drwxr-xr-x  2 coyote coyote 4096 Sep 21 23:22 .
drwxr-xr-x 83 coyote coyote 4096 Sep 22 17:01 ..
-rw-r--r--  1 coyote coyote  693 Sep 21 23:22 README.md
total 12
drwxr-xr-x  2 coyote coyote 4096 Sep 21 23:22 .
drwxr-xr-x 83 coyote coyote 4096 Sep 22 17:01 ..
-rw-r--r--  1 coyote coyote  542 Sep 21 23:22 README.md
total 20
drwxr-xr-x  2 coyote coyote 4096 Sep 22 16:49 .
drwxr-xr-x 83 coyote coyote 4096 Sep 22 17:01 ..
-rw-------  1 coyote coyote  343 Sep 22 16:49 README.md
-rwxr-xr-x  1 coyote coyote  416 Sep 21 23:22 autoexec_enrich
-rwxr-xr-x  1 coyote coyote  332 Sep 21 23:22 snippet
total 12
drwxr-xr-x  2 coyote coyote 4096 Sep 21 23:22 .
drwxr-xr-x 83 coyote coyote 4096 Sep 22 17:01 ..
-rw-r--r--  1 coyote coyote  522 Sep 21 23:22 README.md

rm -rf zet/20221014215609
rm -rf zet/20221101163755
rm -rf zet/20221105021715
```

- enumerating and prioritizing all cards
```bash
ls zet | ./graphquery --human

- [20221006013313](/zet/20221006013313/README.md) zettelkasten #zettelkasten
- [20221028172836](/zet/20221028172836/README.md) symlink dockerfile #meta #docker #file
- [20221022000131](/zet/20221022000131/README.md) put tmux and vim rc config in dockerfile #idea
- [20221003150098](/zet/20221003150098/README.md) TODO #hub #todo #list
- [20221006213953](/zet/20221006213953/README.md) video notes #video #notes #hub #videonotes
- [20221007044552](/zet/20221007044552/README.md) todo or to-try list #todo #list #to-try-list #hub
- [20221008042814](/zet/20221008042814/README.md) WIP #todo #hub
- [20221008061845](/zet/20221008061845/README.md) workflow #workflow #optimization #hub #concept
- [20221008063052](/zet/20221008063052/README.md) autorunning scripts in cards #zettelkasten #bash #script #template #test
- [20221009095853](/zet/20221009095853/README.md) finished #done #hub
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page #meta
- [20221011145143](/zet/20221011145143/README.md) bat command pretty printer #command #linux #markdown #preview
- [20221014215609](/zet/20221014215609/README.md) finished, but with ongoing related work #hub #done
- [20221023085822](/zet/20221023085822/README.md) implement returning paths or tables in graph query language #idea
- [20221024215216](/zet/20221024215216/README.md) future enhancements to graph query language #todo #zettelkasten #graph #enhancement
- [20221025024238](/zet/20221025024238/README.md) enumerate tags #bash #trick #awk #script #zet
- [20221027011800](/zet/20221027011800/README.md) zetcli bash wrapper subcommand implementation #idea #bash #command #program #filesystem
- [20221031092923](/zet/20221031092923/README.md) template for video notes #templatemain #videonotes #notes
- [20221101043303](/zet/20221101043303/README.md) important features and workflow tricks to mention on main page #idea #list
- [20221101052020](/zet/20221101052020/README.md) TODO: Your to-do list #todo #list #me #hub
- [20221101163755](/zet/20221101163755/README.md) fix clone #bug #fixed
- [20221103162623](/zet/20221103162623/README.md) move zetcmd to wrapper CLI and remove fzf subcommands from CLI #idea
- [20221105021715](/zet/20221105021715/README.md) git diff picker feature #idea #feature #tui
- [20221105220915](/zet/20221105220915/README.md) add recurring timers using github cron actions #idea #program #feature #cron #zet
- [20221105222236](/zet/20221105222236/README.md) cron syntax #cron #syntax #info
- [20221105224810](/zet/20221105224810/README.md) launch browser to current card on github #idea #git #web #zet
- [20221012144502](/zet/20221012144502/README.md) track modification dates #idea
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub #hub
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser #tui #program #zettelkasten
- [20221013221136](/zet/20221013221136/README.md) graph query language for zettelkasten #idea #todo
- [20221014074318](/zet/20221014074318/README.md) important choices of tech stack #idea
- [20221021071146](/zet/20221021071146/README.md) delete things marked as #DEL periodically #workflow #cleanup
- [20221026064448](/zet/20221026064448/README.md) check syntax of dash lists for tabstop 4 #idea #test #report
- [20221028173620](/zet/20221028173620/README.md) yq binaries #program #yaml #scripting #util
- [20221014025416](/zet/20221014025416/README.md) clone a subsection of a graph by tag boundaries #idea
- [20221007193324](/zet/20221007193324/README.md) github actions #git
- [20221006032546](/zet/20221006032546/README.md) my original implementation of zet cmd #zettelkasten #bash #coding #program #script #command #command #repo

```

` zet/20230922210126/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221023085822](/zet/20221023085822/README.md) implement returning paths or tables in graph query language
- [20221006013313](/zet/20221006013313/README.md) zettelkasten
- [20221006213953](/zet/20221006213953/README.md) video notes
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230922212036](/zet/20230922212036/README.md) command shortcut to get markdown titles or content summaries

Tags:

    #cleanup

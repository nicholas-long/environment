# script to search zk markdown in command line

- concept of `script to search zk markdown in command line`
- exactly the same as the `k` command from my pen test environment
  - https://github.com/nicholas-long/pen-test-environ/blob/main/tmux-scripts/searchmarkdown.sh
  - kb markdown shortcut
  ```bash
  alias k='~/tmux-scripts/searchmarkdown.sh -q "^# " ~/kb'
  ```
- good example would be zkvr script for deep searching
  - full content search can make it kinda verbose - try it out
  - [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
  - `zet/20221013021614/graphbrowser`
  - `zet/20221013021614/connectome_deep`
- [x] should print tags on every line to help with searching
- [x] should support selecting and printing multiple files using fzf built in multi-select
  - [x] fix issue with single quotes in filename of search results
- [x] fix issue with double quotes in filenames in preview
- [x] need to use single quotes because commands can execute in double quotes, like for instance with backticks
- changed to print tags only on lines with headings and next to the filename just in case
- added script to find and edit markdown pages in my obsidian zk, but it doesn't work with files with single quotes in the name
- [x] this should also search notes and content from within the environment?
- 2023-10-23 converting this to use titles and have a separate version for deep searching
  - copy from [20230924221605](/zet/20230924221605/README.md) script to get nested markdown headings for keyword searching

```bash
# from zet/20221013021614/graphbrowser
  elif [ "$act" == "/search" ]; then
    if [ -z $TMUX ]; then
      newid=$(zet/$MYID/connectome_deep | fzf | awk '{print $1}')
      export prevdoc="$doc"
      export doc=zet/$newid/README.md
    else
      tf=$(mktemp)
      zet/$MYID/connectome_deep | fzf -m | awk '{print $1}' | sort -u > $tf
      for f in $(cat $tf); do
        tmux new-window -n 'explore' $GRAPH_PROG zet/$f/README.md
      done
      rm "$tf"
    fi
```

```awk
# input: all filenames of README files are given to this script as argument files for awk to process
BEGINFILE {
  rl=related=gotheading=0
  id = FILENAME
  gsub(/^zet\//,"",id)
  gsub(/\/.*$/,"",id)
}
$0 ~ /^ *$/ { next }
{ lastline = $0 }
gotheading && !related {
  if (!/^# [Rr]elated/) print id, heading, $0
}
gotheading && related {
  if ($2 ~ /^\[.*\)$/) { gsub(/^- [^ ]+/,"- ") }
}
related && /^- / {
  for (n=0;n<rl;n++) {
    print id, heading, $0, relatedlines[n]
  }
  #if the knowledge base gets too big and search is slow, edit this ?
  if (rl < 9) relatedlines[rl++] = $0
}
!gotheading && /^# / {
  gsub(/^# /,"")
  heading = $0
  gotheading=1
}
gotheading && /^# [Rr]elated/ {
  related=1
}
ENDFILE {
  gsub(/^ */,"",lastline)
  print id, heading, lastline # print tags
}
```

- need to define something like `ZK_PATH` in bashrc to make it work
```bash
ZK_PATH=/media/psf/zk
find $ZK_PATH -name '*.md' -type f -print0 | xargs -0 awk '
  BEGIN {
    OFS = "\t"
  }
  {
    gsub(/\t/,"")
    fn=FILENAME
    gsub(/.*\//,"",fn)
    gsub(/^[0-9]+ /,"",fn)
    print FILENAME, fn, $0
  }
'

```

` zet/20230912192810/README.md `

# Related

- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20230916125222](/zet/20230916125222/README.md) tmux scripts directory
- [20230920031249](/zet/20230920031249/README.md) script to search tldr commands by features to find ways to do things
- [20230924221605](/zet/20230924221605/README.md) script to get nested markdown headings for keyword searching
- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20230927033258](/zet/20230927033258/README.md) debugging the markdown script on mac os
- [20230928174503](/zet/20230928174503/README.md) script to automatically generate headings and markdown for displaying code files as snippets
- [20230928185603](/zet/20230928185603/README.md) script to print the content of markdown text within the heading level of a particular line
- [20230928184621](/zet/20230928184621/README.md) markdown helper scripts
- [20231005211810](/zet/20231005211810/README.md) script to sync only markdown files from zk to github
- [20221011145143](/zet/20221011145143/README.md) bat command pretty printer
- [20230922214323](/zet/20230922214323/README.md) this environment
- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment

Tags:

    #bash #script #markdown #search #workflow #shortcmd

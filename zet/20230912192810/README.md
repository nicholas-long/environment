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

- [20230906033259](/zet/20230906033259/README.md) functions to copy over and possibly remake as commands
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config

Tags:

    #bash #script #markdown #search #workflow #shortcmd

# debugging the markdown script on mac os

- concept of `debugging the script on mac os`
- command `fuzzy-search-markdown-content` returns nothing on mac os
- solution was to change it to gawk!
- awk on mac os does not support `BEGINFILE`

- script contents
  - test awk print
  - test arg
```
cat $(which fuzzy-search-markdown-content)
#!/bin/bash

find $ZK_PATH -name '*.md' -type f -print0 | xargs -0 awk '
  BEGIN {
    OFS = "\t"
  }
  BEGINFILE {
    fn=FILENAME
    gsub(/.*\//,"",fn)
    gsub(/\.md$/,"",fn)
    gsub(/^[0-9]+ /,"",fn)
    split("", array) # clear out lines array
    split("", tags) # clear out tags array
    n = 0 # array index
  }
  { content = 0 }
  /^Tags: $/ { next }
  /^# Related *$/ { next }
  /^[ \t]*$/ { next } #not all spaces
  /^ *- / { content = 1 }
  /^# / { content = 1 }
  /^ *# / { content = 1 }
  content {
    gsub(/\t/,"")
    array[n++] = $0 # store line to print later
  }
  { # look for tags
    for (f = 1; f < NF; f++) { # loop over all words
      if ($f ~ /^#[A-Za-z0-9]+$/) { # regular expression to match valid tags
        tags[$f]++
      }
    }
  }
  ENDFILE {
    tagline = ""
    for (t in tags) { tagline = tagline " " t }
    for (i = 0; i < n; i++) {
      print FILENAME, fn, array[i] tagline
    }
  }
'
```

` zet/20230927033258/README.md `

# Related

- [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea

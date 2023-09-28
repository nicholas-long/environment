#!/usr/bin/awk -f
# i think the input of this script was supposed to come from a TSV list of filename, line, and heading
{
  FS="\t"
  filename=$1
  line=$2
  heading=$3
  sub(/^ /, "", heading)
  headingcount[filename]++
}
heading ~ /##/ { removed[filename] = 1 }
END {
  for (f in headingcount) if (!(f in removed) && headingcount[f] > 1) { 
    sub(/^\.\//,"", f)
    print f
  }
}

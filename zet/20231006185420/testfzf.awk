#!/usr/bin/gawk -f
#
BEGIN {
  fzf = "fzf" # change full command here
  print "option 1" |& fzf
  print "option 2" |& fzf
  print "option 3" |& fzf
  close(fzf, "to") # make fzf stop expecting more lines
  fzf |& getline answer

  print "got answer", answer
}

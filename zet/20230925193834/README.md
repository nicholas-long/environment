# testing on mac os

- `sed` does not have working implementations of the `-e` or `-i` arguments on Mac OS
  - cannot include multiple sed commands to execute
  - need additional arguments in order to edit in place
  - these differences are enough that i need to make new scripts in order to get specificic zkvr features to work on mac os
  - [20231128160825](/zet/20231128160825/README.md) cross platform scripts to implement broken zkvr features on mac os

## resolved issues
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path
  - trying to avoid using graphquery to build this because it might be hard to get it working
- if running on a mac, it is recommended to install homebrew first
  - issues trying to run homebrew as root? edit script to use no sudo for brew
- bat can be installed with brew
- added brew to lazygit, bat, and fff install scripts
- issue with ll alias on mac os - fixing in bash rc by test running the program
- xclip - xclip does not work on mac os. need to figure out what does.
  - https://curiosum.com/til/copy-paste-within-terminal-macos-and-linux
  - pbcopy and pbpaste
  - this will affect the tmux scripts that copy the tmux buffer to clipboard. added to tmux config.
    - [20230905015107](/zet/20230905015107/README.md) tmux config
- `ll` keyword - how to tell if ls supports `time-style`
```bash
┌──(parallels㉿kali-linux-2022-2)-[~/environment]
└─$ ls --help | grep time-style
      --full-time            like -l --time-style=full-iso
      --time-style=TIME_STYLE
```
- issues with find command
  - find doesn't support `-executable` on mac os. i use this quite frequently.
  - fixed this with a custom script.
    - [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files
  - many places still need to be updated to use this script
  - https://apple.stackexchange.com/questions/116367/find-all-executable-files-within-a-folder-in-terminal
  - problems with the find command mean that i am unable to search markdown from within the terminal
    - [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
- shortcut commands dont work - fixed script
  - [x] shortcut directory does not build - error with awk syntax in graphquery?
  - problems with graphquery
  ```bash
  coyote@Nicholass-MacBook-Pro environment % zet/20230905160850/update-shortcuts
  query @shortcmd
  /usr/bin/awk: syntax error at source line 4 source file implementation/parseids
   context is
          match($0, >>>  /zet.([0-9]+)\//, <<<
  /usr/bin/awk: bailing out at source line 4 source file implementation/parseids
  no more results
  ```
- default terminal fonts don't support the arrow symbols required to draw the tmux hotbar
  - https://gist.github.com/480/3b41f449686a089f34edb45d00672f28
  - installed hack nerd fonts

## open issues
- `$EDITOR` is still not defined from within tmux - why?
- could try changing relevant zkvr commands to gawk instead of awk?
  - awk on mac os does not support `BEGINFILE`. i will need to search for this and use gawk instead.
  - have to use `#!/usr/bin/env gawk -f`
  - [20230929064428](/zet/20230929064428/README.md) script to check for beginfile usage
- mac os is missing the `ip` command. this means scripts that get my ip will definitely not work.
  - https://command-not-found.com/ip
  - [x] add iproute2 to dependencies. that doesn't fix it on mac os though, but maybe on some dockers. there is not a version of ip for mac os?

## zkvr-specific issues on mac os
- things to fix in cross platform scripts [cross platform scripts to implement broken zkvr features on mac os](/zet/20231128160825/README.md)
  - adding and deleting tags doesn't work
  - spawn doesn't work - fix in cross platform scripts
- zkvr scripts should be updated to use gawk instead of awk
  - [20230926224444](/zet/20230926224444/README.md) updating scripts to use gawk when possible
  - [20230929064428](/zet/20230929064428/README.md) script to check for beginfile usage
- many things are broken in enrich - won't fix? run that on linux for now or use the github action
- navigation and editing documents work
- merge-into does not work with enriching. if i disable enriching and fix the scripts, maybe i can merge on mac os.
- awk script that drives the copy snippet functionality works as expected
- [x] unlinking documents doesn't work
  - fixed. was due to differences with `sed -i`
- linking documents was initially broken, but seems to be working now after changing one problem script to gawk
  - the particular script that was fixed on the mac is called `parseids`
  ```
  enter title> debugging the script on mac os
  [diag] new debugging the script on mac os
  sed: 1: "zet/20230927032725/READ ...": invalid command code z
  [diag] addref 20230927032725 20230912192810
  sed: 1: "zet/20230927032725/READ ...": invalid command code z
  spawned 20230927032725
  [diag] addref 20230912192810 20230927032725
  [diag] enrich_links_single  20230912192810
  [diag] enrich_links_single  20230927032725
  ```
  - it was able to spawn a card, but it didn't replace the template content or insert the link into the current card

` zet/20230925193834/README.md `

# Related

- [20230905184854](/zet/20230905184854/README.md) prerequesites for environment
- [20230907151050](/zet/20230907151050/README.md) bat interactive install script
- [20230922051930](/zet/20230922051930/README.md) lazygit interactive install script
- [20230905210416](/zet/20230905210416/README.md) fast file manager fff
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20230905015107](/zet/20230905015107/README.md) tmux config
- [20230913044318](/zet/20230913044318/README.md) tmux buffer edit hotkey script
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path
- [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
- [20230926224444](/zet/20230926224444/README.md) updating scripts to use gawk when possible
- [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files
- [20230927033258](/zet/20230927033258/README.md) debugging the markdown script on mac os
- [20230929064428](/zet/20230929064428/README.md) script to check for BEGINFILE usage in awk scripts requiring change to gawk
- [20231128160825](/zet/20231128160825/README.md) cross platform scripts to implement broken zkvr features on mac os

Tags:

    #test #dotfiles

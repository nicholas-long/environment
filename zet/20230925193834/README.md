# testing on mac os

## resolved issues
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
    - [20230927001343](/zet/20230927001343/README.md) places to update find command to use new executable version in order to be compatible on mac
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

## open issues
- default terminal fonts don't support the arrow symbols required to draw the tmux hotbar
- `$EDITOR` is still not defined from within tmux - why?
- could try changing relevant zkvr commands to gawk instead of awk?
  - have to use `#!/usr/bin/env gawk -f`
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path
  - trying to avoid using graphquery to build this because it might be hard to get it working
- mac os is missing the `ip` command. seriously? this means scripts that get my ip will definitely not work. it should be added to dependencies.
  - https://command-not-found.com/ip
  - [x] add iproute2 to dependencies. that doesn't fix it on mac os though, but maybe on some dockers.
  - there is not a version of ip for mac os?
- awk on mac os does not support `BEGINFILE`. i will need to search for this and use gawk instead.

## zkvr-specific issues on mac os
- zkvr scripts should be updated to use gawk instead of awk
  - [20230926224444](/zet/20230926224444/README.md) updating scripts to use gawk when possible
- linking documents was initially broken, but seems to be working now after changing one problem script to gawk
  - the particular script that was fixed on the mac is called `parseids`
- navigation and editing documents work
- awk script that drives the copy snippet functionality works as expected
- spawn doesn't work. it looks like an issue with sed in a script
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
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230922051930](/zet/20230922051930/README.md) lazygit interactive install script
- [20230905210416](/zet/20230905210416/README.md) fast file manager fff
- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20230905015107](/zet/20230905015107/README.md) tmux config
- [20230913044318](/zet/20230913044318/README.md) tmux buffer edit hotkey script
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path
- [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
- [20230926224444](/zet/20230926224444/README.md) updating scripts to use gawk when possible
- [20230926234809](/zet/20230926234809/README.md) a non-platform-specific find command script for executable files
- [20230927001343](/zet/20230927001343/README.md) places to update find command to use new executable version in order to be compatible on mac
- [20230927033258](/zet/20230927033258/README.md) debugging the markdown script on mac os

Tags:

    #idea

# testing on mac os

- concept of `testing on mac os`
- testing on Mac OS, and the install script did not work. issues trying to run homebrew as root? edit script to use no sudo for brew
- if running on a mac, it is recommended to install homebrew first
- bat didn't install, but it can be installed with brew
- added brew to lazygit, bat, and fff install scripts
- issue with ll alias on mac os - fixing in bash rc by test running the program
- default terminal fonts don't support the arrow symbols required to draw the tmux hotbar
- xclip - xclip does not work on mac os. need to figure out what does.
  - https://curiosum.com/til/copy-paste-within-terminal-macos-and-linux
  - pbcopy and pbpaste
  - this will affect the tmux scripts that copy the tmux buffer to clipboard
- `$EDITOR` is still not defined from within tmux - why?
- mac os is missing the `ip` command. seriously?
- problems with the find command mean that i am unable to search markdown from within the terminal
  - [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line

- how to tell if ls supports `time-style`
```bash
┌──(parallels㉿kali-linux-2022-2)-[~/environment]
└─$ ls --help | grep time-style
      --full-time            like -l --time-style=full-iso
      --time-style=TIME_STYLE
```

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

- could try changing relevant zkvr commands to gawk instead of awk?
  - have to use `#!/usr/bin/env gawk -f`
  - issues with find command
    - find doesn't support `-executable` on mac os. i use this quite frequently.
    - https://apple.stackexchange.com/questions/116367/find-all-executable-files-within-a-folder-in-terminal
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path
  - trying to avoid using graphquery to build this because it might be hard to get it working

## zkvr-specific issues on mac os
- zkvr scripts should be updated to use gawk instead of awk
- linking documents was initially broken, but seems to be working now after changing one problem script to gawk

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

Tags:

    #idea

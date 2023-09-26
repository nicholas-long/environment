# tmux buffer edit hotkey script

- concept of `tmux buffer edit hotkey script`
- https://github.com/nicholas-long/pen-test-environ/blob/main/tmux-scripts/edit-buffer.sh
- `zet/20230913044318/tmux-buffer-edit` is the script to call from tmux
- issues uncovered testing on mac os
  - [20230925193834](/zet/20230925193834/README.md) testing on mac os
  - `$EDITOR` is still not defined - why? add quick hack to try vim or nvim
  - using head with -1 chars to remove the last byte is not supported on all operating systems.
    - i can check if it is supported with `--help`, but `--help` isn't supported on mac os either so it creates warnings
    - could use a program or custom script to drop the last newline character from the end of an input stream

```bash
#!/bin/bash

tf=$(mktemp)
tmux saveb $tf
nvim $tf
head -c -1 $tf | tmux loadb -
rm $tf
```

` zet/20230913044318/README.md `

# Related

- [20230905015107](/zet/20230905015107/README.md) tmux config
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20221008061845](/zet/20221008061845/README.md) workflow
- [20230906033259](/zet/20230906033259/README.md) functions to copy over and possibly remake as commands
- [20230916125222](/zet/20230916125222/README.md) tmux scripts directory
- [20230925193834](/zet/20230925193834/README.md) testing on mac os

Tags:

    #script

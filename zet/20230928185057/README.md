# bash self parsing code

- stupid simple self parsing script example
```bash
#!/bin/bash

function thing {
  echo you called the first function
}

function option2 {
  echo you called the other function
}

if echo $1 | grep 'runit' >/dev/null 2>/dev/null; then
  cat $0 | \
    grep '^function ' | \
    awk '{print $2}' | \
    fzf | \
    xargs -I R bash -c "source $0; R"
fi


```

- setting up this card
```
/home/parallels/kb/bash-scripting/self-parsing-code-function-names.sh # test self-parsing scripts
cp /home/parallels/kb/bash-scripting/self-parsing-code-function-names.sh .
```

` zet/20230928185057/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea

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

- [20230929054003](/zet/20230929054003/README.md) bash scripting simple program template parsing arguments with case statement
- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment

Tags:

    #bash #trick #scripting

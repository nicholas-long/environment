# bash file commands that are not builtins

## steps
- if debian or ubuntu
  - install `basename`
- install `coreutils`

## investigation
- are things like `realpath` a built-in?
  - might not be https://command-not-found.com/realpath
  - on debian and ubuntu, package is called `realpath`
    - `basename` is in `coreutils` though
  - on other distros, realpath is in `coreutils`

```
```

` zet/20230905185446/README.md `

# Related

- [20230905184854](/zet/20230905184854/README.md) prerequesites for environment
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #bash #command #install

# how to implement a modular subcommand with lightweight scripts - ideas for a blog post

- this is a way to organize code in order to create powerful CLI tools quickly
  - modular design is easy to test
  - concerns can be separated
  - common implementation functions can be broken out into subcommands. can hide them.
    - example of this is the `git` command. it has numerous implementation subcommands you can use as a developer to get text-formatted data about files within repository
- really easy to implement a command with subcommands as a set of short scripts, but it could also be implemented within a compiled program

## examples
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data

## steps
- the main command you run is a main wrapper script
  - handle file paths
  - handle locating subcommand implementations
  - for installed programs, typically this wrapper could be installed in `/usr/bin` and be designed to locate subcommand files installed elsewhere, like `/usr/share`
- set an env var for main program command `$0` to pass to subcommands
  - this way, subcommands can call each other using the main wrapper script. if there is logic involved in finding subcommand scripts then it will be easier to have the parent wrapper script responsible for finding them
- switch based on subcommand name. there are two options:
  - separate files with subcommand as file name
  - one giant switch statement

```
```

` zet/20231116151546/README.md `

# Related

- [20230922214323](/zet/20230922214323/README.md) this environment
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20231025215645](/zet/20231025215645/README.md) my blog

Tags:

    #idea

# how to implement a subcommand - ideas for a blog post

- i want to write a blog post about how to implement a subcommand

## examples
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20230929145418](/zet/20230929145418/README.md) fsdb project - file based database for partitioning and event sourced data

## steps
- main wrapper script
  - handle file paths
  - handle locating subcommand implementations
- set an env var for main program command `$0` to pass to subcommands
  - this way, subcommands can call each other using the main wrapper script. if there is logic involved in finding subcommand scripts then it will be easier to have the parent wrapper script responsible for finding them
- switch based on name
  - two options:
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

Tags:

    #idea

# script to display information about other scripts and their dependencies

- script to check all executable files in a directory `zet/20230925024118/scripts-dependencies`
  - pass directory as an argument, if not provided, the script will operate on zet directory by default
  - calls awk script to check dependencies of scripts whose filenames are passed as arguments `zet/20230925024118/check-script-dependencies`
- check if scripts reference hardcoded paths i know about like /kb/ and /tmux-scripts/ or something
- check if scripts reference each other - harder
  - easy solution is to report any mentions of any executable scripts that are nested within the current directory
- awk script could find individual reference scripts
- useful for
- it works on the whole kb directory!

- example usage
```bash
zet/20230925024118/scripts-dependencies zet/20230906033727
# display all dependencies
zet/20230925024118/scripts-dependencies
```

` zet/20230925024118/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) script to describe other kb scripts based on their comments
- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20230925001420](/zet/20230925001420/README.md) cool docker scripts to migrate
- [20230925033312](/zet/20230925033312/README.md) bash current script directory
- [20230925050125](/zet/20230925050125/README.md) git scripting hub
- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment

Tags:

    #shortcmd #script

# guidelines for enrich scripts within this environment

- refer to shortcut commands by relative path
  - right now, the environment is not installed on github runners, so shortcut commands will not run within the enrich steps.
  - these commands should be referred to by relative path assuming the working directory is the root of the repository
- don't use `find -executable` because it doesn't work on Mac OS, use script instead

```
```

` zet/20231111154742/README.md `

# Related

- [20230905015223](/zet/20230905015223/README.md) install scripts
- [20221007193324](/zet/20221007193324/README.md) github actions
- [20230922214323](/zet/20230922214323/README.md) this environment
- [20231107183617](/zet/20231107183617/README.md) github action permission issues with automatic enrich workflows
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #tip #script

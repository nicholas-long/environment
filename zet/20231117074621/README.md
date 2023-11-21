# automatic pentesting and hacking enumeration scripts

- concept of `automatic pentesting and hacking enumeration scripts`
- can use autorecon and parse the output files https://github.com/Tib3rius/AutoRecon
- event sourced: store events in a data file to be parsed and projected later. a simple AWK script can tell what user/pass combos still need to be tried on which services
  - on discovery of new users and passwords
  - results of testing users and passwords
  - on discovery of new web paths

## what kinds of things could be automated
- testing credentials on all services every time new ones are found
  - learn from first attempt here https://github.com/nicholas-long/credpanda
- finding hardcoded credentials in code - use linpeas logic on directory?
- web dirbusting - i don't like how feroxbuster works exactly...
  - wrap wfuzz and use increasingly complex wordlists, scanning each subdirectory

```
```

` zet/20231117074621/README.md `

# Related

- [20230929153207](/zet/20230929153207/README.md) computer science experiments hub

Tags:

    #hacking #scripting

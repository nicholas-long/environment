# testing openai chatgpt to create some scripts

- concept of `testing openai chatgpt`

- write a script to get the current battery percentage on linux or mac os
Here's a script for Mac OS:

```bash
pmset -g batt | egrep '([0-9]+\%).*' -o --colour=auto | cut -f1 -d';'
```

And for Linux:

```bash
upower -i $(upower -e | grep 'battery') | grep 'percentage:' | awk '{print $2}'
```

` zet/20231104035739/README.md `

# Related

- [20231103204105](/zet/20231103204105/README.md) openai chatgpt CLI command
- [20231114070621](/zet/20231114070621/README.md) script for chatGPT prompt to select tags for documents automatically

Tags:

    #test #ai

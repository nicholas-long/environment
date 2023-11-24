# script for chatGPT prompt to select tags for documents automatically

- concept of `script to select tags for documents automatically using chatgpt`
- script to run to get tags on document `zet/20231114070621/generate-tags`
  - pass in a document as argument

- asking chatgpt to label a document. i chose the [zkvr page](/zet/20221013021614/README.md) to test.
```
┌──(coyote㉿netbook3)-[~/environment/zet/20231114070621]
└─$ ./generate-prompt ../20221013021614/README.md | chatgpt
The appropriate tags for this markdown document are: `#tui`, `#workflow`, `#git`, `#terminal`, `#zettelkasten`.
```
- sometimes it gets creative and adds extra tags that do not exist yet

- adding tags programmatically
```bash
$ ./zc addtag -t test 20231114070621
```

` zet/20231114070621/README.md `

# Related

- [20230922214323](/zet/20230922214323/README.md) this environment
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20231104035739](/zet/20231104035739/README.md) testing openai chatgpt to create some scripts
- [20230922214602](/zet/20230922214602/README.md) things i want to implement in zkvr after working on the environment
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20231122214039](/zet/20231122214039/README.md) stuff i should blog about

Tags:

    #ai #meta

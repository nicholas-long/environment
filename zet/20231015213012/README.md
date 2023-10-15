# script to print todo items in terminal

- concept of `script to print todo items in terminal`
- use todo list
  - [20230925055222](/zet/20230925055222/README.md) list of unfinished todo items
- the idea is that anywhere this list occurs is a repository with todo items

```bash
# look around for the UID of the todo item card
find $HOME -type d -name 20230925055222

find $HOME -type d -name 20230925055222 | while read dir; do
  bat $dir/README.md
done
```

` zet/20231015213012/README.md `

# Related

- [20230925055222](/zet/20230925055222/README.md) list of unfinished todo items
- [20221008061845](/zet/20221008061845/README.md) workflow

Tags:

    #shortcmd #script #todo

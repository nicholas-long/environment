# my blog

- located at [my domain](https://nicklong.xyz)

# testing hugo
- https://gohugo.io/getting-started/quick-start/
- links do not work right out of the box. can be fixed by cleaning them up like this:
```
testing links within hugo [link text]({{< ref "third" >}})
```

` zet/20231025215645/README.md `

# script for updating blog

- i set up a local service to call this from the server on demand when github calls a webhook

```bash
# this works but it should be cleaned out too
sudo cp -r public/* /var/www/html/
```


# Related

- [20230922214323](/zet/20230922214323/README.md) this environment
- [20231116151546](/zet/20231116151546/README.md) how to implement a modular subcommand with lightweight scripts - ideas for a blog post
- [20231117071155](/zet/20231117071155/README.md) testing automatic blog post creation with ChatGPT
- [20231025200905](/zet/20231025200905/README.md) zettelkasten to blog conversion hub
- [20231122214039](/zet/20231122214039/README.md) stuff i should blog about
- [20231206225901](/zet/20231206225901/README.md) script to fuzzy search blog posts to get links

Tags:

    #blog

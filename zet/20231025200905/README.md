# zettelkasten to blog conversion hub

- concept of `zettelkasten to blog conversion hub`
- the more i look into jekyll, the more i think i should manually maintain a blog and copy information in
- i think the blog should be located in this repository so i can easily add files
- i can make scripts to start blog posts and copy one file in from zk at a time
  - identify a file
  - create appropriate frontmatter
  - echo it to the blog
  - open it in vim for editing

## decisions on automating zk to blog deployment
- I don't think i'm going to do this for my blog. it makes more sense to just create posts manually from stuff in my zk.
  - everything is already organized into one place, at least.
  - images can be resized, video links can be embedded

## steps for automatically converting markdown to jekyll
- search for tag `blogpost` in zk
- take text files from ZK
  - find linked/attached images and include them
  - don't include PDFs, obviously
- convert date formats in file names
  - files should already have unique ID, just change filename
  - want to update links from zk with script [20231025200754](/zet/20231025200754/README.md) script to update obsidian internal links in markdown
- prepare frontmatter
  - title
  - convert tag formats - tags in jekyll go in frontmatter
- remove dead links to things within zk or just unlink them?
- get it to a single directory of markdown files
- run jekyll

```
```

` zet/20231025200905/README.md `

## getting jekyll to work in the workflow of publishing a blog

- where do you put images in a jekyll blog?
- links
  - jekyll does not work with obsidian format links `[[title]]`
  - if you use regular links, you have to figure out manually where your blog post will be on the server which is annoying
- 2023-11-19 i have decided to use hugo instead of jekyll

```
```

# using hugo

- everything in content directory is converted
- front matter of posts
  - is important but not necessary
  - tags must go in front matter in yaml array format
- references format is different.
  - converting from zkvr to hugo might be easy because all files are linked by full path
  - could convert wikilinks from obsidian to hugo refs

# Related

- [20231025200754](/zet/20231025200754/README.md) script to update obsidian internal links in markdown
- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221006013313](/zet/20221006013313/README.md) zettelkasten
- [20231025215645](/zet/20231025215645/README.md) my blog
- [20231201154515](/zet/20231201154515/README.md) findings from converting to zettelkasten and converting formats
- [20231202172950](/zet/20231202172950/README.md) converting hacking notes to zkvr

Tags:

    #markdown #web #blog #zettelkasten

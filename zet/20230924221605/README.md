# script to get nested markdown headings for keyword searching

- concept of `script to get nested markdown headings for keyword searching`
- get nested headings from markdown in order to get full keyword contents
- `zet/20230924221605/markdown-get-nested-headings`
- would be useful for
  - [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
  - i think i originally used this script for searching in kb

- example usage
```bash
zet/20230924221605/markdown-get-nested-headings /home/coyote/kb/docker/docker-hd-space.md
/home/coyote/kb/docker/docker-hd-space.md	1	 # docker cleanup
/home/coyote/kb/docker/docker-hd-space.md	3	 # docker cleanup ## Try to keep logs under control
/home/coyote/kb/docker/docker-hd-space.md	14	 # docker cleanup ## Free up space immediately
```

- original awk script
```awk
#!/usr/bin/awk -f
BEGIN { OFS="\t" }
BEGINFILE {
  block = 0
  delete heading
}
!block && /^#+ / {
  level=length($1)
  heading[level]=$0
  for (n=level + 1; n <= 6; n++) heading[n]="" # clear nested headings
  fulltext=""
  for (n=1; n <= level; n++) fulltext = fulltext " " heading[n]
  print FILENAME, FNR, fulltext
}
/^ *```/ { block = !block }
```

- locating and copying kb files
```
/home/coyote/kb/awk-scripting/get-headings.awk get nested headings from markdown in order to get full keyword contents
/home/coyote/kb/awk-scripting/get-headings.awk
┌──(coyote㉿netbook3)-[~/environment/zet/20230924221605]
└─$ cp /home/coyote/kb/awk-scripting/get-headings.awk ./markdown-get-nested-headings
```

- did i use this script anywhere? no?
```
grep -R get-headings ~/kb
```

- finding test markdown with multiple heading to try this script on
  - search for nested h2 headings recursively
```bash
grep -R '^## ' ~/kb
```

` zet/20230924221605/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) script to describe other kb scripts based on their comments
- [20230912192810](/zet/20230912192810/README.md) script to search zk markdown in command line
- [20230928171946](/zet/20230928171946/README.md) data analysis scripting hub
- [20230928174503](/zet/20230928174503/README.md) script to automatically generate headings and markdown for displaying code files as snippets
- [20230928185603](/zet/20230928185603/README.md) script to print the content of markdown text within the heading level of a particular line
- [20230928184621](/zet/20230928184621/README.md) markdown helper scripts
- [20231003022851](/zet/20231003022851/README.md) data engineering hub

Tags:

    #markdown #script #shortcmd

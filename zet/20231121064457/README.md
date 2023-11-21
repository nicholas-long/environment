# merge note functionality for zkvr

- concept of `merge note functionality for zkvr`
- in obsidian, i like to merge notes to help clean things up. it would be good to have this functionality here.
- actually, if i just concatenate the 2 files together and delete the old note, the backlinks will update
  - need an awk script to combine the related sections
    - read any number of files
    - combine related sections and tags into one
- any note you want to merge should be linked to the current note. i think that is a reasonable restriction. if you want to merge one quickly, then you can add a link.

```bash
zet/20231121064457/merge-markdown-related-links zet/20231121064457/README.md zet/20230922214602/README.md
./merge-markdown-related-links ../20231121064457/README.md ../20230922214602/README.md
```

` zet/20231121064457/README.md `

# Related

- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20230922214602](/zet/20230922214602/README.md) things i want to implement in zkvr after working on the environment
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #zet #zettelkasten #markdown

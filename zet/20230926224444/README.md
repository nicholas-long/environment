# updating scripts to use gawk when possible

- plain awk won't work the same as GNU awk on mac os
- should update scripts to use gawk in particular
- update scripts within zc implementation `lrwxrwxrwx 1 parallels parallels 18 Aug 31 23:50 implementation -> zet/20221006032546`
- linking documents was initially broken, but seems to be working now after changing one problem script to gawk
  - the particular script that was fixed on the mac is called `parseids`
- shebang line to use
  - because awk has a -f parameter and this influences how scripts are run
```
#!/usr/bin/env -S gawk -f
```

```bash
grep -R '#!/usr/bin/awk -f' zet
zet/20230906035744/space-invader:#!/usr/bin/awk -f
zet/20230925001420/docker-exec-picker.awk:#!/usr/bin/awk -f
zet/20221027011800/zc-gettitle:#!/usr/bin/awk -f
zet/20221027011800/zc-readmefile:#!/usr/bin/awk -f
zet/20230926190350/line-lengths.awk:#!/usr/bin/awk -f
zet/20230926190350/live-combine.awk:#!/usr/bin/awk -f
zet/20230926190350/hydra-bruteforce-with-database.awk:#!/usr/bin/awk -f
zet/20230926190350/toggle-case-combinatoric.awk:#!/usr/bin/awk -f
zet/20230926190350/base64-every-line.awk:#!/usr/bin/awk -f
zet/20230926190350/combine-files.awk:#!/usr/bin/awk -f
zet/20230923211501/filter-relevant-cve-items:#!/usr/bin/awk -f
zet/20230906050031/center-text:#!/usr/bin/awk -f
zet/20230924221605/markdown-get-nested-headings:#!/usr/bin/awk -f
zet/20230924221605/README.md:#!/usr/bin/awk -f
zet/20230919153113/markdown-obsidian-links:#!/usr/bin/awk -f
zet/20221025024238/enumtags:#!/usr/bin/awk -f
zet/20230921220840/describe-script:#!/usr/bin/awk -f
zet/20230925024118/check-script-dependencies:#!/usr/bin/awk -f
zet/20230905015059/plainvimconfig.vim:abbr _awk #!/usr/bin/awk -f
zet/20230905015059/vimconfig.vim:abbr _awk #!/usr/bin/awk -f

# scripts used in zc implementation
zet/20221006032546/scanrefs:#!/usr/bin/awk -f
zet/20221006032546/parseids:#!/usr/bin/awk -f
zet/20221006032546/quickrefs:#!/usr/bin/awk -f
grep: zet/20221006032546/todo.md: No such file or directory
zet/20221006032546/countlines:#!/usr/bin/awk -f
zet/20221006032546/getcontent:#!/usr/bin/awk -f
zet/20221006032546/fixlines:#!/usr/bin/awk -f
zet/20221006032546/addsnippet:#!/usr/bin/awk -f

# test if copying works because this is used in copy functionality
zet/20221013021614/getcopycontent:#!/usr/bin/awk -f

# updated query for work in progress with converting
grep -R '#!/usr/bin/awk -f' zet/20221006032546
zet/20221006032546/scanrefs:#!/usr/bin/awk -f
zet/20221006032546/parseids:#!/usr/bin/awk -f
zet/20221006032546/quickrefs:#!/usr/bin/awk -f
grep: zet/20221006032546/todo.md: No such file or directory
zet/20221006032546/countlines:#!/usr/bin/awk -f
zet/20221006032546/getcontent:#!/usr/bin/awk -f
zet/20221006032546/fixlines:#!/usr/bin/awk -f
zet/20221006032546/addsnippet:#!/usr/bin/awk -f
```

` zet/20230926224444/README.md `

# Related

- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20221013021614](/zet/20221013021614/README.md) zkvr terminal graph browser
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20221013221136](/zet/20221013221136/README.md) graph query language for zettelkasten
- [20221006032546](/zet/20221006032546/README.md) my original implementation of zet cmd
- [20230929064428](/zet/20230929064428/README.md) script to check for BEGINFILE usage in awk scripts requiring change to gawk

Tags:

    #idea

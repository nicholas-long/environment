# enabling CGI as an API interface on apache

- i created my own script by copying and erasing the default config
- there is no requirement on extension, the file just has to be executable by www-data and in visible directory
- snippet of apache site script
  - this is within the virtualhost tag
```
  ScriptAlias /api/ /opt/cgi/
  <Directory "/opt/cgi/">
    AllowOverride None
    Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
    Require all granted
  </Directory>
```

` zet/20231007202209/README.md `

# Related

- [20230929153207](/zet/20230929153207/README.md) computer science experiments hub
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20231009060511](/zet/20231009060511/README.md) enabling gzip compression on CGI scripts

Tags:

    #web #program #config

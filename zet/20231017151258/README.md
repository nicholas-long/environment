# script to get snyk api key

- concept of `script to get snyk api key`
- API key stored at `~/.config/configstore/snyk.json`.

```
cat /home/coyote/.config/configstore/snyk.json | awk -F '"' '{print $(NF-1)}'
cat /home/coyote/.config/configstore/snyk.json | awk -F '"' 'NF > 1 {print $(NF-1)}'
```

` zet/20231017151258/README.md `

# Related

- [20231016195712](/zet/20231016195712/README.md) snyk code scanning docker
- [20231016050403](/zet/20231016050403/README.md) snyk vulnerability scanner
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #shortcmd #script #apikey

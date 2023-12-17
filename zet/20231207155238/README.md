# script to move downloads and screenshots from clipboard to current directory

- concept of `script to move downloads and screenshots to current directory`

# screenshots
- [x] where do screenshots go on linux?
  - print screen copies them to the clipboard
- [x] on mac, screenshots go on the desktop
- [x] add as feature to zkvr

```bash
xclip -selection c -t image/png -o | file -
date +%s
ls ~/Desktop/Screenshot* | sort | tail -n 1
```

` zet/20231207155238/README.md `

# Related

- [20231207171853](/zet/20231207171853/README.md) test screenshot of zkvr
- [20221009095853](/zet/20221009095853/README.md) finished

Tags:

    #script #shortcmd

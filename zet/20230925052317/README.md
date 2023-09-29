# wordlists for pentesting

- concept of `wordlists for pentesting`
- also putting scripts that generate wordlists (like dates and stuff) in here
- script to generate common passwords `zet/20230925052317/generate-common-passwords.sh`

```bash
/home/coyote/kb/wordlists/active_directory_brute # simple season and year wordlist plus some simple passwords
/home/coyote/kb/wordlists/etc.files # list of etc files from seclists project. could just link to project.
/home/coyote/kb/wordlists/custom.dirbusting # my custom dirbusting list of things that sounded important and missing from existing lists

cp /home/coyote/kb/wordlists/active_directory_brute /home/coyote/kb/wordlists/etc.files /home/coyote/kb/wordlists/custom.dirbusting .

/home/parallels/kb/hacking/passwords/generate-common-passwords.sh # generate common passwords
cp /home/parallels/kb/hacking/passwords/generate-common-passwords.sh .

/home/parallels/kb/hacking/tricks/python-fuzz-valid-dates.py # fuzz valid dates
cp /home/parallels/kb/hacking/tricks/python-fuzz-valid-dates.py .

/home/parallels/kb/bash-scripting/generate-dates.sh # generate ISO format dates wordlists for the last few years
cp /home/parallels/kb/bash-scripting/generate-dates.sh .
```

` zet/20230925052317/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20230925180815](/zet/20230925180815/README.md) password scripts hub

Tags:

    #hacking #list #wordlist #data

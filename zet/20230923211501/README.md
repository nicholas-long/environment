# get current CVE list as tsv

- [x] need to update the relative path used in the sh script
- script named `zet/20230923211501/get-cve-list-tsv`
- example running and filtering with the awk script
```bash
zet/20230923211501/get-cve-list-tsv | zet/20230923211501/filter-relevant-cve-items
```

```bash
/home/coyote/kb/python/convert-csv-to-tsv.py # convert CSV to TSV
/home/coyote/kb/hacking/cve/get-tsv.sh # download the current CVE list get as Tab Separated Values. everything in this cve directory is about this project.
/home/coyote/kb/hacking/cve/relevant.awk # filter the CVE list for potentially valid, relevant vulnerabilities
ls /home/coyote/kb/hacking/cve
get-tsv.sh
note
relevant.awk
cp /home/coyote/kb/python/convert-csv-to-tsv.py /home/coyote/kb/hacking/cve/get-tsv.sh /home/coyote/kb/hacking/cve/relevant.awk zet/20230923211501/
```

- old note: cool line effects
```awk
#gsub(/  *\|  */, "\n| ")
```

` zet/20230923211501/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20221008061845](/zet/20221008061845/README.md) workflow
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page

Tags:

    #script #bash #awk

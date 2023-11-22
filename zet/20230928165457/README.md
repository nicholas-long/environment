# awk print unique lines

- print only unique lines using awk
- `zet/20230928165457/unique-lines-unsorted-fast`
- does not require sorting first like `sort -u`
  - therefore it can run in place like a stream and just drop lines it has seen
- awk is pretty fast
- adding as a short command because it is relatively useful for data engineering

```
/home/parallels/kb/bash-scripting/awk-print-unique-lines.sh # use awk to print only unique lines as a stream processor
cp /home/parallels/kb/bash-scripting/awk-print-unique-lines.sh .
```

` zet/20230928165457/README.md `

# Related

- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment

Tags:

    #shortcmd #script #awk #data

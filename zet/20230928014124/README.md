# script to extract an embedded file stream from a PDF

- concept of `script to extract an embedded file stream from a pdf`
- extract PDF embedded file stream for use with PDF file attach exploits like mpdf
  - useful for some exploits that allow embedding and exfiltrating files with PDF generators
- steps
  - prepend gzip magic bytes
  - extract zlib stream between PDF stream and endstream with quick and dirty awk

```bash
/home/parallels/kb/hacking/tricks/extract-pdf-embedded-file-stream.sh # extract PDF embedded file stream for use with PDF file attach exploits like mpdf
cp /home/parallels/kb/hacking/tricks/extract-pdf-embedded-file-stream.sh .
zet/20230925024118/scripts-dependencies zet/20230928014124
zet/20230925024118/scripts-dependencies zet/20230928014124

```

` zet/20230928014124/README.md `

# Related

- [20230905212307](/zet/20230905212307/README.md) important things from old install scripts and pen test environ that were copied to environment

Tags:

    #script #file #hacking #shortcmd

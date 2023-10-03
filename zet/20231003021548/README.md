# script to enumerate all files in an aws s3 bucket url recursively

- concept of `script to enumerate all files in an aws s3 bucket url recursively`
- input: s3 bucket URL, can be a directory
  - it is assumed that there will be a trailing slash in the URL
- output: all file URLs are printed to stdout
- script can be run from any working directory
- uses recursion of processes to traverse directories
  - diagnostic information about the current directory is written to stderr in order not to interfere with data being written to stdout.
  - it is difficult to ctrl-c to cancel this script because of the nested processes. can this be fixed with return codes?
- it is assumed that the filenames within the bucket do not have spaces in them.

```
zet/20231003021548/enum-s3-files-within-url s3://bucketname/path/to/directory/
```

` zet/20231003021548/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP

Tags:

    #shortcmd #script #aws #cloud

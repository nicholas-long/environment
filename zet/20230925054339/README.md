# convert MSDS managed password structure to NTLM hash

- `zet/20230925054339/convert-msds-managed-password-to-ntlm-hash.py`
- python script to convert a GMSA managed password structure to a NTLM hash
- this was needed for some windows machines that don't have appropriate powershell libraries to do GMSA password stuff on the target box
- reads a file called `managedpassword.hex` that has the GMSA password structure encoded in hex
- [x] copy in more information from my zk
```python
#!/usr/bin/python3
# convert a GMSA managed password structure to a NTLM hash
## input file - managed_password.hex
## the value of msDS-ManagedPassword is decimal numbers representing bytes, one per line. convert to hex.
## $ cat managed_password | awk '{ printf("%.2x", $1) }' > managed_password.hex
## most of this taken from gMSADumper https://github.com/micahvandeusen/gMSADumper
```
- converting form decimal numnbers output from powershell to hex format in order to be input into this script
```bash
$ cat managed_password | awk '{ printf("%.2x", $1) }' > managed_password.hex
```

` zet/20230925054339/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20230925180815](/zet/20230925180815/README.md) password scripts hub

Tags:

    #windows #password

# convert MSDS managed password structure to NTLM hash

- `zet/20230925054339/convert-msds-managed-password-to-ntlm-hash.py`
- python script to convert a GMSA managed password structure to a NTLM hash
- this was needed for some windows machines that don't have appropriate powershell libraries to do GMSA password stuff on the target box
- reads a file called `managedpassword.hex` that has the GMSA password structure encoded in hex
- [ ] copy in more information from my zk

```
cp /home/coyote/kb/hacking/windows/convert-msds-managed-password-to-ntlm-hash.py .
```

` zet/20230925054339/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20221008042814](/zet/20221008042814/README.md) WIP

Tags:

    #windows #password

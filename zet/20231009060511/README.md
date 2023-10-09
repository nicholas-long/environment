# enabling gzip compression on CGI script output

- concept of `enabling gzip compression on CGI scripts`
- interpreted correctly by browser

```bash
┌──(coyote㉿netbook3)-[/opt/cgi]
└─$ cat testzip
#!/bin/bash

echo "Content-Type: text/html"
echo "Content-Encoding: gzip"
echo ""
echo "it worked" | gzip
```

` zet/20231009060511/README.md `

# Related

- [20231007202209](/zet/20231007202209/README.md) enabling CGI as an API interface on apache
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #web #script #zip

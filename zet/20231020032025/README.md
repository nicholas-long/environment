# apache docker with CGI enabled

- concept of `apache docker with CGI enabled`
- from my original collection https://github.com/nicholas-long/docker-collection/tree/main/apache2-cgi

```bash
docker build . -t apache2cgi

# mount a www directory and cgi directory
docker run --rm -d -v "${PWD}/www:/var/www/html" -v "${PWD}/cgi:/usr/lib/cgi-bin" -p "80:80" cgi
```

` zet/20231020032025/README.md `

# Related

- [20230928164014](/zet/20230928164014/README.md) dockerfile templates
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20231007202209](/zet/20231007202209/README.md) enabling CGI as an API interface on apache
- [20231020033222](/zet/20231020033222/README.md) apache docker for testing vulnerabilities template
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #web #docker

# apache docker for testing vulnerabilities template

- here are the commands to build and run the docker
```bash
docker build . -t apache2testing
docker run --rm -d -v "${PWD}/www:/var/www/html" -p "80:8000" apache2testing
```

` zet/20231020033222/README.md `

# Related

- [20231020032025](/zet/20231020032025/README.md) apache docker with CGI enabled
- [20230928164014](/zet/20230928164014/README.md) dockerfile templates
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #shortcmd #script #docker

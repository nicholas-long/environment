# apache docker template shortcut command for testing vulnerabilities

- here are the commands to build and run the docker
```bash
docker build . -t apache2testing
docker run --rm -d -v "${PWD}/www:/var/www/html" -p "80:80" apache2testing
docker run -d -p "8000:80" apache2testing
```

` zet/20231020033222/README.md `

# Related

- [20231020032025](/zet/20231020032025/README.md) apache docker with CGI enabled
- [20230928164014](/zet/20230928164014/README.md) dockerfile templates

Tags:

    #shortcmd #script #docker

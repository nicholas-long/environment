# snyk code scanning docker

- concept of `snyk code scanning docker`
- pass a git repsitory as an argument

```bash
docker build . -t snykrunner
docker run --rm snykrunner https://github.com/akondas/symfony-actuator-bundle
docker run --rm -e SNYK_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX snykrunner https://github.com/akondas/symfony-actuator-bundle
```

` zet/20231016195712/README.md `

# Related

- [20231016050403](/zet/20231016050403/README.md) snyk vulnerability scanner
- [20231016185250](/zet/20231016185250/README.md) php code security scanner phpcs docker
- [20231016050313](/zet/20231016050313/README.md) scanning code for vulnerabilities
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20231017151258](/zet/20231017151258/README.md) script to get snyk api key

Tags:

    #scan #docker #hacking

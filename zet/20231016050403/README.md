# snyk vulnerability scanner

- https://snyk.io/
- code analysis scanner, supported languages
  - Apex
  - .NET
  - C/C++
  - Go
  - Java and Kotlin
  - JavaScript
  - PHP
  - Python
  - Ruby
  - Bazel
  - Scala
  - Elixir
  - Swift and Objective-C
  - TypeScript
  - VB.NET
- API keys
  - i'm not able to get an API key easily for testing without paying for some reason
  - but i can authenticate using the browser with `snyk auth` and grab my API key afterwards
  - API key stored at `~/.config/configstore/snyk.json`.
- command reference on web https://docs.snyk.io/snyk-cli/cli-commands-and-options-summary
- example commands to authenticate and scan a repository
```bash
# authenticate the machine to the API
snyk auth

# test the current directory with snyk code. i think this uploads the code.
snyk code test
```

## scanning
- scanning uploads files to snyk
  - sometimes scans get stuck for quite a while after upload. scanning might need a timeout.
- if there is a `composer.lock` file, then run `snyk test` as well to scan dependency versions
- all output from snyk goes to stdout, at least if it is not running in a tty

### output
- program returns exit code ( 1? ) if there are issues
- successful code scan result
```
✔ Awesome! No issues were found.

snyk code test | grep 'Awesome! No issues'
✔ Awesome! No issues were found.
```

## dependency scanning output with results
- composer lock scan results
```
└─$ snyk test

Testing /home/parallels/testing/symfony-actuator-bundle...

✗ High severity vulnerability found in symfony/http-kernel
  Description: Authentication Bypass
  Info: https://security.snyk.io/vuln/SNYK-PHP-SYMFONYHTTPKERNEL-3266769
  Introduced through: symfony/framework-bundle@5.4.14
  From: symfony/framework-bundle@5.4.14 > symfony/http-kernel@5.4.15
  Fixed in: 4.4.50, 5.4.20, 6.0.20, 6.1.12, 6.2.6



Organization:      nicholas.eden.long
Package manager:   composer
Target file:       composer.lock
Project name:      akondas/symfony-actuator-bundle
Open source:       no
Project path:      /home/parallels/testing/symfony-actuator-bundle
Licenses:          enabled

Tested 33 dependencies for known issues, found 1 issue, 1 vulnerable path.
```

` zet/20231016050403/README.md `

# Related

- [20231016050313](/zet/20231016050313/README.md) scanning code for vulnerabilities
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub
- [20231016195712](/zet/20231016195712/README.md) snyk code scanning docker

Tags:

    #command #hacking

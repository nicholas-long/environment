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
- command reference on web https://docs.snyk.io/snyk-cli/cli-commands-and-options-summary
- example commands to authenticate and scan a repository
```bash
# authenticate the machine to the API
snyk auth

# test the current directory with snyk code. i think this uploads the code.
snyk code test
```

## scanning
- sometimes scans get stuck for quite a while after upload

### output
- successful code scan result
```
✔ Awesome! No issues were found.

# grep works, but output from run goes to stderr and refreshes with CR
snyk code test | grep 'Awesome! No issues'
✔ Awesome! No issues were found.
```

` zet/20231016050403/README.md `

# Related

- [20231016050313](/zet/20231016050313/README.md) scanning code for vulnerabilities
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #command #hacking

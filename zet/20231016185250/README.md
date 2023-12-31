# php code security scanner phpcs docker

- concept of `php code security scanner phpcs docker`
- pass a git repsitory as an argument

```bash
docker build . -t phpcsrunner
docker run --rm phpcsrunner https://github.com/akondas/symfony-actuator-bundle
```

` zet/20231016185250/README.md `

# phpcs code scanner security audit extensions

- concept of `phpcs code scanner`
- https://github.com/FloeDesignTechnologies/phpcs-security-audit
- run from working directory of the security audit repo, pass parameter of the directory to scan for vulnerable antipatterns
```bash
┌──(parallels㉿kali-linux-2022-2)-[~/testing/phpcs-security-audit]
└─$ phpcs --extensions=php,inc,lib,module,info --standard=Security ../symfony-actuator-bundle

FILE: /home/parallels/testing/symfony-actuator-bundle/src/Service/Info/Collector/Symfony.php
--------------------------------------------------------------------------------------------
FOUND 0 ERRORS AND 1 WARNING AFFECTING 1 LINE
--------------------------------------------------------------------------------------------
 29 | WARNING | Function array_map() that supports callback detected
--------------------------------------------------------------------------------------------


FILE: /home/parallels/testing/symfony-actuator-bundle/src/Service/Info/Collector/Git.php
----------------------------------------------------------------------------------------
FOUND 0 ERRORS AND 4 WARNINGS AFFECTING 4 LINES
----------------------------------------------------------------------------------------
 22 | WARNING | Filesystem function file_exists() detected with dynamic parameter
 27 | WARNING | Filesystem function file_get_contents() detected with dynamic parameter
 29 | WARNING | Filesystem function file_exists() detected with dynamic parameter
 32 | WARNING | Filesystem function file_get_contents() detected with dynamic parameter
----------------------------------------------------------------------------------------


FILE: /home/parallels/testing/symfony-actuator-bundle/src/Service/Health/Indicator/DiskSpaceHealthIndicator.php
---------------------------------------------------------------------------------------------------------------
FOUND 0 ERRORS AND 1 WARNING AFFECTING 1 LINE
---------------------------------------------------------------------------------------------------------------
 28 | WARNING | Filesystem function disk_free_space() detected with dynamic parameter
---------------------------------------------------------------------------------------------------------------


FILE: /home/parallels/testing/symfony-actuator-bundle/tests/Service/Health/Indicator/DiskSpaceHealthIndicatorTest.php
---------------------------------------------------------------------------------------------------------------------
FOUND 0 ERRORS AND 2 WARNINGS AFFECTING 2 LINES
---------------------------------------------------------------------------------------------------------------------
 54 | WARNING | Filesystem function disk_free_space() detected with dynamic parameter
 76 | WARNING | Filesystem function disk_free_space() detected with dynamic parameter
---------------------------------------------------------------------------------------------------------------------

Time: 75ms; Memory: 6MB
```


# Related

- [20231016195712](/zet/20231016195712/README.md) snyk code scanning docker
- [20231016050313](/zet/20231016050313/README.md) scanning code for vulnerabilities
- [20231017183957](/zet/20231017183957/README.md) command shortcut to pick and kill dockers

Tags:

    #scan #hacking #docker #code

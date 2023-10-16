FROM kalilinux/kali-rolling
WORKDIR /secaudit

RUN apt-get update && apt-get install -y \
  git \
  php-codesniffer

RUN git clone https://github.com/FloeDesignTechnologies/phpcs-security-audit

WORKDIR /secaudit/phpcs-security-audit

#ENTRYPOINT [ "phpcs", "--extensions=php,inc,lib,module,info", "--standard=Security" ]
# expect user of this docker to mount something and provide the path to it as an argument to entrypoint
#phpcs --extensions=php,inc,lib,module,info --standard=Security ../symfony-actuator-bundle

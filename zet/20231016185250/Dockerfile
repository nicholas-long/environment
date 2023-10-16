FROM kalilinux/kali-rolling
WORKDIR /secaudit

RUN apt-get update && apt-get install -y \
  git \
  php-codesniffer

RUN git clone https://github.com/FloeDesignTechnologies/phpcs-security-audit

ADD entrypoint .

ENTRYPOINT [ "/secaudit/entrypoint" ]

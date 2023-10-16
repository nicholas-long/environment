FROM kalilinux/kali-rolling
WORKDIR /secaudit

RUN apt-get update && apt-get install -y \
  git \
  npm

RUN npm install snyk -g

ADD entrypoint .

ENTRYPOINT [ "/secaudit/entrypoint" ]

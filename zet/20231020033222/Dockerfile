FROM ubuntu:latest

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
  git \
  inetutils-ping \
  bsdmainutils \
  sqlite3 \
  php \
  apache2

RUN rm /etc/apache2/sites-enabled/000-default.conf
ADD site.conf /etc/apache2/sites-enabled/site.conf
ADD www /var/www/html

CMD apachectl -D FOREGROUND

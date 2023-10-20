FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
  git \
  inetutils-ping \
  bsdmainutils \
  kafkacat \
  apache2

RUN rm /etc/apache2/sites-enabled/000-default.conf
ADD site.conf /etc/apache2/sites-enabled/site.conf
RUN a2enmod cgi

CMD apachectl -D FOREGROUND

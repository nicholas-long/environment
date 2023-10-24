FROM kalilinux/kali-rolling

RUN apt update && apt install -y python3 python3-pip
RUN pip3 install flask flask_cors

WORKDIR /server

ADD queueserver .

ENTRYPOINT ./queueserver

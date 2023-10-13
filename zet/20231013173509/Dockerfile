FROM kalilinux/kali-rolling
WORKDIR /runner

RUN apt-get update
RUN apt-get install -y git amqp-tools

# install environment i am used to in docker
#RUN git clone https://github.com/nicholas-long/environment && cd environment && ./install

ADD entrypoint .
ADD workjob .
ENTRYPOINT /runner/entrypoint

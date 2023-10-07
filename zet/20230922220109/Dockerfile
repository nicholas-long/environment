FROM kalilinux/kali-rolling
WORKDIR /environment
ADD . .

RUN apt-get update && ./install

# TODO: add entrypoint

#ENTRYPOINT [ "/bin/bash" ]
# used -u option before to fix tmux docker issues, might be useful

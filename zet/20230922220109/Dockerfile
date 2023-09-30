FROM kalilinux/kali-rolling
RUN apt update
WORKDIR /environment
ADD . .

RUN ./install

# TODO: add entrypoint

#ENTRYPOINT [ "/bin/bash" ]
# used -u option before to fix tmux docker issues, might be useful

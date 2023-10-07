# references to sudo and other considerations for scripts running within a docker

- concept of `looking for references to sudo because of docker builds`
- used to start apache in tmux pwn menu
- some docker ui helper scripts use sudo. those shouldn't be expected to work within docker anyway though.

```bash
grep sudo $(find zet -type f -not -name README.md)

zet/20230925052317/etc.files:/etc/init.d/sudo
zet/20230925052317/etc.files:/etc/logcheck/violations.d/sudo
zet/20230925052317/etc.files:/etc/logcheck/violations.ignore.d/logcheck-sudo
zet/20230925052317/etc.files:/etc/logwatch/conf/services/sudo.conf
zet/20230925052317/etc.files:/etc/pam.d/sudo
zet/20230925052317/etc.files:/etc/sudoers.d/hobbit
zet/20230925052317/etc.files:/etc/sudoers.d/xymon
zet/20230914030626/tmux-pwn-menu:            print("sudo apt install nishang")
zet/20230914030626/tmux-pwn-menu:            print("sudo updatedb")
zet/20230914030626/tmux-pwn-menu:        print("Starting apache... sudo required")
zet/20230914030626/tmux-pwn-menu:        os.system("sudo systemctl start apache2")
zet/20230914030626/tmux-pwn-menu:        print("Stopping apache... sudo required")
zet/20230914030626/tmux-pwn-menu:        os.system("sudo systemctl stop apache2")
zet/20230905210416/install-fff:  sudo make install
zet/20230907151050/try-install-bat-version-for-cpu:    sudo dpkg -i "$filename"
zet/20230907151050/install-bat-interactive:    sudo dpkg -i $filename
zet/20230916125222/menu.sh:  echo "Start Apache:sudo systemctl start apache2"
zet/20230916125222/menu.sh:  echo "Stop Apache:sudo systemctl stop apache2"
zet/20230905015120/bashrc:# configure EDITOR environment variable so sudoedit and fff work
zet/20230905015120/bashrc:alias a='sudo apt install -y $(apt list 2>/dev/null | fzf | cut -d '/' -f 1)'
zet/20230905015120/bashrc:alias bc='sudo bettercap -autostart events.stream,net.recon,net.sniff,net.probe,arp.spoof,any.proxy'
zet/20230905015120/zshrc:# configure EDITOR environment variable so sudoedit and fff work
zet/20230905015120/zshrc:alias a='sudo apt install -y $(apt list 2>/dev/null | fzf | cut -d '/' -f 1)'
zet/20230905015120/zshrc:alias bc='sudo bettercap -autostart events.stream,net.recon,net.sniff,net.probe,arp.spoof,any.proxy'
zet/20230905015107/tmux.conf:#bind C-a new-window -c "#{pane_current_path}" bash -c 'sudo apt install -y $(apt list 2>/dev/null | fzf "--preview=~/tmux-scripts/apt-preview.sh {}" | cut -d "/" -f 1)'
zet/20230906044835/nishanghere:  echo "sudo apt install nishang"
zet/20230922051930/install-lazygit-interactive:  sudo cp lazygit /usr/bin/
zet/20230905184854/install-prerequisites:    installprog="sudo apt-get install -y"
zet/20230929024545/start-service.awk:#systemctl list-unit-files | fzf | awk '{print $1}' | xargs sudo systemctl status | ../awk-scripting/start-service.awk
zet/20230929024545/start-service.awk:#| xargs sudo systemctl status
zet/20230929024545/start-service.awk:    command = "sudo systemctl stop " name
zet/20230929024545/start-service.awk:    command = "sudo systemctl start " name
zet/20230925001420/ubuntu-docker-build-environment.sh:sudo docker build . -t ubuntubuildenv
zet/20230925001420/ubuntu-docker-build-environment.sh:sudo docker run --rm -it -v "$(pwd):$(pwd)" -w "$(pwd)" ubuntubuildenv
zet/20230925001420/docker-current-directory.sh:sudo docker run --rm -it -v "$(pwd):$(pwd)" -w "$(pwd)" $1
```

` zet/20231007140839/README.md `

# Related

- [20230922220109](/zet/20230922220109/README.md) create a dockerfile for this environment
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea

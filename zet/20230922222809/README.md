# getting rid of on-screen keyboard

- this on screen keyboard is kind of annoying. it could be a problem when using netbooks with kali in gnome.
  - kali really isn't designed for gnome
- it only occurs on the login screen, so maybe it's not that big of a problem now
- https://askubuntu.com/questions/1408136/how-to-disable-on-screen-keyboard-when-using-touchscreen
  - possible packages for onscreen keyboards
    - onboard
    - caribou
    - florence
- list packages
```bash
dpkg -L gnome-shell-extension-onboard
dpkg-query: package 'gnome-shell-extension-onboard' is not installed
Use dpkg --contents (= dpkg-deb --contents) to list archive files contents.

dpkg -l
ii  libxklavier16:amd64                            5.4-4                                 amd64        X Keyboard Extension high-level API
```

` zet/20230922222809/README.md `

# Related

- [20230922222627](/zet/20230922222627/README.md) testing environment on netbook

Tags:

    #broken #workflow

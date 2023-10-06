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
Desired=Unknown/Install/Remove/Purge/Hold
| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend
|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)
||/ Name                                           Version                               Architecture Description
+++-==============================================-=====================================-============-==================================================================================
ii  accountsservice                                23.13.9-4                             amd64        query and manipulate user account information
ii  acl                                            2.3.1-3                               amd64        access control list - utilities
ii  adduser                                        3.137                                 all          add and remove users and groups
ii  adw-gtk3-kali                                  2023.2.2                              all          Kali theme for GTK-3 following libadwaita design
ii  adwaita-icon-theme                             43-1                                  all          default icon theme of GNOME
ii  aircrack-ng                                    1:1.7-5                               amd64        wireless WEP/WPA cracking utilities
ii  alsa-topology-conf                             1.2.5.1-2                             all          ALSA topology configuration files
ii  alsa-ucm-conf                                  1.2.9-1                               all          ALSA Use Case Manager configuration files
ii  amass                                          4.2.0-0kali1                          amd64        In-depth DNS Enumeration and Network Mapping
ii  amass-common                                   4.2.0-0kali1                          all          In-depth DNS Enumeration and Network Mapping
ii  amd64-microcode                                3.20230808.1.1                        amd64        Processor microcode firmware for AMD CPUs
ii  apache2                                        2.4.57-2                              amd64        Apache HTTP Server
ii  apache2-bin                                    2.4.57-2                              amd64        Apache HTTP Server (modules and other binary files)
ii  apache2-data                                   2.4.57-2                              all          Apache HTTP Server (common files)
ii  apache2-utils                                  2.4.57-2                              amd64        Apache HTTP Server (utility programs for web servers)
ii  apg                                            2.2.3.dfsg.1-5+b2                     amd64        Automated Password Generator - Standalone version
ii  apparmor                                       3.0.12-1                              amd64        user-space parser utility for AppArmor
ii  apt                                            2.7.3                                 amd64        commandline package manager
ii  apt-file                                       3.3                                   all          search for files within Debian packages (command-line interface)
ii  apt-listchanges                                3.26                                  all          package change history notification tool
ii  apt-utils                                      2.7.3                                 amd64        package management related utility programs
ii  arj                                            3.10.22-26                            amd64        archiver for .arj files
ii  arp-scan                                       1.10.0-2                              amd64        arp scanning and fingerprinting tool
ii  arping                                         2.23-1                                amd64        sends IP and/or ARP pings (to the MAC address)
ii  aspell                                         0.60.8-6                              amd64        GNU Aspell spell-checker
ii  aspell-en                                      2020.12.07-0-1                        all          English dictionary for GNU Aspell
ii  aspnetcore-runtime-6.0                         6.0.8-1                               amd64        
ii  aspnetcore-targeting-pack-6.0                  6.0.9-1                               amd64        
ii  at-spi2-common                                 2.48.3-1                              all          Assistive Technology Service Provider Interface (common files)
ii  at-spi2-core                                   2.48.3-1                              amd64        Assistive Technology Service Provider Interface (D-Bus core)
ii  atftpd                                         0.8.0-3                               amd64        advanced TFTP server
ii  attr                                           1:2.5.1-4                             amd64        utilities for manipulating filesystem extended attributes
ii  autopsy                                        2.24-5                                all          graphical interface to SleuthKit
ii  avahi-daemon                                   0.8-11                                amd64        Avahi mDNS/DNS-SD daemon
ii  axel                                           2.17.11-3                             amd64        light command line download accelerator
ii  base-files                                     1:2023.3.0                            amd64        Debian base system miscellaneous files
ii  base-passwd                                    3.6.1                                 amd64        Debian base system master password and group files
ii  base58                                         1.0.3-2                               all          Command line encoder and decoder for Base58 format
ii  bash                                           5.2.15-2+b4                           amd64        GNU Bourne Again SHell
ii  bash-completion                                1:2.11-7                              all          programmable completion for the bash shell
ii  bat                                            0.23.0                                amd64        cat(1) clone with wings.
ii  bind9-dnsutils                                 1:9.18.16-1                           amd64        Clients provided with BIND 9
ii  bind9-host                                     1:9.18.16-1                           amd64        DNS Lookup Utility
ii  bind9-libs:amd64                               1:9.18.16-1                           amd64        Shared Libraries used by BIND 9
ii  binutils                                       2.41-5                                amd64        GNU assembler, linker and binary utilities
ii  binutils-common:amd64                          2.41-5                                amd64        Common files for the GNU assembler, linker and binary utilities
ii  binutils-mingw-w64-i686                        2.41-4+11+nmu1                        amd64        Cross-binutils for Win32 (x86) using MinGW-w64
ii  binutils-mingw-w64-x86-64                      2.41-4+11+nmu1                        amd64        Cross-binutils for Win64 (x64) using MinGW-w64
ii  binutils-x86-64-linux-gnu                      2.41-5                                amd64        GNU binary utilities, for x86-64-linux-gnu target
ii  binwalk                                        2.3.4+dfsg1-1                         all          tool library for analyzing binary blobs and executable code
ii  blt                                            2.5.3+dfsg-4.1                        amd64        graphics extension library for Tcl/Tk - run-time
ii  bluez                                          5.69-1kali1                           amd64        Bluetooth tools and daemons
ii  bluez-firmware                                 1.2-9                                 all          Firmware for Bluetooth devices
ii  bluez-hcidump                                  5.69-1kali1                           amd64        Analyses Bluetooth HCI packets
ii  bluez-obexd                                    5.69-1kali1                           amd64        bluez obex daemon
ii  bolt                                           0.9.5-1                               amd64        system daemon to manage thunderbolt 3 devices
ii  bsdextrautils                                  2.39.2-1                              amd64        extra utilities from 4.4BSD-Lite
ii  bsdutils                                       1:2.39.2-1                            amd64        basic utilities from 4.4BSD-Lite
ii  bubblewrap                                     0.8.0-2                               amd64        utility for unprivileged chroot and namespace manipulation
ii  build-essential                                12.10                                 amd64        Informational list of build-essential packages
ii  bulk-extractor                                 2.0.0-0kali2                          amd64        Extracts information without parsing filesystem
ii  bully                                          1.4.00-2                              amd64        Implementation of the WPS brute force attack, written in C
ii  bundler                                        2.3.15-2                              all          Manage Ruby application dependencies
ii  burpsuite                                      2023.9.3-0kali1                       amd64        platform for security testing of web applications
ii  busybox                                        1:1.36.1-3.1                          amd64        Tiny utilities for small and embedded systems
ii  bzip2                                          1.0.8-5+b1                            amd64        high-quality block-sorting file compressor - utilities
ii  ca-certificates                                20230311                              all          Common CA certificates
ii  ca-certificates-java                           20230710                              all          Common CA certificates (JKS keystore)
ii  cadaver                                        0.24+dfsg-2                           amd64        command-line WebDAV client
ii  certipy-ad                                     4.7.0-0kali3                          all          Tool for attacking AD Certificate Services
ii  cewl                                           6.1-1                                 all          custom word list generator
ii  cgpt                                           0~R106-15054.B-1                      amd64        GPT manipulation tool with support for Chromium OS extensions
ii  cherrytree                                     0.99.48+dfsg-1                        amd64        hierarchical note taking application
ii  chntpw                                         140201-1                              amd64        NT SAM password recovery utility
ii  chrome-gnome-shell                             42.1-4                                all          GNOME Shell integration for browsers - transitional package
ii  cifs-utils                                     2:7.0-2                               amd64        Common Internet File System utilities
ii  clang                                          1:14.0-55.7                           amd64        C, C++ and Objective-C compiler (LLVM based), clang binary
ii  clang-14                                       1:14.0.6-13                           amd64        C, C++ and Objective-C compiler
ii  clang-15                                       1:15.0.7-8                            amd64        C, C++ and Objective-C compiler
ii  colord                                         1.4.6-3                               amd64        system service to manage device colour profiles -- system daemon
ii  colord-data                                    1.4.6-3                               all          system service to manage device colour profiles -- data files
ii  command-not-found                              23.04.0-1+kali3                       all          Suggest installation of packages in interactive bash sessions
ii  commix                                         3.8-0kali1                            all          Automated All-in-One OS Command Injection and Exploitation Tool
ii  console-setup                                  1.222                                 all          console font and keymap setup program
ii  console-setup-linux                            1.222                                 all          Linux specific part of console-setup
ii  coreboot-utils                                 4.15~dfsg-3                           amd64        Coreboot firmware utilities
ii  coreboot-utils-doc                             4.15~dfsg-3                           all          Coreboot firmware utilities - documentation
ii  coreutils                                      9.1-1                                 amd64        GNU core utilities
ii  cpio                                           2.13+dfsg-7.1                         amd64        GNU cpio -- a program to manage archives of files
ii  cpp                                            4:13.2.0-1                            amd64        GNU C preprocessor (cpp)
ii  cpp-13                                         13.2.0-2                              amd64        GNU C preprocessor
ii  cracklib-runtime                               2.9.6-5+b1                            amd64        runtime support for password checker library cracklib2
ii  crackmapexec                                   5.4.0-0kali5                          all          Swiss army knife for pentesting networks
ii  cramfsswap                                     1.4.2                                 amd64        swap endianness of a cram filesystem (cramfs)
ii  creddump7                                      0.1+git20190429-1.1                   all          Python tool to extract credentials and secrets from Windows registry hives
ii  cron                                           3.0pl1-175                            amd64        process scheduling daemon
ii  cron-daemon-common                             3.0pl1-175                            all          process scheduling daemon's configuration files
ii  crunch                                         3.6-3                                 amd64        tool for creating wordlist
ii  cryptcat                                       20031202-5kali7                       amd64        lightweight version netcat extended with twofish encryption
ii  cryptsetup                                     2:2.6.1-5                             amd64        disk encryption support - startup scripts
ii  cryptsetup-bin                                 2:2.6.1-5                             amd64        disk encryption support - command line tools
ii  cryptsetup-initramfs                           2:2.6.1-5                             all          disk encryption support - initramfs integration
ii  cryptsetup-nuke-password                       4+nmu1+kali1                          amd64        Erase the LUKS keys with a special password on the unlock prompt
ii  cups-pk-helper                                 0.2.6-1+b1                            amd64        PolicyKit helper to configure cups with fine-grained privileges
ii  curl                                           8.2.1-1                               amd64        command line tool for transferring data with URL syntax
ii  curlftpfs                                      0.9.2-9+b1                            amd64        filesystem to access FTP hosts based on FUSE and cURL
ii  cutycapt                                       0.0~svn10-0.1+b2                      amd64        utility to capture WebKit's rendering of a web page
ii  cython3                                        0.29.36-1                             amd64        C-Extensions for Python 3
ii  dash                                           0.5.12-6                              amd64        POSIX-compliant shell
ii  davtest                                        1.2+git20230307.34d31db-0kali1        all          Testing tool for WebDAV servers
ii  dbd                                            1.50-1kali7                           amd64        Netcat clone with encryption
ii  dbus                                           1.14.8-2                              amd64        simple interprocess messaging system (system message bus)
ii  dbus-bin                                       1.14.8-2                              amd64        simple interprocess messaging system (command line utilities)
ii  dbus-daemon                                    1.14.8-2                              amd64        simple interprocess messaging system (reference message bus)
ii  dbus-session-bus-common                        1.14.8-2                              all          simple interprocess messaging system (session bus configuration)
ii  dbus-system-bus-common                         1.14.8-2                              all          simple interprocess messaging system (system bus configuration)
ii  dbus-user-session                              1.14.8-2                              amd64        simple interprocess messaging system (systemd --user integration)
ii  dbus-x11                                       1.14.8-2                              amd64        simple interprocess messaging system (X11 deps)
ii  dconf-cli                                      0.40.0-4                              amd64        simple configuration storage system - utilities
ii  dconf-gsettings-backend:amd64                  0.40.0-4                              amd64        simple configuration storage system - GSettings back-end
ii  dconf-service                                  0.40.0-4                              amd64        simple configuration storage system - D-Bus service
ii  dcraw                                          9.28-3+b1                             amd64        decode raw digital camera images
ii  debconf                                        1.5.82                                all          Debian configuration management system
ii  debconf-i18n                                   1.5.82                                all          full internationalization support for debconf
ii  debian-archive-keyring                         2023.4                                all          GnuPG archive keys of the Debian archive
ii  debian-faq                                     11.1                                  all          Debian Frequently Asked Questions
ii  debianutils                                    5.12                                  amd64        Miscellaneous utilities specific to Debian
ii  debtags                                        2.1.5                                 all          Debian Package Tags support tools
ii  debugedit                                      1:5.0-5                               amd64        tools for handling build-ids and paths rewriting in DWARF data
ii  default-jre                                    2:1.17-74                             amd64        Standard Java or Java compatible Runtime
ii  default-jre-headless                           2:1.17-74                             amd64        Standard Java or Java compatible Runtime (headless)
ii  default-mysql-server                           1.1.0                                 all          MySQL database server binaries and system database setup (metapackage)
ii  desktop-base                                   12.0.6+nmu1+kali1                     all          common files for the Debian Desktop
ii  desktop-file-utils                             0.26-1                                amd64        Utilities for .desktop files
ii  dictionaries-common                            1.29.7                                all          spelling dictionaries - common utilities
ii  diffutils                                      1:3.8-4                               amd64        File comparison utilities
ii  dirb                                           2.22+dfsg-5                           amd64        URL bruteforcing tool
ii  dirbuster                                      1.0-1kali6                            all          Web server directory brute-forcer
ii  dirmngr                                        2.2.40-1.1                            amd64        GNU privacy guard - network certificate management service
ii  discover                                       2.1.2-10                              amd64        hardware identification system
ii  discover-data                                  2.2013.01.13                          all          Data lists for Discover hardware detection system
ii  distro-info-data                               0.58                                  all          information about the distributions' releases (data files)
ii  dmidecode                                      3.5-2                                 amd64        SMBIOS/DMI table decoder
ii  dmitry                                         1.3a-2                                amd64        Deepmagic Information Gathering Tool
ii  dmsetup                                        2:1.02.185-2                          amd64        Linux Kernel Device Mapper userspace library
ii  dns-root-data                                  2023010101                            all          DNS root data including root zone and DNSSEC key
ii  dns2tcp                                        0.5.2-3                               amd64        TCP-over-DNS tunnel server and client
ii  dnschef                                        0.4+git20190327-0kali3                all          DNS proxy for penetration testers
ii  dnsenum                                        1.3.1-1                               all          tool to enumerate domain DNS information
ii  dnsmasq-base                                   2.89-1                                amd64        Small caching DNS proxy and DHCP/TFTP server
ii  dnsrecon                                       1.1.5-1                               all          Powerful DNS enumeration script
ii  doc-base                                       0.11.1                                all          utilities to manage online documentation
ii  doc-debian                                     11.3+nmu1                             all          Debian Project documentation and other documents
ii  docbook-xml                                    4.5-12                                all          standard XML documentation system for software and systems
ii  dos2unix                                       7.5.1-1                               amd64        convert text file line endings between CRLF and LF
ii  dosfstools                                     4.2-1                                 amd64        utilities for making and checking MS-DOS FAT filesystems
ii  dotnet-apphost-pack-6.0                        6.0.9-1                               amd64        Microsoft.NETCore.App.Host 6.0.9
ii  dotnet-host                                    6.0.9-1                               amd64        Microsoft .NET Host - 6.0.9
ii  dotnet-hostfxr-6.0                             6.0.9-1                               amd64        Microsoft .NET Host FX Resolver - 6.0.9
ii  dotnet-runtime-6.0                             6.0.8-1                               amd64        Microsoft.NETCore.App.Runtime 6.0.8
ii  dotnet-runtime-deps-6.0                        6.0.9-1                               amd64        dotnet-runtime-deps-debian 6.0.9
ii  dotnet-sdk-6.0                                 6.0.400-1                             amd64        Microsoft .NET SDK 6.0.400
ii  dotnet-targeting-pack-6.0                      6.0.9-1                               amd64        Microsoft.NETCore.App.Ref 6.0.9
ii  dpkg                                           1.22.0+kali1                          amd64        Debian package management system
ii  dpkg-dev                                       1.22.0+kali1                          all          Debian package development tools
ii  dvisvgm                                        3.1-1                                 amd64        DVI to SVG converter
ii  e2fsprogs                                      1.47.0-2+b1                           amd64        ext2/ext3/ext4 file system utilities
ii  easy-rsa                                       3.1.6-2                               all          Simple shell based CA utility
ii  eatmydata                                      131-1                                 all          Library and utilities designed to disable fsync and friends
ii  efibootmgr                                     17-2                                  amd64        Interact with the EFI Boot Manager
ii  eject                                          2.39.2-1                              amd64        ejects CDs and operates CD-Changers under Linux
ii  emacsen-common                                 3.0.5                                 all          Common facilities for all emacsen
ii  enchant-2                                      2.3.3-2                               amd64        Wrapper for various spell checker engines (binary programs)
ii  enum4linux                                     0.9.1-0kali1                          all          Enumerates info from Windows and Samba systems
ii  eog                                            45~rc-1                               amd64        Eye of GNOME graphics viewer program
ii  espeak-ng-data:amd64                           1.51+dfsg-11                          amd64        Multi-lingual software speech synthesizer: speech data files
ii  ethtool                                        1:6.4-1                               amd64        display or change Ethernet device settings
ii  ettercap-common                                1:0.8.3.1-12                          amd64        Multipurpose sniffer/interceptor/logger for switched LAN
ii  ettercap-graphical                             1:0.8.3.1-12                          amd64        Ettercap GUI-enabled executable
ii  evil-winrm                                     3.5-0kali1                            all          ultimate WinRM shell for hacking/pentesting
ii  evince                                         45~alpha-2                            amd64        Document (PostScript, PDF) viewer
ii  evince-common                                  45~alpha-2                            all          Document (PostScript, PDF) viewer - common files
ii  evolution-data-server                          3.49.3-1                              amd64        evolution database backend server
ii  evolution-data-server-common                   3.49.3-1                              all          architecture independent files for Evolution Data Server
ii  exe2hexbat                                     1.5.1-0kali2                          all          Convert EXE to bat
ii  exfatprogs                                     1.2.1-2                               amd64        exFAT file system utilities
ii  exiv2                                          0.27.6-1                              amd64        EXIF/IPTC/XMP metadata manipulation tool
ii  expect                                         5.45.4-2+b1                           amd64        Automates interactive applications
ii  exploitdb                                      20230909-0kali1                       all          Searchable Exploit Database archive
ii  fakeroot                                       1.32.1-1                              amd64        tool for simulating superuser privileges
ii  faraday                                        4.6.0-0kali1                          all          Collaborative Penetration Test IDE
ii  faraday-agent-dispatcher                       2.4.0-0kali1                          all          helper to develop integrations with Faraday (Python 3)
ii  faraday-cli                                    2.1.8-0kali1                          all          Faraday on the terminal
ii  fdisk                                          2.39.2-1                              amd64        collection of partitioning utilities
ii  fern-wifi-cracker                              3.4-0kali1                            all          Automated Wi-Fi cracker
ii  ffuf                                           2.0.0-0kali1                          amd64        Fast web fuzzer written in Go (program)
ii  fierce                                         1.5.0-1                               all          Domain DNS scanner
ii  figlet                                         2.2.5-3+b1                            amd64        Make large character ASCII banners out of ordinary text
ii  file                                           1:5.44-3                              amd64        Recognize the type of data in a file using "magic" numbers
ii  file-roller                                    43.0-1                                amd64        archive manager for GNOME
ii  findutils                                      4.9.0-5                               amd64        utilities for finding files--find, xargs
ii  finger                                         0.17-17                               amd64        user information lookup program
ii  firebird3.0-common                             3.0.11.33637.ds4-2                    all          common files for firebird 3.0 server, client and utilities
ii  firebird3.0-common-doc                         3.0.11.33637.ds4-2                    all          copyright, licensing and changelogs of firebird3.0
ii  firefox-esr                                    115.2.0esr-1                          amd64        Mozilla Firefox web browser - Extended Support Release (ESR)
ii  firmware-amd-graphics                          20230515-3+kali1                      all          Binary firmware for AMD/ATI graphics chips
ii  firmware-ath9k-htc                             1.4.0-108-gd856466+dfsg1-2+kali2      all          firmware for AR7010 and AR9271 USB wireless adapters
ii  firmware-atheros                               20230515-3+kali1                      all          Binary firmware for Qualcomm Atheros wireless cards
ii  firmware-brcm80211                             20230515-3+kali1                      all          Binary firmware for Broadcom/Cypress 802.11 wireless cards
ii  firmware-intel-sound                           20230515-3+kali1                      all          Binary firmware for Intel sound DSPs
ii  firmware-iwlwifi                               20230515-3+kali1                      all          Binary firmware for Intel Wireless cards
ii  firmware-libertas                              20230515-3+kali1                      all          Binary firmware for Marvell wireless cards
ii  firmware-linux                                 20230515-3+kali1                      all          Binary firmware for various drivers in the Linux kernel (metapackage)
ii  firmware-linux-free                            20200122-2                            all          Binary firmware for various drivers in the Linux kernel
ii  firmware-linux-nonfree                         20230515-3+kali1                      all          Binary firmware for various drivers in the Linux kernel (metapackage)
ii  firmware-misc-nonfree                          20230515-3+kali1                      all          Binary firmware for various drivers in the Linux kernel
ii  firmware-realtek                               20230515-3+kali1                      all          Binary firmware for Realtek wired/Wi-Fi/BT adapters
ii  firmware-sof-signed                            2.2.6-1                               all          Intel SOF firmware - signed
ii  firmware-ti-connectivity                       20230515-3+kali1                      all          Binary firmware for TI Connectivity Wi-Fi and BT/FM/GPS adapters
ii  firmware-zd1211                                1:1.5-10                              all          binary firmware for the zd1211rw wireless driver
ii  flac                                           1.4.3+ds-2                            amd64        Free Lossless Audio Codec - command line tools
ii  flashrom                                       1.3.0-2.1                             amd64        Identify, read, write, erase, and verify BIOS/ROM/flash chips
ii  fontconfig                                     2.14.2-5                              amd64        generic font configuration library - support binaries
ii  fontconfig-config                              2.14.2-5                              amd64        generic font configuration library - configuration
ii  fonts-cantarell                                0.303.1-1                             all          sans serif font family designed for on-screen readability
ii  fonts-dejavu                                   2.37-8                                all          metapackage to pull in fonts-dejavu-core, -mono and -extra
ii  fonts-dejavu-core                              2.37-8                                all          Vera font family derivate with additional characters
ii  fonts-dejavu-extra                             2.37-8                                all          Vera font family derivate with additional characters (extra variants)
ii  fonts-dejavu-mono                              2.37-8                                all          Vera font family derivate with additional characters
ii  fonts-droid-fallback                           1:6.0.1r16-1.1                        all          handheld device font with extensive style and language support (fallback)
ii  fonts-firacode                                 6.2-2                                 all          Monospaced font with programming ligatures
ii  fonts-font-awesome                             5.0.10+really4.7.0~dfsg-4.1           all          iconic font designed for use with Twitter Bootstrap
ii  fonts-freefont-ttf                             20211204+svn4273-2                    all          Freefont Serif, Sans and Mono Truetype fonts
ii  fonts-lato                                     2.0-2.1                               all          sans-serif typeface family font
ii  fonts-liberation                               1:2.1.5-3                             all          fonts with the same metrics as Times, Arial and Courier
ii  fonts-liberation-sans-narrow                   1:1.07.6-4                            all          Sans-serif Narrow fonts to replace commonly used Arial Narrow
ii  fonts-liberation2                              1:2.1.5-3                             all          transitional dummy package
ii  fonts-lmodern                                  2.005-1                               all          OpenType fonts based on Computer Modern
ii  fonts-lyx                                      2.3.7-1                               all          TrueType versions of some TeX fonts used by LyX
ii  fonts-noto-color-emoji                         2.038-1                               all          color emoji font from Google
ii  fonts-noto-core                                20201225-2                            all          "No Tofu" font families with large Unicode coverage (core)
ii  fonts-noto-mono                                20201225-2                            all          "No Tofu" monospaced font family with large Unicode coverage
ii  fonts-quicksand                                0.2016-2.1                            all          sans-serif font with round attributes
ii  fonts-texgyre                                  20180621-6                            all          OpenType fonts based on URW Fonts
ii  fonts-texgyre-math                             20180621-6                            all          OpenType math fonts based on URW Fonts
ii  fonts-urw-base35                               20200910-7                            all          font set metric-compatible with the 35 PostScript Level 2 Base Fonts
ii  fping                                          5.1-1                                 amd64        sends ICMP ECHO_REQUEST packets to network hosts
ii  freerdp2-x11                                   2.10.0+dfsg1-1.1                      amd64        RDP client for Windows Terminal Services (X11 client)
ii  freetds-common                                 1.3.17+ds-2                           all          configuration files for FreeTDS SQL client libraries
ii  ftp                                            20230507-2                            all          dummy transitional package for tnftp
ii  fuse3                                          3.14.0-4                              amd64        Filesystem in Userspace (3.x version)
ii  fwupd                                          1.9.4-2                               amd64        Firmware update daemon
ii  fwupd-amd64-signed                             1:1.4+1                               amd64        Tools to manage UEFI firmware updates (signed)
ii  fzf                                            0.42.0-1+b2                           amd64        general-purpose command-line fuzzy finder
ii  g++                                            4:13.2.0-1                            amd64        GNU C++ compiler
ii  g++-13                                         13.2.0-2                              amd64        GNU C++ compiler
ii  galera-4                                       26.4.13-1                             amd64        Replication framework for transactional applications
ii  gawk                                           1:5.2.1-2                             amd64        GNU awk, a pattern scanning and processing language
ii  gcc                                            4:13.2.0-1                            amd64        GNU C compiler
ii  gcc-13                                         13.2.0-2                              amd64        GNU C compiler
ii  gcc-13-base:amd64                              13.2.0-2                              amd64        GCC, the GNU Compiler Collection (base package)
ii  gcc-mingw-w64-base:amd64                       12.2.0-14+25.2                        amd64        GNU Compiler Collection for MinGW-w64 (base package)
ii  gcc-mingw-w64-i686-win32                       12.2.0-14+25.2                        amd64        GNU C compiler for MinGW-w64, Win32/Win32
ii  gcc-mingw-w64-i686-win32-runtime               12.2.0-14+25.2                        amd64        GNU Compiler Collection for MinGW-w64, i686/Win32
ii  gcc-mingw-w64-x86-64-win32                     12.2.0-14+25.2                        amd64        GNU C compiler for MinGW-w64, Win64/Win32
ii  gcc-mingw-w64-x86-64-win32-runtime             12.2.0-14+25.2                        amd64        GNU Compiler Collection for MinGW-w64, x86-64/Win32
ii  gcr                                            3.41.1-3                              amd64        GNOME crypto services (daemon and tools)
ii  gdal-data                                      3.7.1+dfsg-1                          all          Geospatial Data Abstraction Library - Data files
ii  gdal-plugins                                   3.7.1+dfsg-1+b2                       amd64        Geospatial Data Abstraction Library - Plugins
ii  gdisk                                          1.0.9-2.1                             amd64        GPT fdisk text-mode partitioning tool
ii  gdm3                                           44.1-2                                amd64        GNOME Display Manager
ii  geoclue-2.0                                    2.7.0-3                               amd64        geoinformation service
ii  geocode-glib-common                            3.26.3-6                              all          icons for the geocode-glib library
ii  geoip-database                                 20230704-1                            all          IP lookup command line tools that use the GeoIP library (country database)
ii  gettext-base                                   0.21-13+b1                            amd64        GNU Internationalization utilities for the base system
ii  ghostscript                                    10.01.2~dfsg-1                        amd64        interpreter for the PostScript language and for PDF
ii  gir1.2-accountsservice-1.0:amd64               23.13.9-4                             amd64        GObject introspection data for AccountService
ii  gir1.2-adw-1:amd64                             1.3.3-2+kali1                         amd64        GObject introspection files for libadwaita
ii  gir1.2-atk-1.0:amd64                           2.48.3-1                              amd64        ATK accessibility toolkit (GObject introspection)
ii  gir1.2-atspi-2.0:amd64                         2.48.3-1                              amd64        Assistive Technology Service Provider (GObject introspection)
ii  gir1.2-ayatanaappindicator3-0.1                0.5.92-1.2                            amd64        Typelib files for libayatana-appindicator3-1 (GTK-3+ version)
ii  gir1.2-evince-3.0:amd64                        45~alpha-2                            amd64        GObject introspection data for the evince libraries
ii  gir1.2-freedesktop:amd64                       1.76.1-5                              amd64        Introspection data for some FreeDesktop components
ii  gir1.2-gck-1:amd64                             3.41.1-3                              amd64        GObject introspection data for the GCK library
ii  gir1.2-gcr-3:amd64                             3.41.1-3                              amd64        GObject introspection data for the GCR library
ii  gir1.2-gdesktopenums-3.0:amd64                 44.0-2                                amd64        GObject introspection for GSettings desktop-wide schemas
ii  gir1.2-gdkpixbuf-2.0:amd64                     2.42.10+dfsg-1+b1                     amd64        GDK Pixbuf library - GObject-Introspection
ii  gir1.2-gdm-1.0                                 44.1-2                                amd64        GObject introspection data for the GNOME Display Manager
ii  gir1.2-geoclue-2.0:amd64                       2.7.0-3                               amd64        convenience library to interact with geoinformation service (introspection)
ii  gir1.2-glib-2.0:amd64                          1.76.1-5                              amd64        Introspection data for GLib, GObject, Gio and GModule
ii  gir1.2-gmenu-3.0:amd64                         3.36.0-1.1                            amd64        GObject introspection data for the GNOME menu library
ii  gir1.2-gnomeautoar-0.1:amd64                   0.4.4-2                               amd64        GObject introspection data for GnomeAutoar
ii  gir1.2-gnomebg-4.0:amd64                       44.0-2                                amd64        Introspection data for GnomeBG (GTK 4)
ii  gir1.2-gnomebluetooth-3.0:amd64                42.6-1                                amd64        Introspection data for GnomeBluetooth
ii  gir1.2-gnomedesktop-3.0:amd64                  44.0-2                                amd64        Introspection data for GnomeDesktop (GTK 3)
ii  gir1.2-gnomedesktop-4.0:amd64                  44.0-2                                amd64        Introspection data for GnomeDesktop (GTK 4)
ii  gir1.2-graphene-1.0:amd64                      1.10.8-1                              amd64        library of graphic data types (introspection files)
ii  gir1.2-gst-plugins-base-1.0:amd64              1.22.5-1                              amd64        GObject introspection data for the GStreamer Plugins Base library
ii  gir1.2-gstreamer-1.0:amd64                     1.22.5-1                              amd64        GObject introspection data for the GStreamer library
ii  gir1.2-gtk-3.0:amd64                           3.24.38-2                             amd64        GTK graphical user interface library -- gir bindings
ii  gir1.2-gtk-4.0:amd64                           4.10.5+ds-3                           amd64        GTK graphical user interface library -- gir bindings
ii  gir1.2-gtksource-4:amd64                       4.8.4-4                               amd64        gir files for the GTK+ syntax highlighting widget
ii  gir1.2-gweather-4.0:amd64                      4.3.2-1                               amd64        GObject introspection data for the GWeather library
ii  gir1.2-handy-1:amd64                           1.8.2-2                               amd64        GObject introspection files for libhandy
ii  gir1.2-harfbuzz-0.0:amd64                      8.0.1-1                               amd64        OpenType text shaping engine (GObject introspection data)
ii  gir1.2-ibus-1.0:amd64                          1.5.29~rc1-1                          amd64        Intelligent Input Bus - introspection data
ii  gir1.2-javascriptcoregtk-4.1:amd64             2.40.5-1                              amd64        JavaScript engine library from WebKitGTK - GObject introspection data
ii  gir1.2-json-1.0:amd64                          1.6.6-1                               amd64        GLib JSON manipulation library (introspection data)
ii  gir1.2-malcontent-0:amd64                      0.11.0-4                              amd64        GObject introspection bindings for libmalcontent
ii  gir1.2-mutter-12:amd64                         44.1-1                                amd64        GObject introspection data for Mutter
ii  gir1.2-nm-1.0:amd64                            1.44.0-1                              amd64        GObject introspection data for the libnm library
ii  gir1.2-nma4-1.0:amd64                          1.10.6-1                              amd64        GObject introspection data for libnma-gtk4
ii  gir1.2-notify-0.7:amd64                        0.8.2-1                               amd64        sends desktop notifications to a notification daemon (Introspection files)
ii  gir1.2-pango-1.0:amd64                         1.51.0+ds-2                           amd64        Layout and rendering of internationalized text - gir bindings
ii  gir1.2-peas-1.0:amd64                          1.36.0-2                              amd64        Application plugin library (introspection files)
ii  gir1.2-polkit-1.0                              123-1+kali1                           amd64        GObject introspection data for polkit
ii  gir1.2-rsvg-2.0:amd64                          2.54.7+dfsg-2                         amd64        gir files for renderer library for SVG files
ii  gir1.2-secret-1:amd64                          0.21.0-1                              amd64        Secret store (GObject-Introspection)
ii  gir1.2-soup-3.0:amd64                          3.4.3-1                               amd64        GObject introspection data for the libsoup HTTP library
ii  gir1.2-totem-1.0:amd64                         43.0-2                                amd64        GObject introspection data for Totem media player
ii  gir1.2-totemplparser-1.0:amd64                 3.26.6-1+b1                           amd64        GObject introspection data for the Totem Playlist Parser library
ii  gir1.2-upowerglib-1.0:amd64                    0.99.20-2                             amd64        GObject introspection data for upower
ii  gir1.2-vte-2.91:amd64                          0.72.2-3                              amd64        GObject introspection data for the VTE library
ii  gir1.2-webkit2-4.1:amd64                       2.40.5-1                              amd64        Web content engine library for GTK - GObject introspection data
ii  gir1.2-wnck-3.0:amd64                          43.0-3                                amd64        GObject introspection data for the WNCK library
ii  git                                            1:2.40.1-1                            amd64        fast, scalable, distributed revision control system
ii  git-man                                        1:2.40.1-1                            all          fast, scalable, distributed revision control system (manual pages)
ii  gjs                                            1.76.2-4                              amd64        Mozilla-based javascript bindings for the GNOME platform (cli tool)
ii  gkbd-capplet                                   3.28.1-1                              amd64        GNOME control center tools for libgnomekbd
ii  glib-networking:amd64                          2.78.0-1                              amd64        network-related giomodules for GLib
ii  glib-networking-common                         2.78.0-1                              all          network-related giomodules for GLib - data files
ii  glib-networking-services                       2.78.0-1                              amd64        network-related giomodules for GLib - D-Bus services
ii  gnome-backgrounds                              45~rc-1                               all          Set of backgrounds packaged with the GNOME desktop
ii  gnome-bluetooth                                42~3.34.5-10                          all          GNOME Bluetooth Send To app - transitional package
ii  gnome-bluetooth-3-common                       42.6-1                                all          GNOME Bluetooth 3 common files
ii  gnome-bluetooth-sendto                         42.6-1                                amd64        GNOME Bluetooth Send To app
ii  gnome-browser-connector                        42.1-4                                all          GNOME Shell extensions integration for web browsers
ii  gnome-calculator                               1:45.0-2                              amd64        GNOME desktop calculator
ii  gnome-control-center                           1:44.0-1                              amd64        utilities to configure the GNOME desktop
ii  gnome-control-center-data                      1:44.0-1                              all          configuration applets for GNOME - data files
ii  gnome-desktop3-data                            44.0-2                                all          Common files for GNOME desktop apps
ii  gnome-disk-utility                             44.0-2                                amd64        manage and configure disk drives and media
ii  gnome-icon-theme                               3.12.0-5                              all          This package contains the default icon theme used by the GNOME
ii  gnome-keyring                                  42.1-1+b2                             amd64        GNOME keyring services (daemon and tools)
ii  gnome-keyring-pkcs11:amd64                     42.1-1+b2                             amd64        GNOME keyring module for the PKCS#11 module loading library
ii  gnome-menus                                    3.36.0-1.1                            amd64        GNOME implementation of the freedesktop menu specification
ii  gnome-online-accounts                          3.48.0-2                              amd64        service to manage online accounts for the GNOME desktop
ii  gnome-remote-desktop                           44.2-6                                amd64        Remote desktop daemon for GNOME using PipeWire
ii  gnome-session                                  44.0-4                                all          GNOME Session Manager - GNOME 3 session
ii  gnome-session-bin                              44.0-4                                amd64        GNOME Session Manager - Minimal runtime
ii  gnome-session-common                           44.0-4                                all          GNOME Session Manager - common files
ii  gnome-settings-daemon                          45~rc-1                               amd64        daemon handling the GNOME session settings
ii  gnome-settings-daemon-common                   45~rc-1                               all          daemon handling the GNOME session settings - common files
ii  gnome-shell                                    44.1-1                                amd64        graphical shell for the GNOME desktop
ii  gnome-shell-common                             44.1-1                                all          common files for the GNOME graphical shell
ii  gnome-shell-extension-appindicator             53-2                                  all          AppIndicator, KStatusNotifierItem and tray support for GNOME Shell
ii  gnome-shell-extension-dashtodock               84-0kali1                             all          dash-to-dock extension for GNOME shell
ii  gnome-shell-extension-desktop-icons-ng         46+really47.0.4-2                     all          desktop icon support for GNOME Shell
ii  gnome-shell-extension-prefs                    44.1-1                                amd64        tool to enable / disable GNOME Shell extensions
ii  gnome-shell-extension-tiling-assistant         41-3                                  all          extension which adds a Windows-like snap assist to GNOME Shell
ii  gnome-shell-extensions                         44.0-1kali1                           all          Extensions to extend functionality of GNOME Shell
ii  gnome-sushi                                    45~alpha.2-1                          amd64        sushi is a quick previewer for nautilus
ii  gnome-system-monitor                           45.0-1                                amd64        Process viewer and system resource monitor for GNOME
ii  gnome-terminal                                 3.48.1-2+kali1                        amd64        GNOME terminal emulator application
ii  gnome-terminal-data                            3.48.1-2+kali1                        all          Data files for the GNOME terminal emulator
ii  gnome-text-editor                              44.0-2                                amd64        simple text editor for GNOME
ii  gnome-tweaks                                   42~beta-4                             all          tool to adjust advanced configuration settings for GNOME
ii  gnome-user-docs                                44.3-2                                all          GNOME Help
ii  gnome-user-share                               43.0-1                                amd64        User level public file sharing via WebDAV
ii  gnupg                                          2.2.40-1.1                            all          GNU privacy guard - a free PGP replacement
ii  gnupg-l10n                                     2.2.40-1.1                            all          GNU privacy guard - localization files
ii  gnupg-utils                                    2.2.40-1.1                            amd64        GNU privacy guard - utility programs
ii  gnutls-bin                                     3.8.1-4+b1                            amd64        GNU TLS library - commandline utilities
ii  gophish                                        0.12.1-0kali3                         amd64        Open-Source Phishing Toolkit
ii  gparted                                        1.5.0-1                               amd64        GNOME partition editor
ii  gparted-common                                 1.5.0-1                               all          GNOME partition editor -- common data
ii  gpg                                            2.2.40-1.1                            amd64        GNU Privacy Guard -- minimalist public key operations
ii  gpg-agent                                      2.2.40-1.1                            amd64        GNU privacy guard - cryptographic agent
ii  gpg-wks-client                                 2.2.40-1.1                            amd64        GNU privacy guard - Web Key Service client
ii  gpg-wks-server                                 2.2.40-1.1                            amd64        GNU privacy guard - Web Key Service server
ii  gpgconf                                        2.2.40-1.1                            amd64        GNU privacy guard - core configuration utilities
ii  gpgsm                                          2.2.40-1.1                            amd64        GNU privacy guard - S/MIME version
ii  gpgv                                           2.2.40-1.1                            amd64        GNU privacy guard - signature verification tool
ii  gpp-decrypt                                    0.1-1kali2                            all          Group Policy Preferences decrypter
ii  graphviz                                       2.42.2-7+b3                           amd64        rich set of graph drawing tools
ii  greenbone-feed-sync                            23.7.0-0kali1                         all          New script for syncing the Greenbone Community Feed (Python 3)
ii  grep                                           3.11-3                                amd64        GNU grep, egrep and fgrep
ii  grilo-plugins-0.3:amd64                        0.3.16-1.1                            amd64        Framework for discovering and browsing media - Plugins
ii  groff-base                                     1.23.0-2                              amd64        GNU troff text-formatting system (base system components)
ii  grub-common                                    2.06-13+kali1                         amd64        GRand Unified Bootloader (common files)
ii  grub-efi-amd64                                 2.06-13+kali1                         amd64        GRand Unified Bootloader, version 2 (EFI-AMD64 version)
ii  grub-efi-amd64-bin                             2.06-13+kali1                         amd64        GRand Unified Bootloader, version 2 (EFI-AMD64 modules)
ii  grub2-common                                   2.06-13+kali1                         amd64        GRand Unified Bootloader (common files for version 2)
ii  gsettings-desktop-schemas                      44.0-2                                all          GSettings desktop-wide schemas
ii  gsfonts                                        2:20200910-7                          all          transitional dummy package (gsfonts -> fonts-urw-base35)
ii  gss-ntlmssp                                    1.2.0-1+b1                            amd64        GSSAPI NTLMSSP Mechanism -- MIT GSSAPI plugin
ii  gstreamer1.0-gl:amd64                          1.22.5-1                              amd64        GStreamer plugins for GL
ii  gstreamer1.0-gtk3:amd64                        1.22.5-1                              amd64        GStreamer plugin for GTK+3
ii  gstreamer1.0-libav:amd64                       1.22.5-1                              amd64        ffmpeg plugin for GStreamer
ii  gstreamer1.0-pipewire:amd64                    0.3.80-2                              amd64        GStreamer 1.0 plugin for the PipeWire multimedia server
ii  gstreamer1.0-plugins-bad:amd64                 1.22.4-1                              amd64        GStreamer plugins from the "bad" set
ii  gstreamer1.0-plugins-base:amd64                1.22.5-1                              amd64        GStreamer plugins from the "base" set
ii  gstreamer1.0-plugins-good:amd64                1.22.5-1                              amd64        GStreamer plugins from the "good" set
ii  gstreamer1.0-plugins-ugly:amd64                1.22.5-1                              amd64        GStreamer plugins from the "ugly" set
ii  gstreamer1.0-x:amd64                           1.22.5-1                              amd64        GStreamer plugins for X11 and Pango
ii  gtk-update-icon-cache                          3.24.38-2                             amd64        icon theme caching utility
ii  gtk2-engines-pixbuf:amd64                      2.24.33-2                             amd64        pixbuf-based theme for GTK 2
ii  guymager                                       0.8.13-2                              amd64        Forensic imaging tool based on Qt
ii  gvfs:amd64                                     1.51.91-1                             amd64        userspace virtual filesystem - GIO module
ii  gvfs-backends                                  1.51.91-1                             amd64        userspace virtual filesystem - backends
ii  gvfs-common                                    1.51.91-1                             all          userspace virtual filesystem - common data files
ii  gvfs-daemons                                   1.51.91-1                             amd64        userspace virtual filesystem - servers
ii  gvfs-fuse                                      1.51.91-1                             amd64        userspace virtual filesystem - fuse server
ii  gvfs-libs:amd64                                1.51.91-1                             amd64        userspace virtual filesystem - private libraries
ii  gvmd                                           22.8.0-0kali1                         amd64        Manager Module of Greenbone Vulnerability Manager
ii  gvmd-common                                    22.8.0-0kali1                         all          architecture independent files for Greenbone Vulnerability Manager
ii  gzip                                           1.12-1                                amd64        GNU compression utilities
ii  hash-identifier                                1.2+git20180314-0kali2                all          Tool to identify hash types
ii  hashcat                                        6.2.6+ds1-1+b1                        amd64        World's fastest and most advanced password recovery utility
ii  hashcat-data                                   6.2.6+ds1-1                           all          Data files for hashcat advanced password recovery utility
ii  hashcat-utils                                  1.9-0kali2                            amd64        Set of small utilities for advanced password cracking
ii  hashdeep                                       4.4-7.1+b1                            amd64        recursively compute hashsums or piecewise hashings
ii  hashid                                         3.1.4-4                               all          Identify the different types of hashes used to encrypt data
ii  haveged                                        1.9.14-1+b1                           amd64        Linux entropy source using the HAVEGE algorithm
ii  hdparm                                         9.65+ds-1                             amd64        tune hard disk parameters for high performance
ii  hicolor-icon-theme                             0.17-2                                all          default fallback theme for FreeDesktop.org icon themes
ii  hostname                                       3.23+nmu1                             amd64        utility to set/show the host name or domain name
ii  hotpatch                                       0.2-1kali4                            amd64        Hot patches Linux executables with .so file injection
ii  hping3                                         3.a2.ds2-10                           amd64        Active Network Smashing Tool
ii  hunspell-en-us                                 1:2020.12.07-2                        all          English_american dictionary for hunspell
ii  hwloc                                          2.9.2-1                               amd64        Hierarchical view of the machine - utilities
ii  hydra                                          9.5-1                                 amd64        very fast network logon cracker
ii  hydra-gtk                                      9.5-1                                 amd64        very fast network logon cracker - GTK+ based GUI
ii  hyperion                                       2.0-0kali4                            all          Runtime encrypter for 32-bit portable executables
ii  i2c-tools                                      4.3-4                                 amd64        heterogeneous set of I2C tools for Linux
ii  i965-va-driver:amd64                           2.4.1+dfsg1-1                         amd64        VAAPI driver for Intel G45 & HD Graphics family
ii  ibus                                           1.5.29~rc1-1                          amd64        Intelligent Input Bus - core
ii  ibus-data                                      1.5.29~rc1-1                          all          Intelligent Input Bus - data files
ii  ibus-gtk:amd64                                 1.5.29~rc1-1                          amd64        Intelligent Input Bus - GTK2 support
ii  ibus-gtk3:amd64                                1.5.29~rc1-1                          amd64        Intelligent Input Bus - GTK3 support
ii  ibus-gtk4:amd64                                1.5.29~rc1-1                          amd64        Intelligent Input Bus - GTK4 support
ii  ibverbs-providers:amd64                        47.0-1                                amd64        User space provider drivers for libibverbs
ii  icu-devtools                                   72.1-3                                amd64        Development utilities for International Components for Unicode
ii  ieee-data                                      20220827.1                            all          OUI and IAB listings
ii  ifenslave                                      2.13                                  all          configure network interfaces for parallel routing (bonding)
ii  ifupdown                                       0.8.41                                amd64        high level tools to configure network interfaces
ii  iio-sensor-proxy                               3.5-1                                 amd64        IIO sensors to D-Bus proxy
ii  ike-scan                                       1.9.5-1+b1                            amd64        discover and fingerprint IKE hosts (IPsec VPN Servers)
ii  im-config                                      0.57-2                                all          Input method configuration framework
ii  imagemagick-6-common                           8:6.9.11.60+dfsg-1.6                  all          image manipulation programs -- infrastructure
ii  impacket-scripts                               1.8                                   all          Links to useful impacket scripts examples
ii  inetsim                                        1.3.2+dfsg.1-1                        all          Software suite for simulating common internet services
ii  inetutils-telnet                               2:2.4-3                               amd64        telnet client
ii  init                                           1.65.2+kali2                          amd64        metapackage ensuring an init system is installed
ii  init-system-helpers                            1.65.2+kali2                          all          helper tools for all init systems
ii  initramfs-tools                                0.142                                 all          generic modular initramfs generator (automation)
ii  initramfs-tools-core                           0.142                                 all          generic modular initramfs generator (core tools)
ii  installation-report                            2.89                                  all          system installation report
ii  intel-media-va-driver:amd64                    23.2.3+dfsg1-1                        amd64        VAAPI driver for the Intel GEN8+ Graphics family
ii  intel-microcode                                3.20230808.1                          amd64        Processor microcode firmware for Intel CPUs
ii  iodine                                         0.7.0-10+b1                           amd64        tool for tunneling IPv4 data through a DNS server
ii  ipp-usb                                        0.9.23-1+b6                           amd64        Daemon for IPP over USB printer support
ii  iproute2                                       6.4.0-1                               amd64        networking and traffic control tools
ii  iptables                                       1.8.9-2                               amd64        administration tools for packet filtering and NAT
ii  iputils-ping                                   3:20221126-1                          amd64        Tools to test the reachability of network hosts
ii  ipython3                                       8.14.0-1                              all          Enhanced interactive Python 3 shell
ii  isc-dhcp-client                                4.4.3-P1-2                            amd64        DHCP client for automatically obtaining an IP address
ii  isc-dhcp-common                                4.4.3-P1-2                            amd64        common manpages relevant to all of the isc-dhcp packages
ii  iso-codes                                      4.15.0-1                              all          ISO language, territory, currency, script codes and their translations
ii  isympy-common                                  1.12-3                                all          Python shell for SymPy
ii  isympy3                                        1.12-3                                all          Python3 shell for SymPy
ii  iucode-tool                                    2.3.1-3                               amd64        Intel processor microcode tool
ii  iw                                             5.19-1                                amd64        tool for configuring Linux wireless devices
ii  java-common                                    0.74                                  all          Base package for Java runtimes
ii  java-wrappers                                  0.4                                   all          wrappers for java executables
ii  javascript-common                              11+nmu1                               all          Base support for JavaScript library packages
ii  john                                           1.9.0-Jumbo-1+git20211102-0kali5      amd64        active password cracking tool
ii  john-data                                      1.9.0-Jumbo-1+git20211102-0kali5      all          active password cracking tool - character sets
ii  jq                                             1.6-3                                 amd64        lightweight and flexible command-line JSON processor
ii  kali-archive-keyring                           2022.1                                all          GnuPG archive keys of the Kali archive
ii  kali-debtags                                   0.4                                   all          Kali-specific debtags
ii  kali-defaults                                  2023.3.1                              all          Kali default settings
ii  kali-defaults-desktop                          2023.3.1                              all          Kali default settings for graphical desktops
ii  kali-desktop-base                              2023.4.0                              all          Kali version of Debian's desktop-base package
ii  kali-desktop-core                              2023.3.5                              amd64        Metapackage with dependencies common to all Kali's desktops
ii  kali-desktop-gnome                             2023.3.5                              all          GNOME based Kali desktop
ii  kali-grant-root                                2022.4.0                              all          Configuration controlling privilege escalation to root
ii  kali-linux-core                                2023.3.5                              amd64        Kali's core packages
ii  kali-linux-default                             2023.3.5                              amd64        Kali's default toolset
ii  kali-linux-firmware                            2023.3.5                              amd64        Kali's default firmware files
ii  kali-linux-headless                            2023.3.5                              amd64        Kali's default headless tools
ii  kali-menu                                      2023.4.5                              all          Kali Linux custom menu
ii  kali-system-cli                                2023.3.5                              amd64        Kali's system CLI tools
ii  kali-system-core                               2023.3.5                              amd64        Kali's core packages
ii  kali-system-gui                                2023.3.5                              amd64        Kali's system GUI tools
ii  kali-themes                                    2023.4.0                              all          Configure all desktops to use the Kali theme
ii  kali-themes-common                             2023.4.0                              all          Kali Themes (data files)
ii  kali-tools-top10                               2023.3.5                              amd64        Kali's top 10 tools
ii  kali-tweaks                                    2023.3.2                              all          tool to adjust advanced configuration settings for Kali Linux
ii  kali-wallpapers-2023                           2023.2.0                              all          Default wallpapers for Kali Linux 2023 and newer
ii  kbd                                            2.5.1-1+b1                            amd64        Linux console font and keytable utilities
ii  keyboard-configuration                         1.222                                 all          system-wide keyboard preferences
ii  keyutils                                       1.6.3-2                               amd64        Linux Key Management Utilities
ii  kismet                                         2023.07.R1-0kali2                     amd64        wireless network and device detector (metapackage)
ii  kismet-capture-common                          2023.07.R1-0kali2                     all          Kismet Capture common helper
ii  kismet-capture-hak5-wifi-coconut               2023.07.R1-0kali2                     amd64        Kismet capture helper for WiFi Coconut
ii  kismet-capture-linux-bluetooth                 2023.07.R1-0kali2                     amd64        Kismet Linux Bluetooth capture helper
ii  kismet-capture-linux-wifi                      2023.07.R1-0kali2                     amd64        Kismet Linux Wi-Fi capture helper
ii  kismet-capture-nrf-51822                       2023.07.R1-0kali2                     amd64        Kismet NRF51822 BTLE Sniffer capture helper
ii  kismet-capture-nrf-52840                       2023.07.R1-0kali2                     amd64        Kismet NRF52840 BTLE Sniffer capture helper
ii  kismet-capture-nrf-mousejack                   2023.07.R1-0kali2                     amd64        Kismet nRF MouseJack capture helper
ii  kismet-capture-nxp-kw41z                       2023.07.R1-0kali2                     amd64        Kismet NXP KW41Z BTLE and Zigbee Sniffer capture helper
ii  kismet-capture-rz-killerbee                    2023.07.R1-0kali2                     amd64        Kismet Killerbee Sniffer capture helper
ii  kismet-capture-ti-cc-2531                      2023.07.R1-0kali2                     amd64        Kismet TICC2531 802.15.4 Zigbee Sniffer capture helper
ii  kismet-capture-ti-cc-2540                      2023.07.R1-0kali2                     amd64        Kismet TICC2540 BTLE Sniffer capture helper
ii  kismet-capture-ubertooth-one                   2023.07.R1-0kali2                     amd64        Kismet Ubertooth One BT Sniffer capture helper
ii  kismet-core                                    2023.07.R1-0kali2                     amd64        Kismet Core wireless network and device detector
ii  kismet-logtools                                2023.07.R1-0kali2                     amd64        wireless network and device detector
ii  klibc-utils                                    2.0.13-1                              amd64        small utilities built with klibc for early boot
ii  kmod                                           30+20230601-1                         amd64        tools for managing Linux kernel modules
ii  krb5-locales                                   1.20.1-3                              all          internationalization support for MIT Kerberos
ii  laptop-detect                                  0.16                                  all          system chassis type checker
ii  laudanum                                       1.0+r36-0kali6                        all          Collection of injectable web files
ii  lbd                                            0.4-1kali3                            all          Load balancer detector
ii  ldap-utils                                     2.5.13+dfsg-5                         amd64        OpenLDAP utilities
ii  legion                                         0.3.9-0kali1                          all          semi-automated network penetration testing tool
ii  less                                           590-2                                 amd64        pager program similar to more
ii  lib32gcc-s1                                    13.2.0-2                              amd64        GCC support library (32 bit Version)
ii  lib32stdc++6                                   13.2.0-2                              amd64        GNU Standard C++ Library v3 (32 bit Version)
ii  liba52-0.7.4:amd64                             0.7.4-20                              amd64        library for decoding ATSC A/52 streams
ii  libaa1:amd64                                   1.4p5-50                              amd64        ASCII art library
ii  libaacs0:amd64                                 0.11.1-2                              amd64        free-and-libre implementation of AACS
ii  libabsl20220623:amd64                          20220623.1-3                          amd64        extensions to the C++ standard library
ii  libaccountsservice0:amd64                      23.13.9-4                             amd64        query and manipulate user account information - shared libraries
ii  libacl1:amd64                                  2.3.1-3                               amd64        access control list - shared library
ii  libadwaita-1-0:amd64                           1.3.3-2+kali1                         amd64        Library with GTK widgets for mobile phones
ii  libaec0:amd64                                  1.0.6-1+b1                            amd64        Adaptive Entropy Coding library
ii  libafflib0v5:amd64                             3.7.20-1                              amd64        Advanced Forensics Format Library
ii  libaio1:amd64                                  0.3.113-5                             amd64        Linux kernel AIO access library - shared library
ii  libalgorithm-diff-perl                         1.201-1                               all          module to find differences between files
ii  libalgorithm-diff-xs-perl:amd64                0.04-8+b1                             amd64        module to find differences between files (XS accelerated)
ii  libalgorithm-merge-perl                        0.08-5                                all          Perl module for three-way merge of textual data
ii  libann0                                        1.1.2+doc-9+b1                        amd64        Approximate Nearest Neighbor Searching library
ii  libao-common                                   1.2.2+20180113-1.1                    all          Cross Platform Audio Output Library (Common files)
ii  libao4:amd64                                   1.2.2+20180113-1.1                    amd64        Cross Platform Audio Output Library
ii  libaom3:amd64                                  3.7.0~really3.6.1-1                   amd64        AV1 Video Codec Library
ii  libapache-pom-java                             29-2                                  all          Maven metadata for all Apache Software projects
ii  libapache2-mod-dnssd                           0.6-4                                 amd64        Zeroconf support for Apache 2 via avahi
ii  libapache2-mod-php                             2:8.2+93                              all          server-side, HTML-embedded scripting language (Apache 2 module) (default)
ii  libapache2-mod-php8.2                          8.2.7-1                               amd64        server-side, HTML-embedded scripting language (Apache 2 module)
ii  libapparmor1:amd64                             3.0.12-1                              amd64        changehat AppArmor library
ii  libappstream4:amd64                            0.16.3-1                              amd64        Library to access AppStream services
ii  libapr1:amd64                                  1.7.2-3                               amd64        Apache Portable Runtime Library
ii  libaprutil1:amd64                              1.6.3-1                               amd64        Apache Portable Runtime Utility Library
ii  libaprutil1-dbd-sqlite3:amd64                  1.6.3-1                               amd64        Apache Portable Runtime Utility Library - SQLite3 Driver
ii  libaprutil1-ldap:amd64                         1.6.3-1                               amd64        Apache Portable Runtime Utility Library - LDAP Driver
ii  libapt-pkg-perl                                0.1.40+b2                             amd64        Perl interface to libapt-pkg
ii  libapt-pkg6.0:amd64                            2.7.3                                 amd64        package management runtime library
ii  libarchive-zip-perl                            1.68-1                                all          Perl module for manipulation of ZIP archives
ii  libarchive13:amd64                             3.6.2-1                               amd64        Multi-format archive and compression library (shared library)
ii  libargon2-1:amd64                              0~20190702+dfsg-3                     amd64        memory-hard hashing function - runtime library
ii  libarmadillo12                                 1:12.6.1+dfsg-2                       amd64        streamlined C++ linear algebra library
ii  libarpack2:amd64                               3.8.0-3                               amd64        Fortran77 subroutines to solve large scale eigenvalue problems
ii  libasan8:amd64                                 13.2.0-2                              amd64        AddressSanitizer -- a fast memory error detector
ii  libasound2:amd64                               1.2.9-2                               amd64        shared library for ALSA applications
ii  libasound2-data                                1.2.9-2                               all          Configuration files and profiles for ALSA drivers
ii  libaspell15:amd64                              0.60.8-6                              amd64        GNU Aspell spell-checker runtime library
ii  libass9:amd64                                  1:0.17.1-1                            amd64        library for SSA/ASS subtitles rendering
ii  libassuan0:amd64                               2.5.6-1                               amd64        IPC library for the GnuPG components
ii  libasyncns0:amd64                              0.8-6+b3                              amd64        Asynchronous name service query library
ii  libatasmart4:amd64                             0.19-5                                amd64        ATA S.M.A.R.T. reading and parsing library
ii  libatk-adaptor:amd64                           2.48.3-1                              amd64        AT-SPI 2 toolkit bridge
ii  libatk-bridge2.0-0:amd64                       2.48.3-1                              amd64        AT-SPI 2 toolkit bridge - shared library
ii  libatk-wrapper-java                            0.40.0-3                              all          ATK implementation for Java using JNI
ii  libatk-wrapper-java-jni:amd64                  0.40.0-3                              amd64        ATK implementation for Java using JNI (JNI bindings)
ii  libatk1.0-0:amd64                              2.48.3-1                              amd64        ATK accessibility toolkit
ii  libatkmm-1.6-1v5:amd64                         2.28.3-1                              amd64        C++ wrappers for ATK accessibility toolkit (shared libraries)
ii  libatomic1:amd64                               13.2.0-2                              amd64        support library providing __atomic built-in functions
ii  libatspi2.0-0:amd64                            2.48.3-1                              amd64        Assistive Technology Service Provider Interface - shared library
ii  libattr1:amd64                                 1:2.5.1-4                             amd64        extended attribute handling - shared library
ii  libaudio2:amd64                                1.9.4-7                               amd64        Network Audio System - shared libraries
ii  libaudit-common                                1:3.1.1-1                             all          Dynamic library for security auditing - common files
ii  libaudit1:amd64                                1:3.1.1-1                             amd64        Dynamic library for security auditing
ii  libauthen-sasl-perl                            2.1600-3                              all          Authen::SASL - SASL Authentication framework
ii  libavahi-client3:amd64                         0.8-11                                amd64        Avahi client library
ii  libavahi-common-data:amd64                     0.8-11                                amd64        Avahi common data files
ii  libavahi-common3:amd64                         0.8-11                                amd64        Avahi common library
ii  libavahi-core7:amd64                           0.8-11                                amd64        Avahi's embeddable mDNS/DNS-SD library
ii  libavahi-glib1:amd64                           0.8-11                                amd64        Avahi GLib integration library
ii  libavc1394-0:amd64                             0.5.4-5                               amd64        control IEEE 1394 audio/video devices
ii  libavcodec60:amd64                             7:6.0-6                               amd64        FFmpeg library with de/encoders for audio/video codecs - runtime files
ii  libavfilter9:amd64                             7:6.0-6                               amd64        FFmpeg library containing media filters - runtime files
ii  libavformat60:amd64                            7:6.0-6                               amd64        FFmpeg library with (de)muxers for multimedia containers - runtime files
ii  libavif15:amd64                                0.11.1-3                              amd64        Library for handling .avif files
ii  libavtp0:amd64                                 0.2.0-1+b1                            amd64        Audio Video Transport Protocol (shared library)
ii  libavutil58:amd64                              7:6.0-6                               amd64        FFmpeg library with functions for simplifying programming - runtime files
ii  libayatana-appindicator3-1                     0.5.92-1.2                            amd64        Ayatana Application Indicators (GTK-3+ version)
ii  libayatana-ido3-0.4-0:amd64                    0.10.1-1                              amd64        Widgets and other objects used for Ayatana Indicators
ii  libayatana-indicator3-7:amd64                  0.9.3-1                               amd64        panel indicator applet - shared library (GTK-3+ variant)
ii  libb2-1:amd64                                  0.98.1-1.1                            amd64        BLAKE2 family of hash functions
ii  libbcg729-0:amd64                              1.1.1-2                               amd64        ITU G.729 Annex A compatible audio codec
ii  libbdplus0:amd64                               0.2.0-3                               amd64        implementation of BD+ for reading Blu-ray Discs
ii  libbfio1:amd64                                 20170123-6                            amd64        Library to provide basic input/output abstraction
ii  libbinutils:amd64                              2.41-5                                amd64        GNU binary utilities (private shared library)
ii  libbit-vector-perl:amd64                       7.4-2+b1                              amd64        Perl module for bit vectors and more
ii  libblas3:amd64                                 3.11.0-2                              amd64        Basic Linear Algebra Reference implementations, shared library
ii  libblkid1:amd64                                2.39.2-1                              amd64        block device ID library
ii  libblockdev-crypto3:amd64                      3.0.3-1                               amd64        Crypto plugin for libblockdev
ii  libblockdev-fs3:amd64                          3.0.3-1                               amd64        file system plugin for libblockdev
ii  libblockdev-loop3:amd64                        3.0.3-1                               amd64        Loop device plugin for libblockdev
ii  libblockdev-mdraid3:amd64                      3.0.3-1                               amd64        MD RAID plugin for libblockdev
ii  libblockdev-nvme3:amd64                        3.0.3-1                               amd64        NVMe plugin for libblockdev
ii  libblockdev-part3:amd64                        3.0.3-1                               amd64        Partitioning plugin for libblockdev
ii  libblockdev-swap3:amd64                        3.0.3-1                               amd64        Swap plugin for libblockdev
ii  libblockdev-utils3:amd64                       3.0.3-1                               amd64        Utility functions for libblockdev
ii  libblockdev3:amd64                             3.0.3-1                               amd64        Library for manipulating block devices
ii  libblosc1:amd64                                1.21.5+ds-1                           amd64        high performance meta-compressor optimized for binary data
ii  libbluetooth3:amd64                            5.69-1kali1                           amd64        Library to use the BlueZ Linux Bluetooth stack
ii  libbluray2:amd64                               1:1.3.4-1                             amd64        Blu-ray disc playback support library (shared library)
ii  libboost-dev:amd64                             1.74.0.3                              amd64        Boost C++ Libraries development files (default version)
ii  libboost-iostreams1.74.0:amd64                 1.74.0+ds1-22                         amd64        Boost.Iostreams Library
ii  libboost-thread1.74.0:amd64                    1.74.0+ds1-22                         amd64        portable C++ multi-threading
ii  libboost1.74-dev:amd64                         1.74.0+ds1-22                         amd64        Boost C++ Libraries development files
ii  libbpf1:amd64                                  1:1.2.2-2                             amd64        eBPF helper library (shared library)
ii  libbrlapi0.8:amd64                             6.6-4                                 amd64        braille display access via BRLTTY - shared library
ii  libbrotli1:amd64                               1.0.9-2+b6                            amd64        library implementing brotli encoder and decoder (shared libraries)
ii  libbs2b0:amd64                                 3.1.0+dfsg-7                          amd64        Bauer stereophonic-to-binaural DSP library
ii  libbsd0:amd64                                  0.11.7-4                              amd64        utility functions from BSD systems - shared library
ii  libbson-1.0-0                                  1.24.4-1                              amd64        Library to parse and generate BSON documents - runtime files
ii  libbtbb1:amd64                                 2018.12.R1-1                          amd64        Bluetooth baseband decoding library
ii  libbytes-random-secure-perl                    0.29-3                                all          Perl extension to generate cryptographically-secure random bytes
ii  libbytesize-common                             2.9-1                                 all          library for common operations with sizes in bytes - translations
ii  libbytesize1:amd64                             2.9-1                                 amd64        library for common operations with sizes in bytes
ii  libbz2-1.0:amd64                               1.0.8-5+b1                            amd64        high-quality block-sorting file compressor library - runtime
ii  libc-ares2:amd64                               1.19.1-3                              amd64        asynchronous name resolver
ii  libc-bin                                       2.37-7                                amd64        GNU C Library: Binaries
ii  libc-dev-bin                                   2.37-7                                amd64        GNU C Library: Development binaries
ii  libc-devtools                                  2.37-7                                amd64        GNU C Library: Development tools
ii  libc-l10n                                      2.37-7                                all          GNU C Library: localization files
ii  libc6:amd64                                    2.37-7                                amd64        GNU C Library: Shared libraries
ii  libc6-dev:amd64                                2.37-7                                amd64        GNU C Library: Development Libraries and Header Files
ii  libc6-i386                                     2.37-7                                amd64        GNU C Library: 32-bit shared libraries for AMD64
ii  libcaca0:amd64                                 0.99.beta20-4                         amd64        colour ASCII art library
ii  libcairo-gobject2:amd64                        1.16.0-7                              amd64        Cairo 2D vector graphics library (GObject library)
ii  libcairo-script-interpreter2:amd64             1.16.0-7                              amd64        Cairo 2D vector graphics library (script interpreter)
ii  libcairo2:amd64                                1.16.0-7                              amd64        Cairo 2D vector graphics library
ii  libcairomm-1.0-1v5:amd64                       1.14.4-2                              amd64        C++ wrappers for Cairo (shared libraries)
ii  libcamel-1.2-64:amd64                          3.49.3-1                              amd64        Evolution MIME message handling library
ii  libcanberra-gtk-module:amd64                   0.30-10                               amd64        translates GTK+ widgets signals to event sounds
ii  libcanberra-gtk0:amd64                         0.30-10                               amd64        GTK+ helper for playing widget event sounds with libcanberra
ii  libcanberra-gtk3-0:amd64                       0.30-10                               amd64        GTK+ 3.0 helper for playing widget event sounds with libcanberra
ii  libcanberra-gtk3-module:amd64                  0.30-10                               amd64        translates GTK3 widgets signals to event sounds
ii  libcanberra-pulse:amd64                        0.30-10                               amd64        PulseAudio backend for libcanberra
ii  libcanberra0:amd64                             0.30-10                               amd64        simple abstract interface for playing event sounds
ii  libcap-ng0:amd64                               0.8.3-1+b3                            amd64        alternate POSIX capabilities library
ii  libcap2:amd64                                  1:2.66-4                              amd64        POSIX 1003.1e capabilities (library)
ii  libcap2-bin                                    1:2.66-4                              amd64        POSIX 1003.1e capabilities (utilities)
ii  libcapstone-dev:amd64                          4.0.2-5                               amd64        lightweight multi-architecture disassembly framework - devel files
ii  libcapstone4:amd64                             4.0.2-5                               amd64        lightweight multi-architecture disassembly framework - library
ii  libcarp-clan-perl                              6.08-2                                all          Perl enhancement to Carp error logging facilities
ii  libcbor0.8:amd64                               0.8.0-2+b1                            amd64        library for parsing and generating CBOR (RFC 7049)
ii  libcc1-0:amd64                                 13.2.0-2                              amd64        GCC cc1 plugin for GDB
ii  libccid                                        1.5.2-1                               amd64        PC/SC driver for USB CCID smart card readers
ii  libcdio-cdda2:amd64                            10.2+2.0.1-1                          amd64        library to read and control digital audio CDs
ii  libcdio-paranoia2:amd64                        10.2+2.0.1-1                          amd64        library to read digital audio CDs with error correction
ii  libcdio19:amd64                                2.1.0-4                               amd64        library to read and control CD-ROM
ii  libcdparanoia0:amd64                           3.10.2+debian-14                      amd64        audio extraction tool for sampling CDs (library)
ii  libcdt5:amd64                                  2.42.2-7+b3                           amd64        rich set of graph drawing tools - cdt library
ii  libcephfs2                                     16.2.11+ds-2                          amd64        Ceph distributed file system client library
ii  libcfitsio10:amd64                             4.3.0-2                               amd64        shared library for I/O with FITS format data files
ii  libcgi-fast-perl                               1:2.15-1                              all          CGI subclass for work with FCGI
ii  libcgi-pm-perl                                 4.57-1                                all          module for Common Gateway Interface applications
ii  libcgraph6:amd64                               2.42.2-7+b3                           amd64        rich set of graph drawing tools - cgraph library
ii  libchromaprint1:amd64                          1.5.1-4                               amd64        audio fingerprint library
ii  libcjson1:amd64                                1.7.16-1                              amd64        Ultralightweight JSON parser in ANSI C
ii  libclang-common-14-dev                         1:14.0.6-13                           all          Clang library - Common development package
ii  libclang-common-15-dev                         1:15.0.7-8                            all          Clang library - Common development package
ii  libclang-cpp14                                 1:14.0.6-13                           amd64        C++ interface to the Clang library
ii  libclang-cpp15                                 1:15.0.7-8                            amd64        C++ interface to the Clang library
ii  libclang-rt-14-dev:amd64                       1:14.0.6-13                           amd64        Compiler-rt - development package
ii  libclang-rt-15-dev:amd64                       1:15.0.7-8                            amd64        Compiler-rt - development package
ii  libclang1-14                                   1:14.0.6-13                           amd64        C interface to the Clang library
ii  libclang1-15                                   1:15.0.7-8                            amd64        C interface to the Clang library
ii  libcli1.10:amd64                               1.10.7-1+b1                           amd64        emulates a cisco style telnet command-line interface
ii  libclone-perl:amd64                            0.46-1                                amd64        module for recursively copying Perl datatypes
ii  libcloudproviders0:amd64                       0.3.4-1                               amd64        cloud provider library
ii  libcodec2-1.2:amd64                            1.2.0-2                               amd64        Codec2 runtime library
ii  libcolord-gtk4-1:amd64                         0.3.0-4                               amd64        GTK4 convenience library for interacting with colord
ii  libcolord2:amd64                               1.4.6-3                               amd64        system service to manage device colour profiles -- runtime
ii  libcolorhug2:amd64                             1.4.6-3                               amd64        library to access the ColorHug colourimeter -- runtime
ii  libcom-err2:amd64                              1.47.0-2+b1                           amd64        common error description library
ii  libcommon-sense-perl:amd64                     3.75-3                                amd64        module that implements some sane defaults for Perl programs
ii  libcommons-logging-java                        1.2-3                                 all          common wrapper interface for several logging APIs
ii  libcommons-parent-java                         56-1                                  all          Maven metadata for Apache Commons project
ii  libcompress-raw-lzma-perl:amd64                2.206-2                               amd64        low-level interface to lzma compression library
ii  libconfig++9v5:amd64                           1.5-0.4                               amd64        parsing/manipulation of structured configuration files (C++ binding)
ii  libconfig-inifiles-perl                        3.000003-2                            all          read .ini-style configuration files
ii  libconfig9:amd64                               1.5-0.4                               amd64        parsing/manipulation of structured configuration files
ii  libcrack2:amd64                                2.9.6-5+b1                            amd64        pro-active password checker library
ii  libcrypt-dev:amd64                             1:4.4.36-2                            amd64        libcrypt development files
ii  libcrypt-random-seed-perl                      0.03-3                                all          Perl module providing strong randomness for seeding
ii  libcrypt-rc4-perl                              2.02-5                                all          Perl implementation of the RC4 encryption algorithm
ii  libcrypt-ssleay-perl                           0.73.06-2+b1                          amd64        OpenSSL support for LWP
ii  libcrypt1:amd64                                1:4.4.36-2                            amd64        libcrypt shared library
ii  libcrypto++8:amd64                             8.8.0-2                               amd64        General purpose cryptographic library - shared library
ii  libcryptsetup12:amd64                          2:2.6.1-5                             amd64        disk encryption support - shared library
ii  libct4:amd64                                   1.3.17+ds-2                           amd64        libraries for connecting to MS SQL and Sybase SQL servers
ii  libctf-nobfd0:amd64                            2.41-5                                amd64        Compact C Type Format library (runtime, no BFD dependency)
ii  libctf0:amd64                                  2.41-5                                amd64        Compact C Type Format library (runtime, BFD dependency)
ii  libcue2:amd64                                  2.2.1-4                               amd64        CUE Sheet Parser Library
ii  libcups2:amd64                                 2.4.2-5                               amd64        Common UNIX Printing System(tm) - Core library
ii  libcurl3-gnutls:amd64                          8.2.1-1                               amd64        easy-to-use client-side URL transfer library (GnuTLS flavour)
ii  libcurl3-nss:amd64                             8.2.1-1                               amd64        easy-to-use client-side URL transfer library (NSS flavour)
ii  libcurl4:amd64                                 8.2.1-1                               amd64        easy-to-use client-side URL transfer library (OpenSSL flavour)
ii  libdaemon0:amd64                               0.14-7.1                              amd64        lightweight C library for daemons - runtime library
ii  libdata-dump-perl                              1.25-1                                all          Perl module to help dump data structures
ii  libdate-calc-perl                              6.4-2                                 all          Perl library for accessing dates
ii  libdate-calc-xs-perl:amd64                     6.4-2+b1                              amd64        Perl library for accessing dates
ii  libdate-manip-perl                             6.92-1                                all          module for manipulating dates
ii  libdatrie1:amd64                               0.2.13-2+b1                           amd64        Double-array trie library
ii  libdav1d6:amd64                                1.2.1-2                               amd64        fast and small AV1 video stream decoder (shared library)
ii  libdaxctl1:amd64                               77-2                                  amd64        Utility library for managing the device DAX subsystem
ii  libdb5.3:amd64                                 5.3.28+dfsg2-2                        amd64        Berkeley v5.3 Database Libraries [runtime]
ii  libdbd-mariadb-perl                            1.22-1+b1                             amd64        Perl5 database interface to the MariaDB/MySQL databases
ii  libdbi-perl:amd64                              1.643-4                               amd64        Perl Database Interface (DBI)
ii  libdbus-1-3:amd64                              1.14.8-2                              amd64        simple interprocess messaging system (library)
ii  libdbus-glib-1-2:amd64                         0.112-3                               amd64        deprecated library for D-Bus IPC
ii  libdbusmenu-glib4:amd64                        18.10.20180917~bzr492+repack1-3.1     amd64        library for passing menus over DBus
ii  libdbusmenu-gtk3-4:amd64                       18.10.20180917~bzr492+repack1-3.1     amd64        library for passing menus over DBus - GTK-3+ version
ii  libdc1394-25:amd64                             2.2.6-4                               amd64        high level programming interface for IEEE 1394 digital cameras
ii  libdca0:amd64                                  0.0.7-2                               amd64        decoding library for DTS Coherent Acoustics streams
ii  libdconf1:amd64                                0.40.0-4                              amd64        simple configuration storage system - runtime library
ii  libde265-0:amd64                               1.0.12-1+b1                           amd64        Open H.265 video codec implementation
ii  libdebconfclient0:amd64                        0.270                                 amd64        Debian Configuration Management System (C-implementation library)
ii  libdecor-0-0:amd64                             0.1.1-2                               amd64        client-side window decoration library
ii  libdecor-0-plugin-1-cairo:amd64                0.1.1-2                               amd64        default decoration plugin
ii  libdeflate0:amd64                              1.18-1                                amd64        fast, whole-buffer DEFLATE-based compression and decompression
ii  libdevmapper1.02.1:amd64                       2:1.02.185-2                          amd64        Linux Kernel Device Mapper userspace library
ii  libdigest-bubblebabble-perl                    0.02-2.1                              all          perl module to create bubble-babble fingerprints
ii  libdigest-hmac-perl                            1.04+dfsg-2                           all          module for creating standard message integrity checks
ii  libdigest-perl-md5-perl                        1.9-5                                 all          Perl Implementation of Rivest's MD5 algorithm
ii  libdirectfb-1.7-7:amd64                        1.7.7-11                              amd64        direct frame buffer graphics (shared libraries)
ii  libdiscover2                                   2.1.2-10                              amd64        hardware identification library
ii  libdjvulibre-text                              3.5.28-2                              all          Linguistic support files for libdjvulibre
ii  libdjvulibre21:amd64                           3.5.28-2+b1                           amd64        Runtime support for the DjVu image format
ii  libdlt2:amd64                                  2.18.10-5                             amd64        Diagnostic Log and Trace (DLT) library
ii  libdmapsharing-4.0-3:amd64                     3.9.13-1                              amd64        DMAP client and server library - runtime
ii  libdotconf0:amd64                              1.3-0.3                               amd64        Configuration file parser library - runtime files
ii  libdouble-conversion3:amd64                    3.3.0-1                               amd64        routines to convert IEEE floats to and from strings
ii  libdpkg-perl                                   1.22.0+kali1                          all          Dpkg perl modules
ii  libdrm-amdgpu1:amd64                           2.4.115-1                             amd64        Userspace interface to amdgpu-specific kernel DRM services -- runtime
ii  libdrm-common                                  2.4.115-1                             all          Userspace interface to kernel DRM services -- common files
ii  libdrm-intel1:amd64                            2.4.115-1                             amd64        Userspace interface to intel-specific kernel DRM services -- runtime
ii  libdrm-nouveau2:amd64                          2.4.115-1                             amd64        Userspace interface to nouveau-specific kernel DRM services -- runtime
ii  libdrm-radeon1:amd64                           2.4.115-1                             amd64        Userspace interface to radeon-specific kernel DRM services -- runtime
ii  libdrm2:amd64                                  2.4.115-1                             amd64        Userspace interface to kernel DRM services -- runtime
ii  libduktape207:amd64                            2.7.0-2                               amd64        embeddable Javascript engine, library
ii  libdumbnet1:amd64                              1.16.4-1                              amd64        dumb, portable networking library -- shared library
ii  libdv4:amd64                                   1.0.0-16                              amd64        software library for DV format digital video (runtime lib)
ii  libdvdnav4:amd64                               6.1.1-1                               amd64        DVD navigation library
ii  libdvdread8:amd64                              6.1.3-1                               amd64        library for reading DVDs
ii  libdw1:amd64                                   0.189-4                               amd64        library that provides access to the DWARF debug information
ii  libeac3:amd64                                  1.1.2+ds+git20220117+453c3d6b03a0-1.1 amd64        cryptographic library for EAC version 2 (shared library)
ii  libeatmydata1:amd64                            131-1                                 amd64        Library and utilities designed to disable fsync and friends - shared library
ii  libebackend-1.2-11:amd64                       3.49.3-1                              amd64        Utility library for evolution data servers
ii  libebook-1.2-21:amd64                          3.49.3-1                              amd64        Client library for evolution address books
ii  libebook-contacts-1.2-4:amd64                  3.49.3-1                              amd64        Client library for evolution contacts books
ii  libecal-2.0-2:amd64                            3.49.3-1                              amd64        Client library for evolution calendars
ii  libedata-book-1.2-27:amd64                     3.49.3-1                              amd64        Backend library for evolution address books
ii  libedata-cal-2.0-2:amd64                       3.49.3-1                              amd64        Backend library for evolution calendars
ii  libedataserver-1.2-27:amd64                    3.49.3-1                              amd64        Utility library for evolution data servers
ii  libedataserverui-1.2-4:amd64                   3.49.3-1                              amd64        Utility library for evolution data servers
ii  libedit2:amd64                                 3.1-20230828-1                        amd64        BSD editline and history libraries
ii  libeditorconfig0:amd64                         0.12.6-0.1                            amd64        coding style indenter across editors - library
ii  libefiboot1:amd64                              37-6                                  amd64        Library to manage UEFI variables
ii  libefivar1:amd64                               37-6                                  amd64        Library to manage UEFI variables
ii  libegl-dev:amd64                               1.6.0-1                               amd64        Vendor neutral GL dispatch library -- EGL development files
ii  libegl-mesa0:amd64                             23.1.7-1                              amd64        free implementation of the EGL API -- Mesa vendor library
ii  libegl1:amd64                                  1.6.0-1                               amd64        Vendor neutral GL dispatch library -- EGL support
ii  libelf1:amd64                                  0.189-4                               amd64        library to read and write ELF files
ii  libenchant-2-2:amd64                           2.3.3-2                               amd64        Wrapper library for various spell checker engines (runtime libs)
ii  libencode-locale-perl                          1.05-3                                all          utility to determine the locale encoding
ii  libencode-perl:amd64                           3.19-1+b1                             amd64        module providing interfaces between Perl's strings and the system
ii  libepoxy0:amd64                                1.5.10-1                              amd64        OpenGL function pointer management library
ii  liberror-perl                                  0.17029-2                             all          Perl module for error/exception handling in an OO-ish way
ii  libespeak-ng1:amd64                            1.51+dfsg-11                          amd64        Multi-lingual software speech synthesizer: shared library
ii  libevdev2:amd64                                1.13.1+dfsg-1                         amd64        wrapper library for evdev devices
ii  libevdocument3-4:amd64                         45~alpha-2                            amd64        Document (PostScript, PDF) rendering library
ii  libevent-2.1-7:amd64                           2.1.12-stable-8                       amd64        Asynchronous event notification library
ii  libevent-core-2.1-7:amd64                      2.1.12-stable-8                       amd64        Asynchronous event notification library (core)
ii  libevent-openssl-2.1-7:amd64                   2.1.12-stable-8                       amd64        Asynchronous event notification library (openssl)
ii  libevent-pthreads-2.1-7:amd64                  2.1.12-stable-8                       amd64        Asynchronous event notification library (pthreads)
ii  libevview3-3:amd64                             45~alpha-2                            amd64        Document (PostScript, PDF) rendering library - Gtk+ widgets
ii  libewf2:amd64                                  20140814-1                            amd64        library with support for Expert Witness Compression Format
ii  libexempi8:amd64                               2.6.4-1                               amd64        library to parse XMP metadata (Library)
ii  libexif12:amd64                                0.6.24-1+b1                           amd64        library to parse EXIF files
ii  libexiv2-27:amd64                              0.27.6-1                              amd64        EXIF/IPTC/XMP metadata manipulation library
ii  libexpat1:amd64                                2.5.0-2                               amd64        XML parsing C library - runtime library
ii  libexpat1-dev:amd64                            2.5.0-2                               amd64        XML parsing C library - development kit
ii  libext2fs2:amd64                               1.47.0-2+b1                           amd64        ext2/ext3/ext4 file system libraries
ii  libfaad2:amd64                                 2.10.1-1                              amd64        freeware Advanced Audio Decoder - runtime files
ii  libfakeroot:amd64                              1.32.1-1                              amd64        tool for simulating superuser privileges - shared libraries
ii  libfbclient2:amd64                             3.0.11.33637.ds4-2+b1                 amd64        Firebird client library
ii  libfcgi-bin                                    2.4.2-2                               amd64        FastCGI bridge from CGI
ii  libfcgi-perl                                   0.82+ds-2                             amd64        helper module for FastCGI
ii  libfcgi0ldbl:amd64                             2.4.2-2                               amd64        shared library of FastCGI
ii  libfdisk1:amd64                                2.39.2-1                              amd64        fdisk partitioning library
ii  libffado2:amd64                                2.4.7-1                               amd64        FFADO API
ii  libffi-dev:amd64                               3.4.4-1                               amd64        Foreign Function Interface library (development files)
ii  libffi8:amd64                                  3.4.4-1                               amd64        Foreign Function Interface library runtime
ii  libfftw3-double3:amd64                         3.3.10-1                              amd64        Library for computing Fast Fourier Transforms - Double precision
ii  libfido2-1:amd64                               1.13.0-1                              amd64        library for generating and verifying FIDO 2.0 objects
ii  libfile-basedir-perl                           0.09-2                                all          Perl module to use the freedesktop basedir specification
ii  libfile-desktopentry-perl                      0.22-3                                all          Perl module to handle freedesktop .desktop files
ii  libfile-fcntllock-perl                         0.22-4+b1                             amd64        Perl module for file locking with fcntl(2)
ii  libfile-listing-perl                           6.15-1                                all          module to parse directory listings
ii  libfile-mimeinfo-perl                          0.33-1                                all          Perl module to determine file types
ii  libflac12:amd64                                1.4.3+ds-2                            amd64        Free Lossless Audio Codec - runtime C library
ii  libflashrom1:amd64                             1.3.0-2.1                             amd64        Identify, read, write, erase, and verify BIOS/ROM/flash chips - library
ii  libflatpak0:amd64                              1.14.4-2                              amd64        Application deployment framework for desktop apps (library)
ii  libflite1:amd64                                2.2-6                                 amd64        Small run-time speech synthesis engine - shared libraries
ii  libfluidsynth3:amd64                           2.3.3-2.1                             amd64        Real-time MIDI software synthesizer (runtime library)
ii  libfmt9:amd64                                  9.1.0+ds1-2                           amd64        fast type-safe C++ formatting library -- library
ii  libfont-afm-perl                               1.20-4                                all          Perl interface to Adobe Font Metrics files
ii  libfontbox-java                                1:1.8.16-4                            all          Java font library
ii  libfontconfig1:amd64                           2.14.2-5                              amd64        generic font configuration library - runtime
ii  libfontenc1:amd64                              1:1.1.4-1                             amd64        X11 font encoding library
ii  libfreeaptx0:amd64                             0.1.1-2                               amd64        Free implementation of aptX
ii  libfreerdp-client2-2:amd64                     2.10.0+dfsg1-1.1                      amd64        Free Remote Desktop Protocol library (client library)
ii  libfreerdp-server2-2:amd64                     2.10.0+dfsg1-1.1                      amd64        Free Remote Desktop Protocol library (server library)
ii  libfreerdp2-2:amd64                            2.10.0+dfsg1-1.1                      amd64        Free Remote Desktop Protocol library (core library)
ii  libfreetype6:amd64                             2.13.2+dfsg-1                         amd64        FreeType 2 font engine, shared library files
ii  libfreexl1:amd64                               2.0.0-1                               amd64        library for direct reading of Microsoft Excel spreadsheets
ii  libfribidi0:amd64                              1.0.13-3                              amd64        Free Implementation of the Unicode BiDi algorithm
ii  libfstrm0:amd64                                0.6.1-1                               amd64        Frame Streams (fstrm) library
ii  libfsverity0:amd64                             1.5-1.1                               amd64        Shared library for fs-verity
ii  libftdi1-2:amd64                               1.5-6+b2                              amd64        C Library to control and program the FTDI USB controllers
ii  libfuse2:amd64                                 2.9.9-6+b1                            amd64        Filesystem in Userspace (library)
ii  libfuse3-3:amd64                               3.14.0-4                              amd64        Filesystem in Userspace (library) (3.x version)
ii  libfwupd2:amd64                                1.9.4-2                               amd64        Firmware update daemon library
ii  libfyba0:amd64                                 4.1.1-8                               amd64        FYBA library to read and write Norwegian geodata standard format SOSI
ii  libgail-common:amd64                           2.24.33-2                             amd64        GNOME Accessibility Implementation Library -- common modules
ii  libgail18:amd64                                2.24.33-2                             amd64        GNOME Accessibility Implementation Library -- shared libraries
ii  libgav1-1:amd64                                0.18.0-1+b1                           amd64        AV1 decoder developed by Google -- runtime library
ii  libgbm1:amd64                                  23.1.7-1                              amd64        generic buffer management API -- runtime
ii  libgc1:amd64                                   1:8.2.4-1                             amd64        conservative garbage collector for C and C++
ii  libgcab-1.0-0:amd64                            1.6-1                                 amd64        Microsoft Cabinet file manipulation library
ii  libgcc-13-dev:amd64                            13.2.0-2                              amd64        GCC support library (development files)
ii  libgcc-s1:amd64                                13.2.0-2                              amd64        GCC support library
ii  libgck-1-0:amd64                               3.41.1-3                              amd64        Glib wrapper library for PKCS#11 - runtime
ii  libgcr-base-3-1:amd64                          3.41.1-3                              amd64        Library for Crypto related tasks
ii  libgcr-ui-3-1:amd64                            3.41.1-3                              amd64        Library for Crypto UI related tasks
ii  libgcrypt20:amd64                              1.10.2-2                              amd64        LGPL Crypto library - runtime library
ii  libgd3:amd64                                   2.3.3-9                               amd64        GD Graphics Library
ii  libgdal33                                      3.7.1+dfsg-1+b2                       amd64        Geospatial Data Abstraction Library
ii  libgdata-common                                0.18.1-3                              all          Library for accessing GData webservices - common data files
ii  libgdata22:amd64                               0.18.1-3                              amd64        Library for accessing GData webservices - shared libraries
ii  libgdbm-compat4:amd64                          1.23-3                                amd64        GNU dbm database routines (legacy support runtime version) 
ii  libgdbm6:amd64                                 1.23-3                                amd64        GNU dbm database routines (runtime version) 
ii  libgdk-pixbuf-2.0-0:amd64                      2.42.10+dfsg-1+b1                     amd64        GDK Pixbuf library
ii  libgdk-pixbuf2.0-bin                           2.42.10+dfsg-1+b1                     amd64        GDK Pixbuf library (thumbnailer)
ii  libgdk-pixbuf2.0-common                        2.42.10+dfsg-1                        all          GDK Pixbuf library - data files
ii  libgdm1                                        44.1-2                                amd64        GNOME Display Manager (shared library)
ii  libgee-0.8-2:amd64                             0.20.6-1                              amd64        GObject based collection and utility library
ii  libgeoclue-2-0:amd64                           2.7.0-3                               amd64        convenience library to interact with geoinformation service
ii  libgeocode-glib-2-0:amd64                      3.26.3-6                              amd64        geocoding and reverse geocoding GLib library using Nominatim
ii  libgeoip1:amd64                                1.6.12-11                             amd64        non-DNS IP-to-country resolver library
ii  libgeos-c1v5:amd64                             3.12.0-1                              amd64        Geometry engine for Geographic Information Systems - C Library
ii  libgeos3.12.0:amd64                            3.12.0-1                              amd64        Geometry engine for Geographic Information Systems - C++ Library
ii  libgeotiff5:amd64                              1.7.1-3                               amd64        GeoTIFF (geografic enabled TIFF) library -- run-time files
ii  libges-1.0-0                                   1.22.4-1                              amd64        GStreamer editing services (shared library)
ii  libgexiv2-2:amd64                              0.14.2-2                              amd64        GObject-based wrapper around the Exiv2 library
ii  libgfapi0:amd64                                10.3-5                                amd64        GlusterFS gfapi shared library
ii  libgfortran5:amd64                             13.2.0-2                              amd64        Runtime library for GNU Fortran applications
ii  libgfrpc0:amd64                                10.3-5                                amd64        GlusterFS libgfrpc shared library
ii  libgfxdr0:amd64                                10.3-5                                amd64        GlusterFS libgfxdr shared library
ii  libgif7:amd64                                  5.2.1-2.5                             amd64        library for GIF images (library)
ii  libgirepository-1.0-1:amd64                    1.76.1-5                              amd64        Library for handling GObject introspection data (runtime library)
ii  libgjs0g:amd64                                 1.76.2-4                              amd64        Mozilla-based javascript bindings for the GNOME platform
ii  libgl-dev:amd64                                1.6.0-1                               amd64        Vendor neutral GL dispatch library -- GL development files
ii  libgl1:amd64                                   1.6.0-1                               amd64        Vendor neutral GL dispatch library -- legacy GL support
ii  libgl1-mesa-dev:amd64                          23.1.7-1                              amd64        transitional dummy package
ii  libgl1-mesa-dri:amd64                          23.1.7-1                              amd64        free implementation of the OpenGL API -- DRI modules
ii  libglapi-mesa:amd64                            23.1.7-1                              amd64        free implementation of the GL API -- shared library
ii  libgles-dev:amd64                              1.6.0-1                               amd64        Vendor neutral GL dispatch library -- GLES development files
ii  libgles1:amd64                                 1.6.0-1                               amd64        Vendor neutral GL dispatch library -- GLESv1 support
ii  libgles2:amd64                                 1.6.0-1                               amd64        Vendor neutral GL dispatch library -- GLESv2 support
ii  libglib2.0-0:amd64                             2.77.2-1                              amd64        GLib library of C routines
ii  libglib2.0-bin                                 2.77.2-1                              amd64        Programs for the GLib library
ii  libglib2.0-data                                2.77.2-1                              all          Common files for GLib library
ii  libglibmm-2.4-1v5:amd64                        2.66.6-2                              amd64        C++ wrapper for the GLib toolkit (shared libraries)
ii  libglu1-mesa:amd64                             9.0.2-1.1                             amd64        Mesa OpenGL utility library (GLU)
ii  libglu1-mesa-dev:amd64                         9.0.2-1.1                             amd64        Mesa OpenGL utility library -- development files
ii  libglusterfs0:amd64                            10.3-5                                amd64        GlusterFS shared library
ii  libglut-dev:amd64                              3.4.0-1                               amd64        OpenGL Utility Toolkit development files
ii  libglut3.12:amd64                              3.4.0-1                               amd64        OpenGL Utility Toolkit
ii  libglvnd-core-dev:amd64                        1.6.0-1                               amd64        Vendor neutral GL dispatch library -- core development files
ii  libglvnd-dev:amd64                             1.6.0-1                               amd64        Vendor neutral GL dispatch library -- development files
ii  libglvnd0:amd64                                1.6.0-1                               amd64        Vendor neutral GL dispatch library
ii  libglx-dev:amd64                               1.6.0-1                               amd64        Vendor neutral GL dispatch library -- GLX development files
ii  libglx-mesa0:amd64                             23.1.7-1                              amd64        free implementation of the OpenGL API -- GLX vendor library
ii  libglx0:amd64                                  1.6.0-1                               amd64        Vendor neutral GL dispatch library -- GLX support
ii  libgme0:amd64                                  0.6.3-6                               amd64        Playback library for video game music files - shared library
ii  libgmp-dev:amd64                               2:6.3.0+dfsg-2                        amd64        Multiprecision arithmetic library developers tools
ii  libgmp10:amd64                                 2:6.3.0+dfsg-2                        amd64        Multiprecision arithmetic library
ii  libgmpxx4ldbl:amd64                            2:6.3.0+dfsg-2                        amd64        Multiprecision arithmetic library (C++ bindings)
ii  libgnome-autoar-0-0:amd64                      0.4.4-2                               amd64        Archives integration support for GNOME
ii  libgnome-bg-4-2:amd64                          44.0-2                                amd64        Utility library for background images - runtime files
ii  libgnome-bluetooth-3.0-13:amd64                42.6-1                                amd64        GNOME Bluetooth 3 support library
ii  libgnome-bluetooth-ui-3.0-13:amd64             42.6-1                                amd64        GNOME Bluetooth 3 UI support library
ii  libgnome-desktop-3-20:amd64                    44.0-2                                amd64        Utility library for the GNOME desktop - GTK 3 version
ii  libgnome-desktop-4-2:amd64                     44.0-2                                amd64        Utility library for the GNOME desktop - runtime files
ii  libgnome-menu-3-0:amd64                        3.36.0-1.1                            amd64        GNOME implementation of the freedesktop menu specification
ii  libgnome-rr-4-2:amd64                          44.0-2                                amd64        Utility library for display information - runtime files
ii  libgnomekbd-common                             3.28.1-1                              all          GNOME library to manage keyboard configuration - common files
ii  libgnomekbd8:amd64                             3.28.1-1                              amd64        GNOME library to manage keyboard configuration - shared library
ii  libgnutls-dane0:amd64                          3.8.1-4+b1                            amd64        GNU TLS library - DANE security support
ii  libgnutls30:amd64                              3.8.1-4+b1                            amd64        GNU TLS library - main runtime library
ii  libgoa-1.0-0b:amd64                            3.48.0-2                              amd64        library for GNOME Online Accounts
ii  libgoa-1.0-common                              3.48.0-2                              all          library for GNOME Online Accounts - common files
ii  libgoa-backend-1.0-1:amd64                     3.48.0-2                              amd64        backend library for GNOME Online Accounts
ii  libgom-1.0-0:amd64                             0.4-1                                 amd64        Object mapper from GObjects to SQLite
ii  libgomp1:amd64                                 13.2.0-2                              amd64        GCC OpenMP (GOMP) support library
ii  libgpg-error0:amd64                            1.47-2                                amd64        GnuPG development runtime library
ii  libgpgme11:amd64                               1.18.0-3+b1                           amd64        GPGME - GnuPG Made Easy (library)
ii  libgphoto2-6:amd64                             2.5.30-1                              amd64        gphoto2 digital camera library
ii  libgphoto2-l10n                                2.5.30-1                              all          gphoto2 digital camera library - localized messages
ii  libgphoto2-port12:amd64                        2.5.30-1                              amd64        gphoto2 digital camera port library
ii  libgpm2:amd64                                  1.20.7-10+b1                          amd64        General Purpose Mouse - shared library
ii  libgprofng0:amd64                              2.41-5                                amd64        GNU Next Generation profiler (runtime library)
ii  libgraphene-1.0-0:amd64                        1.10.8-1                              amd64        library of graphic data types
ii  libgraphite2-3:amd64                           1.3.14-1                              amd64        Font rendering engine for Complex Scripts -- library
ii  libgrilo-0.3-0:amd64                           0.3.15-1.1                            amd64        Framework for discovering and browsing media - Shared libraries
ii  libgs-common                                   10.01.2~dfsg-1                        all          interpreter for the PostScript language and for PDF - ICC profiles
ii  libgs10:amd64                                  10.01.2~dfsg-1                        amd64        interpreter for the PostScript language and for PDF - Library
ii  libgs10-common                                 10.01.2~dfsg-1                        all          interpreter for the PostScript language and for PDF - common files
ii  libgsf-1-114:amd64                             1.14.50-1                             amd64        Structured File Library - runtime version
ii  libgsf-1-common                                1.14.50-1                             all          Structured File Library - common files
ii  libgsm1:amd64                                  1.0.22-1                              amd64        Shared libraries for GSM speech compressor
ii  libgsound0:amd64                               1.0.3-2                               amd64        small library for playing system sounds
ii  libgspell-1-2:amd64                            1.12.2-1                              amd64        spell-checking library for GTK+ applications
ii  libgspell-1-common                             1.12.2-1                              all          libgspell architecture-independent files
ii  libgssapi-krb5-2:amd64                         1.20.1-3                              amd64        MIT Kerberos runtime libraries - krb5 GSS-API Mechanism
ii  libgssdp-1.6-0:amd64                           1.6.2-2                               amd64        GObject-based library for SSDP
ii  libgstreamer-gl1.0-0:amd64                     1.22.5-1                              amd64        GStreamer GL libraries
ii  libgstreamer-plugins-bad1.0-0:amd64            1.22.4-1                              amd64        GStreamer libraries from the "bad" set
ii  libgstreamer-plugins-base1.0-0:amd64           1.22.5-1                              amd64        GStreamer libraries from the "base" set
ii  libgstreamer1.0-0:amd64                        1.22.5-1                              amd64        Core GStreamer libraries and elements
ii  libgtk-3-0:amd64                               3.24.38-2                             amd64        GTK graphical user interface library
ii  libgtk-3-bin                                   3.24.38-2                             amd64        programs for the GTK graphical user interface library
ii  libgtk-3-common                                3.24.38-2                             all          common files for the GTK graphical user interface library
ii  libgtk-4-1:amd64                               4.10.5+ds-3                           amd64        GTK graphical user interface library
ii  libgtk-4-bin                                   4.10.5+ds-3                           amd64        programs for the GTK graphical user interface library
ii  libgtk-4-common                                4.10.5+ds-3                           all          common files for the GTK graphical user interface library
ii  libgtk-4-media-gstreamer                       4.10.5+ds-3                           amd64        GStreamer media backend for the GTK graphical user interface library
ii  libgtk2.0-0:amd64                              2.24.33-2                             amd64        GTK graphical user interface library - old version
ii  libgtk2.0-bin                                  2.24.33-2                             amd64        programs for the GTK graphical user interface library
ii  libgtk2.0-common                               2.24.33-2                             all          common files for the GTK graphical user interface library
ii  libgtkmm-3.0-1v5:amd64                         3.24.8-2                              amd64        C++ wrappers for GTK+ (shared libraries)
ii  libgtksourceview-3.0-1:amd64                   3.24.11-2+b1                          amd64        shared libraries for the GTK+ syntax highlighting widget
ii  libgtksourceview-3.0-common                    3.24.11-2                             all          common files for the GTK+ syntax highlighting widget
ii  libgtksourceview-4-0:amd64                     4.8.4-4                               amd64        shared libraries for the GTK+ syntax highlighting widget
ii  libgtksourceview-4-common                      4.8.4-4                               all          common files for the GTK+ syntax highlighting widget
ii  libgtksourceview-5-0:amd64                     5.9.0-1                               amd64        shared libraries for the GTK 4 syntax highlighting widget
ii  libgtksourceview-5-common                      5.9.0-1                               all          common files for the GTK 4 syntax highlighting widget
ii  libgtksourceviewmm-3.0-0v5:amd64               3.18.0-4+b1                           amd64        C++ binding of GtkSourceView
ii  libgtop-2.0-11:amd64                           2.40.0-2                              amd64        gtop system monitoring library (shared)
ii  libgtop2-common                                2.40.0-2                              all          gtop system monitoring library (common)
ii  libgts-0.7-5:amd64                             0.7.6+darcs121130-5+b1                amd64        library to deal with 3D computational surface meshes
ii  libgts-bin                                     0.7.6+darcs121130-5+b1                amd64        utility binaries for libgts
ii  libgudev-1.0-0:amd64                           237-2                                 amd64        GObject-based wrapper library for libudev
ii  libgumbo1:amd64                                0.10.1+dfsg-5                         amd64        pure-C HTML5 parser
ii  libgupnp-1.6-0:amd64                           1.6.5-1                               amd64        GObject-based library for UPnP
ii  libgupnp-av-1.0-3                              0.14.1-1                              amd64        Audio/Visual utility library for GUPnP
ii  libgupnp-dlna-2.0-4                            0.12.0-3                              amd64        DLNA utility library for GUPnP
ii  libgupnp-igd-1.6-0:amd64                       1.6.0-3                               amd64        library to handle UPnP IGD port mapping
ii  libgusb2:amd64                                 0.4.5-1.1                             amd64        GLib wrapper around libusb1
ii  libguytools2                                   2.1.0-1                               amd64        libguytools is a small programming toolbox
ii  libgvc6                                        2.42.2-7+b3                           amd64        rich set of graph drawing tools - gvc library
ii  libgvm22:amd64                                 22.7.0-0kali1                         amd64        remote network security auditor - shared libraries
ii  libgvpr2:amd64                                 2.42.2-7+b3                           amd64        rich set of graph drawing tools - gvpr library
ii  libgweather-4-0:amd64                          4.3.2-1                               amd64        GWeather shared library
ii  libgweather-4-common                           4.3.2-1                               all          GWeather common files
ii  libgxps2:amd64                                 0.3.2-3                               amd64        handling and rendering XPS documents (library)
ii  libhandy-1-0:amd64                             1.8.2-2                               amd64        Library with GTK widgets for mobile phones
ii  libharfbuzz-icu0:amd64                         8.0.1-1                               amd64        OpenType text shaping engine ICU backend
ii  libharfbuzz0b:amd64                            8.0.1-1                               amd64        OpenType text shaping engine (shared library)
ii  libhashkit2:amd64                              1.1.4-1                               amd64        libmemcached hashing functions and algorithms
ii  libhavege2:amd64                               1.9.14-1+b1                           amd64        entropy source using the HAVEGE algorithm - shared library
ii  libhdf4-0-alt                                  4.2.16-3                              amd64        Hierarchical Data Format library (without NetCDF)
ii  libhdf5-103-1:amd64                            1.10.10+repack-2                      amd64        HDF5 C runtime files - serial version
ii  libhdf5-hl-100:amd64                           1.10.10+repack-2                      amd64        HDF5 High Level runtime files - serial version
ii  libheif-plugin-aomenc:amd64                    1.16.2-2                              amd64        ISO/IEC 23008-12:2017 HEIF file format decoder - aomenc plugin
ii  libheif-plugin-dav1d:amd64                     1.16.2-2                              amd64        ISO/IEC 23008-12:2017 HEIF file format decoder - dav1d plugin
ii  libheif-plugin-libde265:amd64                  1.16.2-2                              amd64        ISO/IEC 23008-12:2017 HEIF file format decoder - libde265 plugin
ii  libheif-plugin-x265:amd64                      1.16.2-2                              amd64        ISO/IEC 23008-12:2017 HEIF file format decoder - x265 plugin
ii  libheif1:amd64                                 1.16.2-2                              amd64        ISO/IEC 23008-12:2017 HEIF file format decoder - shared library
ii  libhiredis0.14:amd64                           0.14.1-4                              amd64        minimalistic C client library for Redis
ii  libhogweed6:amd64                              3.9.1-2                               amd64        low level cryptographic library (public-key cryptos)
ii  libhtml-form-perl                              6.11-1                                all          module that represents an HTML form element
ii  libhtml-format-perl                            2.16-2                                all          module for transforming HTML into various formats
ii  libhtml-parser-perl:amd64                      3.81-1                                amd64        collection of modules that parse HTML text documents
ii  libhtml-tagset-perl                            3.20-6                                all          data tables pertaining to HTML
ii  libhtml-template-perl                          2.97-2                                all          module for using HTML templates with Perl
ii  libhtml-tree-perl                              5.07-3                                all          Perl module to represent and create HTML syntax trees
ii  libhttp-cookies-perl                           6.10-1                                all          HTTP cookie jars
ii  libhttp-daemon-perl                            6.16-1                                all          simple http server class
ii  libhttp-date-perl                              6.05-2                                all          module of date conversion routines
ii  libhttp-dav-perl                               0.49-3                                all          WebDAV client library for Perl, and "dave" CLI client
ii  libhttp-message-perl                           6.44-2                                all          perl interface to HTTP style messages
ii  libhttp-negotiate-perl                         6.01-2                                all          implementation of content negotiation
ii  libhunspell-1.7-0:amd64                        1.7.2+really1.7.2-10                  amd64        spell checker and morphological analyzer (shared library)
ii  libhwasan0:amd64                               13.2.0-2                              amd64        AddressSanitizer -- a fast memory error detector
ii  libhwloc-plugins:amd64                         2.9.2-1                               amd64        Hierarchical view of the machine - plugins
ii  libhwloc15:amd64                               2.9.2-1                               amd64        Hierarchical view of the machine - shared libs
ii  libhwy1:amd64                                  1.0.7-2                               amd64        Efficient and performance-portable SIMD wrapper (runtime files)
ii  libhyphen0:amd64                               2.8.8-7                               amd64        ALTLinux hyphenation library - shared library
ii  libi2c0:amd64                                  4.3-4                                 amd64        userspace I2C programming library
ii  libibus-1.0-5:amd64                            1.5.29~rc1-1                          amd64        Intelligent Input Bus - shared library
ii  libibverbs1:amd64                              47.0-1                                amd64        Library for direct userspace use of RDMA (InfiniBand/iWARP)
ii  libical3:amd64                                 3.0.16-1+b1                           amd64        iCalendar library implementation in C (runtime)
ii  libice-dev:amd64                               2:1.0.10-1                            amd64        X11 Inter-Client Exchange library (development headers)
ii  libice6:amd64                                  2:1.0.10-1                            amd64        X11 Inter-Client Exchange library
ii  libicu-dev:amd64                               72.1-3                                amd64        Development files for International Components for Unicode
ii  libicu72:amd64                                 72.1-3                                amd64        International Components for Unicode
ii  libidn12:amd64                                 1.41-1                                amd64        GNU Libidn library, implementation of IETF IDN specifications
ii  libidn2-0:amd64                                2.3.4-1+b1                            amd64        Internationalized domain names (IDNA2008/TR46) library
ii  libiec61883-0:amd64                            1.2.0-6+b1                            amd64        partial implementation of IEC 61883 (shared lib)
ii  libieee1284-3:amd64                            0.2.11-14                             amd64        cross-platform library for parallel port access
ii  libigdgmm12:amd64                              22.3.9+ds1-1                          amd64        Intel Graphics Memory Management Library -- shared library
ii  libijs-0.35:amd64                              0.35-15.1                             amd64        IJS raster image transport protocol: shared library
ii  libimage-exiftool-perl                         12.65+dfsg-1                          all          library and program to read and write meta information in multimedia files
ii  libimagequant0:amd64                           2.17.0-1                              amd64        palette quantization library
ii  libimath-3-1-29:amd64                          3.1.9-2                               amd64        Utility libraries from ASF used by OpenEXR - runtime
ii  libimobiledevice6:amd64                        1.3.0-7                               amd64        Library for communicating with iPhone and other Apple devices
ii  libiniparser1:amd64                            4.1-7                                 amd64        runtime library for the iniParser INI file reader/writer
ii  libinput-bin                                   1.23.0-2                              amd64        input device management and event handling library - udev quirks
ii  libinput10:amd64                               1.23.0-2                              amd64        input device management and event handling library - shared library
ii  libinstpatch-1.0-2:amd64                       1.1.6-1                               amd64        MIDI instrument editing library
ii  libio-compress-brotli-perl                     0.004001-2                            amd64        modules to read/write Brotli buffers/streams
ii  libio-html-perl                                1.004-3                               all          open an HTML file with automatic charset detection
ii  libio-multiplex-perl                           1.16-3                                all          object-oriented interface to select() for Perl
ii  libio-socket-inet6-perl                        2.73-1                                all          object interface for AF_INET6 domain sockets
ii  libio-socket-ssl-perl                          2.083-1                               all          Perl module implementing object oriented interface to SSL sockets
ii  libio-stringy-perl                             2.111-3                               all          modules for I/O on in-core objects (strings/arrays)
ii  libip4tc2:amd64                                1.8.9-2                               amd64        netfilter libip4tc library
ii  libip6tc2:amd64                                1.8.9-2                               amd64        netfilter libip6tc library
ii  libipc-shareable-perl                          1.13-1                                all          module to access IPC shared memory segments through perl
ii  libipc-system-simple-perl                      1.30-2                                all          Perl module to run commands simply, with detailed diagnostics
ii  libiptcdata0                                   1.0.5-2.3                             amd64        Library to parse IPTC metadata
ii  libisl23:amd64                                 0.26-3                                amd64        manipulating sets and relations of integer points bounded by linear constraints
ii  libitm1:amd64                                  13.2.0-2                              amd64        GNU Transactional Memory Library
ii  libiw30:amd64                                  30~pre9-14                            amd64        Wireless tools - library
ii  libjack-jackd2-0:amd64                         1.9.21~dfsg-3                         amd64        JACK Audio Connection Kit (libraries)
ii  libjansson4:amd64                              2.14-2                                amd64        C library for encoding, decoding and manipulating JSON data
ii  libjavascriptcoregtk-4.0-18:amd64              2.40.5-1                              amd64        JavaScript engine library from WebKitGTK
ii  libjavascriptcoregtk-4.1-0:amd64               2.40.5-1                              amd64        JavaScript engine library from WebKitGTK
ii  libjaylink0:amd64                              0.3.1-1                               amd64        library for interacting with J-Link programmers
ii  libjbig0:amd64                                 2.1-6.1                               amd64        JBIGkit libraries
ii  libjbig2dec0:amd64                             0.19-3                                amd64        JBIG2 decoder library - shared libraries
ii  libjcat1:amd64                                 0.1.9-1                               amd64        JSON catalog library
ii  libjcode-pm-perl                               2.06-1.1                              amd64        Perl extension interface to convert Japanese text
ii  libjemalloc2:amd64                             5.3.0-2                               amd64        general-purpose scalable concurrent malloc(3) implementation
ii  libjim0.82:amd64                               0.82-4                                amd64        small-footprint implementation of Tcl - shared library
ii  libjpeg-turbo-progs                            1:2.1.5-2                             amd64        Programs for manipulating JPEG files
ii  libjpeg62-turbo:amd64                          1:2.1.5-2                             amd64        libjpeg-turbo JPEG runtime library
ii  libjq1:amd64                                   1.6-3                                 amd64        lightweight and flexible command-line JSON processor - shared library
ii  libjs-jquery                                   3.6.1+dfsg+~3.5.14-1                  all          JavaScript library for dynamic web applications
ii  libjs-jquery-ui                                1.13.2+dfsg-1                         all          JavaScript UI library for dynamic web applications
ii  libjs-skeleton                                 2.0.4-2                               all          Minimalistic CSS boilerplate framework
ii  libjs-sphinxdoc                                5.3.0-7                               all          JavaScript support for Sphinx documentation
ii  libjs-underscore                               1.13.4~dfsg+~1.11.4-3                 all          JavaScript's functional programming helper library
ii  libjson-c5:amd64                               0.17-1                                amd64        JSON manipulation library - shared library
ii  libjson-glib-1.0-0:amd64                       1.6.6-1                               amd64        GLib JSON manipulation library
ii  libjson-glib-1.0-common                        1.6.6-1                               all          GLib JSON manipulation library (common files)
ii  libjson-perl                                   4.10000-1                             all          module for manipulating JSON-formatted data
ii  libjson-xs-perl                                4.030-2+b1                            amd64        module for manipulating JSON-formatted data (C/XS-accelerated)
ii  libjudydebian1                                 1.0.5-5+b2                            amd64        C library for creating and accessing dynamic arrays
ii  libjxl0.7:amd64                                0.7.0-10                              amd64        JPEG XL Image Coding System - "JXL" (shared libraries)
ii  libjxr-tools                                   1.2~git20170615.f752187-5             amd64        JPEG-XR lib - command line apps
ii  libjxr0:amd64                                  1.2~git20170615.f752187-5             amd64        JPEG-XR lib - libraries
ii  libk5crypto3:amd64                             1.20.1-3                              amd64        MIT Kerberos runtime libraries - Crypto Library
ii  libkate1:amd64                                 0.4.1-11                              amd64        Codec for karaoke and text encapsulation
ii  libkeyutils1:amd64                             1.6.3-2                               amd64        Linux Key Management Utilities (library)
ii  libklibc:amd64                                 2.0.13-1                              amd64        minimal libc subset for use with initramfs
ii  libkmlbase1:amd64                              1.3.0-10                              amd64        Library to manipulate KML 2.2 OGC standard files - libkmlbase
ii  libkmldom1:amd64                               1.3.0-10                              amd64        Library to manipulate KML 2.2 OGC standard files - libkmldom
ii  libkmlengine1:amd64                            1.3.0-10                              amd64        Library to manipulate KML 2.2 OGC standard files - libkmlengine
ii  libkmod2:amd64                                 30+20230601-1                         amd64        libkmod shared library
ii  libkpathsea6:amd64                             2022.20220321.62855-8                 amd64        TeX Live: path search library for TeX (runtime part)
ii  libkrb5-3:amd64                                1.20.1-3                              amd64        MIT Kerberos runtime libraries
ii  libkrb5support0:amd64                          1.20.1-3                              amd64        MIT Kerberos runtime libraries - Support library
ii  libksba8:amd64                                 1.6.4-2                               amd64        X.509 and CMS support library
ii  liblab-gamut1:amd64                            2.42.2-7+b3                           amd64        rich set of graph drawing tools - liblab_gamut library
ii  liblapack3:amd64                               3.11.0-2                              amd64        Library of linear algebra routines 3 - shared version
ii  liblbfgsb0:amd64                               3.0+dfsg.4-1                          amd64        Limited-memory quasi-Newton bound-constrained optimization
ii  liblc3-1:amd64                                 1.0.3-4                               amd64        Low Complexity Communication Codec (shared library)
ii  liblcms2-2:amd64                               2.14-2                                amd64        Little CMS 2 color management library
ii  libldacbt-abr2:amd64                           2.0.2.3+git20200429+ed310a0-4         amd64        LDAC Bluetooth ABR library (shared library)
ii  libldacbt-enc2:amd64                           2.0.2.3+git20200429+ed310a0-4         amd64        LDAC Bluetooth encoder library (shared library)
ii  libldap-2.5-0:amd64                            2.5.13+dfsg-5                         amd64        OpenLDAP libraries
ii  libldap-common                                 2.5.13+dfsg-5                         all          OpenLDAP common files for libraries
ii  libldb2:amd64                                  2:2.7.2+samba4.18.6+dfsg-1            amd64        LDAP-like embedded database - shared library
ii  liblerc4:amd64                                 4.0.0+ds-3                            amd64        Limited Error Raster Compression library
ii  liblilv-0-0:amd64                              0.24.14-1                             amd64        library for simple use of LV2 plugins
ii  liblinear4:amd64                               2.3.0+dfsg-5                          amd64        Library for Large Linear Classification
ii  libllvm14:amd64                                1:14.0.6-13                           amd64        Modular compiler and toolchain technologies, runtime library
ii  libllvm15:amd64                                1:15.0.7-8                            amd64        Modular compiler and toolchain technologies, runtime library
ii  liblmdb0:amd64                                 0.9.31-1                              amd64        Lightning Memory-Mapped Database shared library
ii  liblocale-gettext-perl                         1.07-5                                amd64        module using libc functions for internationalization in Perl
ii  liblockfile-bin                                1.17-1+b1                             amd64        support binaries for and cli utilities based on liblockfile
ii  liblouis-data                                  3.26.0-1                              all          Braille translation library - data
ii  liblouis20:amd64                               3.26.0-1                              amd64        Braille translation library - shared libs
ii  liblqr-1-0:amd64                               0.4.2-2.1                             amd64        converts plain array images into multi-size representation
ii  liblrdf0:amd64                                 0.6.1-4                               amd64        library to manipulate RDF files describing LADSPA plugins
ii  liblsan0:amd64                                 13.2.0-2                              amd64        LeakSanitizer -- a memory leak detector (runtime)
ii  libltc11:amd64                                 1.3.2-1                               amd64        linear timecode library
ii  libltdl7:amd64                                 2.4.7-7                               amd64        System independent dlopen wrapper for GNU libtool
ii  liblua5.2-0:amd64                              5.2.4-3                               amd64        Shared library for the Lua interpreter version 5.2
ii  liblua5.3-0:amd64                              5.3.6-2                               amd64        Shared library for the Lua interpreter version 5.3
ii  liblua5.4-0:amd64                              5.4.4-3                               amd64        Shared library for the Lua interpreter version 5.4
ii  libluajit-5.1-2:amd64                          2.1.0~beta3+git20220320+dfsg-4.1      amd64        Just in time compiler for Lua - library version
ii  libluajit-5.1-common                           2.1.0~beta3+git20220320+dfsg-4.1      all          Just in time compiler for Lua - common files
ii  liblwp-mediatypes-perl                         6.04-2                                all          module to guess media type for a file or a URL
ii  liblwp-protocol-https-perl                     6.11-1                                all          HTTPS driver for LWP::UserAgent
ii  liblz4-1:amd64                                 1.9.4-1                               amd64        Fast LZ compression algorithm library - runtime
ii  liblz4-dev:amd64                               1.9.4-1                               amd64        Fast LZ compression algorithm library - development files
ii  liblzf1:amd64                                  3.6-4                                 amd64        Very small data compression library
ii  liblzma5:amd64                                 5.4.1-0.2                             amd64        XZ-format compression library
ii  liblzo2-2:amd64                                2.10-2                                amd64        data compression library
ii  libmagic-dev:amd64                             1:5.44-3                              amd64        Recognize the type of data in a file using "magic" numbers - development
ii  libmagic-mgc                                   1:5.44-3                              amd64        File type determination library using "magic" numbers (compiled magic file)
ii  libmagic1:amd64                                1:5.44-3                              amd64        Recognize the type of data in a file using "magic" numbers - library
ii  libmagickcore-6.q16-6:amd64                    8:6.9.11.60+dfsg-1.6                  amd64        low-level image manipulation library -- quantum depth Q16
ii  libmagickcore-6.q16-6-extra:amd64              8:6.9.11.60+dfsg-1.6                  amd64        low-level image manipulation library - extra codecs (Q16)
ii  libmagickwand-6.q16-6:amd64                    8:6.9.11.60+dfsg-1.6                  amd64        image manipulation library -- quantum depth Q16
ii  libmailtools-perl                              2.21-2                                all          modules to manipulate email in perl programs
ii  libmalcontent-0-0:amd64                        0.11.0-4                              amd64        library for parental control of applications
ii  libmalcontent-ui-1-1:amd64                     0.11.0-4                              amd64        library for parental control of applications - GTK+ widgets and dialogs
ii  libmanette-0.2-0:amd64                         0.2.6-3+b1                            amd64        Simple GObject game controller library
ii  libmariadb3:amd64                              1:10.11.4-1                           amd64        MariaDB database client library
ii  libmath-random-isaac-perl                      1.004-2                               all          Perl interface to the ISAAC PRNG Algorithm
ii  libmath-random-isaac-xs-perl                   1.004-3+b1                            amd64        Perl implementation of the ISAAC PRNG (C/XS Accelerated)
ii  libmaxminddb0:amd64                            1.7.1-1                               amd64        IP geolocation database library
ii  libmbedcrypto7:amd64                           2.28.4-1                              amd64        lightweight crypto and SSL/TLS library - crypto library
ii  libmbim-glib4:amd64                            1.28.4-2                              amd64        Support library to use the MBIM protocol
ii  libmbim-proxy                                  1.28.4-2                              amd64        Proxy to communicate with MBIM ports
ii  libmbim-utils                                  1.28.4-2                              amd64        Utilities to use the MBIM protocol from the command line
ii  libmd0:amd64                                   1.1.0-1                               amd64        message digest functions from BSD systems - shared library
ii  libmd4c0:amd64                                 0.4.8-1                               amd64        Markdown for C
ii  libmediaart-2.0-0:amd64                        1.9.6-1                               amd64        media art extraction and cache management library
ii  libmemcached11:amd64                           1.1.4-1                               amd64        C and C++ client library to the memcached server
ii  libmfx1:amd64                                  22.5.4-1                              amd64        Intel Media SDK -- shared library
ii  libmime-charset-perl                           1.013.1-2                             all          module for MIME character set information
ii  libminizip1:amd64                              1:1.2.13.dfsg-3                       amd64        compression library - minizip library
ii  libmjpegutils-2.1-0:amd64                      1:2.1.0+debian-7                      amd64        MJPEG capture/editing/replay and MPEG encoding toolset (library)
ii  libmm-glib0:amd64                              1.20.6-2                              amd64        D-Bus service for managing modems - shared libraries
ii  libmnl0:amd64                                  1.0.4-3                               amd64        minimalistic Netlink communication library
ii  libmodplug1:amd64                              1:0.8.9.0-3                           amd64        shared libraries for mod music based on ModPlug
ii  libmongoc-1.0-0                                1.24.4-1                              amd64        MongoDB C client library - runtime files
ii  libmosquitto1:amd64                            2.0.17-3                              amd64        MQTT version 5.0/3.1.1/3.1 client library
ii  libmotif-common                                2.3.8-3                               all          Motif - common files
ii  libmount1:amd64                                2.39.2-1                              amd64        device mounting library
ii  libmozjs-102-0:amd64                           102.15.0-1                            amd64        SpiderMonkey JavaScript library
ii  libmp3lame0:amd64                              3.100-6                               amd64        MP3 encoding library
ii  libmpc3:amd64                                  1.3.1-1                               amd64        multiple precision complex floating-point library
ii  libmpcdec6:amd64                               2:0.1~r495-2                          amd64        MusePack decoder - library
ii  libmpeg2-4:amd64                               0.5.1-9                               amd64        MPEG1 and MPEG2 video decoder library
ii  libmpeg2encpp-2.1-0:amd64                      1:2.1.0+debian-7                      amd64        MJPEG capture/editing/replay and MPEG encoding toolset (library)
ii  libmpfr6:amd64                                 4.2.0-1                               amd64        multiple precision floating-point computation
ii  libmpg123-0:amd64                              1.31.3-2                              amd64        MPEG layer 1/2/3 audio decoder (shared library)
ii  libmplex2-2.1-0:amd64                          1:2.1.0+debian-7                      amd64        MJPEG capture/editing/replay and MPEG encoding toolset (library)
ii  libmtdev1:amd64                                1.1.6-1                               amd64        Multitouch Protocol Translation Library - shared library
ii  libmtp-common                                  1.1.21-1                              all          Media Transfer Protocol (MTP) common files
ii  libmtp-runtime                                 1.1.21-1                              amd64        Media Transfer Protocol (MTP) runtime tools
ii  libmtp9:amd64                                  1.1.21-1                              amd64        Media Transfer Protocol (MTP) library
ii  libmujs3:amd64                                 1.3.3-2                               amd64        Lightweight JavaScript interpreter library
ii  libmutter-12-0:amd64                           44.1-1                                amd64        window manager library from the Mutter window manager
ii  libmysofa1:amd64                               1.3.1~dfsg0-1                         amd64        library to read HRTFs stored in the AES69-2015 SOFA format
ii  libnautilus-extension4:amd64                   44.2.1-2                              amd64        libraries for nautilus components - runtime version
ii  libncurses-dev:amd64                           6.4+20230625-2                        amd64        developer's libraries for ncurses
ii  libncurses6:amd64                              6.4+20230625-2                        amd64        shared libraries for terminal handling
ii  libncursesw6:amd64                             6.4+20230625-2                        amd64        shared libraries for terminal handling (wide character support)
ii  libndctl6:amd64                                77-2                                  amd64        Utility library for managing the libnvdimm subsystem
ii  libndp0:amd64                                  1.8-1                                 amd64        Library for Neighbor Discovery Protocol
ii  libneon27:amd64                                0.32.5-1                              amd64        HTTP and WebDAV client library
ii  libneon27-gnutls:amd64                         0.32.5-1                              amd64        HTTP and WebDAV client library (GnuTLS enabled)
ii  libnet-cidr-perl                               0.21-2                                all          module to manipulate IPv4/IPv6 netblocks in CIDR notation
ii  libnet-dbus-perl                               1.2.0-2                               amd64        Perl extension for the DBus bindings
ii  libnet-dns-perl                                1.39-2                                all          module to perform DNS queries
ii  libnet-dns-sec-perl                            1.20-1+b1                             amd64        DNSSEC extension to NET::DNS
ii  libnet-http-perl                               6.23-1                                all          module providing low-level HTTP connection client
ii  libnet-ip-perl                                 1.26-3                                all          Perl extension for manipulating IPv4/IPv6 addresses
ii  libnet-libidn2-perl                            1.01-2+b1                             amd64        Perl bindings for GNU Libidn2
ii  libnet-netmask-perl                            2.0002-2                              all          module to parse, manipulate and lookup IP network blocks
ii  libnet-server-perl                             2.014-1                               all          extensible, general perl server engine
ii  libnet-smtp-ssl-perl                           1.04-2                                all          Perl module providing SSL support to Net::SMTP
ii  libnet-snmp-perl                               6.0.1-7                               all          Script SNMP connections
ii  libnet-ssleay-perl:amd64                       1.92-2+b1                             amd64        Perl module for Secure Sockets Layer (SSL)
ii  libnet-whois-ip-perl                           1.19-3                                all          Lookup whois entries of IP addresses with Perl
ii  libnet1:amd64                                  1.1.6+dfsg-3.2                        amd64        library for the construction and handling of network packets
ii  libnetcdf19:amd64                              1:4.9.2-2                             amd64        Interface for scientific data access to large binary data
ii  libnetfilter-conntrack3:amd64                  1.0.9-5                               amd64        Netfilter netlink-conntrack library
ii  libnetfilter-queue1:amd64                      1.0.5-4                               amd64        Netfilter netlink-queue library
ii  libnettle8:amd64                               3.9.1-2                               amd64        low level cryptographic library (symmetric and one-way cryptos)
ii  libnewt0.52:amd64                              0.52.23-1+b1                          amd64        Not Erik's Windowing Toolkit - text mode windowing with slang
ii  libnfnetlink0:amd64                            1.0.2-2                               amd64        Netfilter netlink library
ii  libnfs14:amd64                                 5.0.2-1                               amd64        NFS client library (shared library)
ii  libnfsidmap1:amd64                             1:2.6.3-3                             amd64        NFS idmapping library
ii  libnftables1:amd64                             1.0.8-1                               amd64        Netfilter nftables high level userspace API library
ii  libnftnl11:amd64                               1.2.6-2                               amd64        Netfilter nftables userspace API library
ii  libnghttp2-14:amd64                            1.56.0-1                              amd64        library implementing HTTP/2 protocol (shared library)
ii  libnice10:amd64                                0.1.21-2                              amd64        ICE library (shared library)
ii  libnl-3-200:amd64                              3.7.0-0.2+b1                          amd64        library for dealing with netlink sockets
ii  libnl-genl-3-200:amd64                         3.7.0-0.2+b1                          amd64        library for dealing with netlink sockets - generic netlink
ii  libnl-route-3-200:amd64                        3.7.0-0.2+b1                          amd64        library for dealing with netlink sockets - route interface
ii  libnm0:amd64                                   1.44.0-1                              amd64        GObject-based client library for NetworkManager
ii  libnma-common                                  1.10.6-1                              all          NetworkManager GUI library - translations
ii  libnma-gtk4-0:amd64                            1.10.6-1                              amd64        NetworkManager GUI GTK4 library
ii  libnma0:amd64                                  1.10.6-1                              amd64        NetworkManager GUI library
ii  libnorm1:amd64                                 1.5.9+dfsg-2                          amd64        NACK-Oriented Reliable Multicast (NORM) library
ii  libnotify4:amd64                               0.8.2-1                               amd64        sends desktop notifications to a notification daemon
ii  libnpth0:amd64                                 1.6-3                                 amd64        replacement for GNU Pth using system threads
ii  libnsl-dev:amd64                               1.3.0-2                               amd64        libnsl development files
ii  libnsl2:amd64                                  1.3.0-2                               amd64        Public client interface for NIS(YP) and NIS+
ii  libnspr4:amd64                                 2:4.35-1.1                            amd64        NetScape Portable Runtime Library
ii  libnss-mdns:amd64                              0.15.1-3                              amd64        NSS module for Multicast DNS name resolution
ii  libnss-myhostname:amd64                        254.1-3                               amd64        nss module providing fallback resolution for the current hostname
ii  libnss-systemd:amd64                           254.1-3                               amd64        nss module providing dynamic user and group name resolution
ii  libnss3:amd64                                  2:3.92-1                              amd64        Network Security Service libraries
ii  libntfs-3g89:amd64                             1:2022.10.3-1+b1                      amd64        read/write NTFS driver for FUSE (runtime library)
ii  libnuma1:amd64                                 2.0.16-1                              amd64        Libraries for controlling NUMA policy
ii  libnumber-bytes-human-perl                     0.11-4                                all          module to convert byte count to human readable format and back
ii  libnvme1                                       1.5-2                                 amd64        NVMe management library (library)
ii  liboauth0:amd64                                1.0.3-5                               amd64        C library implementing OAuth Core 1.0a API (runtime)
ii  libobjc-13-dev:amd64                           13.2.0-2                              amd64        Runtime library for GNU Objective-C applications (development files)
ii  libobjc4:amd64                                 13.2.0-2                              amd64        Runtime library for GNU Objective-C applications
ii  libodbc2:amd64                                 2.3.12-1                              amd64        ODBC Driver Manager library for Unix
ii  libodbcinst2:amd64                             2.3.12-1                              amd64        Support library for accessing ODBC configuration files
ii  libogdi4.1                                     4.1.0+ds-6                            amd64        Open Geographic Datastore Interface Library -- library
ii  libogg0:amd64                                  1.3.5-3                               amd64        Ogg bitstream library
ii  libole-storage-lite-perl                       0.22-1                                all          simple class for OLE document interface
ii  libonig5:amd64                                 6.9.8-2                               amd64        regular expressions library
ii  libopenal-data                                 1:1.23.1-3                            all          Software implementation of the OpenAL audio API (data files)
ii  libopenal1:amd64                               1:1.23.1-3                            amd64        Software implementation of the OpenAL audio API (shared library)
ii  libopenblas-dev:amd64                          0.3.24+ds-1                           amd64        Optimized BLAS (linear algebra) library (dev, meta)
ii  libopenblas-pthread-dev:amd64                  0.3.24+ds-1                           amd64        Optimized BLAS (linear algebra) library (dev, pthread)
ii  libopenblas0:amd64                             0.3.24+ds-1                           amd64        Optimized BLAS (linear algebra) library (meta)
ii  libopenblas0-pthread:amd64                     0.3.24+ds-1                           amd64        Optimized BLAS (linear algebra) library (shared lib, pthread)
ii  libopencore-amrnb0:amd64                       0.1.6-1                               amd64        Adaptive Multi Rate speech codec - shared library
ii  libopencore-amrwb0:amd64                       0.1.6-1                               amd64        Adaptive Multi-Rate - Wideband speech codec - shared library
ii  libopenexr-3-1-30:amd64                        3.1.5-5.1                             amd64        runtime files for the OpenEXR image library
ii  libopengl-dev:amd64                            1.6.0-1                               amd64        Vendor neutral GL dispatch library -- OpenGL development files
ii  libopengl0:amd64                               1.6.0-1                               amd64        Vendor neutral GL dispatch library -- OpenGL support
ii  libopenh264-7:amd64                            2.3.1+dfsg-3                          amd64        OpenH264 Video Codec
ii  libopenjp2-7:amd64                             2.5.0-2                               amd64        JPEG 2000 image compression/decompression library
ii  libopenmpt0:amd64                              0.7.3-1                               amd64        module music library based on OpenMPT -- shared library
ii  libopenni2-0:amd64                             2.2.0.33+dfsg-15+b1                   amd64        framework for sensor-based 'Natural Interaction'
ii  libopus0:amd64                                 1.4-1                                 amd64        Opus codec runtime library
ii  libopusfile0:amd64                             0.12-4                                amd64        High-level API for basic manipulation of Ogg Opus audio streams
ii  liborc-0.4-0:amd64                             1:0.4.34-3                            amd64        Library of Optimized Inner Loops Runtime Compiler
ii  libosinfo-1.0-0:amd64                          1.10.0-2                              amd64        Library for managing information about operating systems and hypervisors
ii  libosinfo-l10n                                 1.10.0-2                              all          Translations for libosinfo
ii  libostree-1-1:amd64                            2023.6-2                              amd64        content-addressed filesystem for operating system binaries (library)
ii  libout123-0:amd64                              1.31.3-2                              amd64        MPEG layer 1/2/3 audio decoder (libout123 shared library)
ii  libp11-kit0:amd64                              0.25.0-4                              amd64        library for loading and coordinating access to PKCS#11 modules - runtime
ii  libpaho-mqtt1.3:amd64                          1.3.12-1                              amd64        Eclipse Paho MQTT C client - shared libraries
ii  libpam-gnome-keyring:amd64                     42.1-1+b2                             amd64        PAM module to unlock the GNOME keyring upon login
ii  libpam-modules:amd64                           1.5.2-7                               amd64        Pluggable Authentication Modules for PAM
ii  libpam-modules-bin                             1.5.2-7                               amd64        Pluggable Authentication Modules for PAM - helper binaries
ii  libpam-runtime                                 1.5.2-7                               all          Runtime support for the PAM library
ii  libpam-systemd:amd64                           254.1-3                               amd64        system and service manager - PAM module
ii  libpam0g:amd64                                 1.5.2-7                               amd64        Pluggable Authentication Modules library
ii  libpango-1.0-0:amd64                           1.51.0+ds-2                           amd64        Layout and rendering of internationalized text
ii  libpangocairo-1.0-0:amd64                      1.51.0+ds-2                           amd64        Layout and rendering of internationalized text
ii  libpangoft2-1.0-0:amd64                        1.51.0+ds-2                           amd64        Layout and rendering of internationalized text
ii  libpangomm-1.4-1v5:amd64                       2.46.3-1                              amd64        C++ Wrapper for pango (shared libraries)
ii  libpangoxft-1.0-0:amd64                        1.51.0+ds-2                           amd64        Layout and rendering of internationalized text
ii  libpaper-utils                                 1.1.29                                amd64        library for handling paper characteristics (utilities)
ii  libpaper1:amd64                                1.1.29                                amd64        library for handling paper characteristics
ii  libparse-recdescent-perl                       1.967015+dfsg-4                       all          Perl module to create and use recursive-descent parsers
ii  libparted-fs-resize0:amd64                     3.6-3                                 amd64        disk partition manipulator - shared FS resizing library
ii  libparted2:amd64                               3.6-3                                 amd64        disk partition manipulator - shared library
ii  libpathplan4:amd64                             2.42.2-7+b3                           amd64        rich set of graph drawing tools - pathplan library
ii  libpcap0.8:amd64                               1.10.4-4                              amd64        system interface for user-level packet capture
ii  libpcaudio0:amd64                              1.2-2                                 amd64        C API to different audio devices - shared library
ii  libpci3:amd64                                  1:3.10.0-2                            amd64        PCI utilities (shared library)
ii  libpciaccess0:amd64                            0.17-2                                amd64        Generic PCI access library for X
ii  libpcre2-16-0:amd64                            10.42-4                               amd64        New Perl Compatible Regular Expression Library - 16 bit runtime files
ii  libpcre2-8-0:amd64                             10.42-4                               amd64        New Perl Compatible Regular Expression Library- 8 bit runtime files
ii  libpcre3:amd64                                 2:8.39-15                             amd64        Old Perl 5 Compatible Regular Expression Library - runtime files
ii  libpcsclite1:amd64                             2.0.0-1                               amd64        Middleware to access a smart card using PC/SC (library)
ii  libpdfbox-java                                 1:1.8.16-4                            all          PDF library for Java
ii  libpeas-1.0-0:amd64                            1.36.0-2                              amd64        Application plugin library
ii  libpeas-common                                 1.36.0-2                              all          Application plugin library (common files)
ii  libperl4-corelibs-perl                         0.005-1                               all          libraries historically supplied with Perl 4
ii  libperl5.36:amd64                              5.36.0-7                              amd64        shared Perl library
ii  libpfm4:amd64                                  4.13.0+git15-gefd10fb-2               amd64        Library to program the performance monitoring events
ii  libpgm-5.3-0:amd64                             5.3.128~dfsg-2                        amd64        OpenPGM shared library
ii  libphonenumber8:amd64                          8.12.57+ds-4                          amd64        parsing/formatting/validating phone numbers
ii  libpipeline1:amd64                             1.5.7-1                               amd64        Unix process pipeline manipulation library
ii  libpipewire-0.3-0:amd64                        0.3.80-2                              amd64        libraries for the PipeWire multimedia server
ii  libpipewire-0.3-common                         0.3.80-2                              all          libraries for the PipeWire multimedia server - common files
ii  libpipewire-0.3-modules:amd64                  0.3.80-2                              amd64        libraries for the PipeWire multimedia server - modules
ii  libpixman-1-0:amd64                            0.42.2-1                              amd64        pixel-manipulation library for X and cairo
ii  libpkcs11-helper1:amd64                        1.29.0-2                              amd64        library that simplifies the interaction with PKCS#11
ii  libplacebo292:amd64                            6.292.1-1                             amd64        GPU-accelerated video/image rendering primitives (shared library)
ii  libplist3:amd64                                2.2.0-6+b2                            amd64        Library for handling Apple binary and XML property lists
ii  libplymouth5:amd64                             22.02.122-3                           amd64        graphical boot animation and logger - shared libraries
ii  libpmem1:amd64                                 1.13.1-1.1                            amd64        Persistent Memory low level support library, v1 runtime
ii  libpng16-16:amd64                              1.6.40-1                              amd64        PNG library - runtime (version 1.6)
ii  libpocketsphinx3:amd64                         0.8+5prealpha+1-15                    amd64        Speech recognition tool - front-end library
ii  libpocl2:amd64                                 4.0-2                                 amd64        Portable Computing Language library
ii  libpocl2-common                                4.0-2                                 all          common files for the pocl library
ii  libpod-parser-perl                             1.66-1                                all          modules for parsing/translating POD format documents
ii  libpolkit-agent-1-0:amd64                      123-1+kali1                           amd64        polkit Authentication Agent API
ii  libpolkit-gobject-1-0:amd64                    123-1+kali1                           amd64        polkit Authorization API
ii  libpoppler-glib8:amd64                         22.12.0-2+b1                          amd64        PDF rendering library (GLib-based shared library)
ii  libpoppler126:amd64                            22.12.0-2+b1                          amd64        PDF rendering library
ii  libpopt0:amd64                                 1.19+dfsg-1                           amd64        lib for parsing cmdline parameters
ii  libportal-gtk3-1:amd64                         0.6-4                                 amd64        Flatpak portal library for GTK 3 GUIs
ii  libportal-gtk4-1:amd64                         0.6-4                                 amd64        Flatpak portal library for GTK 4 GUIs
ii  libportal1:amd64                               0.6-4                                 amd64        Flatpak portal library - non-GUI part
ii  libportaudio2:amd64                            19.6.0-1.2                            amd64        Portable audio I/O - shared library
ii  libportmidi0:amd64                             1:217-6.1                             amd64        library for real-time MIDI input/output
ii  libpostproc57:amd64                            7:6.0-6                               amd64        FFmpeg library for post processing - runtime files
ii  libpotrace0:amd64                              1.16-2                                amd64        library for tracing bitmaps
ii  libpq5:amd64                                   15.4-1                                amd64        PostgreSQL C client library
ii  libproc2-0:amd64                               2:4.0.3-1                             amd64        library for accessing process information from /proc
ii  libproj25:amd64                                9.3.0-1                               amd64        Cartographic projection library
ii  libprotobuf-c1:amd64                           1.4.1-1+b1                            amd64        Protocol Buffers C shared library (protobuf-c)
ii  libprotobuf32:amd64                            3.21.12-7                             amd64        protocol buffers C++ library
ii  libproxy1-plugin-gsettings:amd64               0.4.18-1.2                            amd64        automatic proxy configuration management library (GSettings plugin)
ii  libproxy1-plugin-networkmanager:amd64          0.4.18-1.2                            amd64        automatic proxy configuration management library (Network Manager plugin)
ii  libproxy1-plugin-webkit:amd64                  0.4.18-1.2                            amd64        automatic proxy configuration management library (Webkit plugin)
ii  libproxy1v5:amd64                              0.4.18-1.2                            amd64        automatic proxy configuration management library (shared)
ii  libproxychains4:amd64                          4.16-3                                amd64        runtime shared library for proxychains-ng
ii  libpsl5:amd64                                  0.21.2-1+b1                           amd64        Library for Public Suffix List (shared libraries)
ii  libptexenc1:amd64                              2022.20220321.62855-8                 amd64        TeX Live: pTeX encoding library
ii  libpthread-stubs0-dev:amd64                    0.4-1                                 amd64        pthread stubs not provided by native libc, development files
ii  libpulse-mainloop-glib0:amd64                  16.1+dfsg1-2+b1                       amd64        PulseAudio client libraries (glib support)
ii  libpulse0:amd64                                16.1+dfsg1-2+b1                       amd64        PulseAudio client libraries
ii  libpwquality-common                            1.4.5-1                               all          library for password quality checking and generation (data files)
ii  libpwquality1:amd64                            1.4.5-1+b1                            amd64        library for password quality checking and generation
ii  libpython2-stdlib:amd64                        2.7.18-3                              amd64        interactive high-level object-oriented language (Python2)
ii  libpython2.7-minimal:amd64                     2.7.18-13.2                           amd64        Minimal subset of the Python language (version 2.7)
ii  libpython2.7-stdlib:amd64                      2.7.18-13.2                           amd64        Interactive high-level object-oriented language (standard library, version 2.7)
ii  libpython3-all-dev:amd64                       3.11.4-5+b1                           amd64        package depending on all supported Python 3 development packages
ii  libpython3-dev:amd64                           3.11.4-5+b1                           amd64        header files and a static library for Python (default)
ii  libpython3-stdlib:amd64                        3.11.4-5+b1                           amd64        interactive high-level object-oriented language (default python3 version)
ii  libpython3.11:amd64                            3.11.4-1                              amd64        Shared Python runtime library (version 3.11)
ii  libpython3.11-dev:amd64                        3.11.4-1                              amd64        Header files and a static library for Python (v3.11)
ii  libpython3.11-minimal:amd64                    3.11.4-1                              amd64        Minimal subset of the Python language (version 3.11)
ii  libpython3.11-stdlib:amd64                     3.11.4-1                              amd64        Interactive high-level object-oriented language (standard library, version 3.11)
ii  libqhull-r8.0:amd64                            2020.2-6                              amd64        calculate convex hulls and related structures (reentrant shared library)
ii  libqmi-glib5:amd64                             1.32.4-2                              amd64        Support library to use the Qualcomm MSM Interface (QMI) protocol
ii  libqmi-proxy                                   1.32.4-2                              amd64        Proxy to communicate with QMI ports
ii  libqmi-utils                                   1.32.4-2                              amd64        Utilities to use the QMI protocol from the command line
ii  libqrencode4:amd64                             4.1.1-1                               amd64        QR Code encoding library
ii  libqrtr-glib0:amd64                            1.2.2-1                               amd64        Support library to use the QRTR protocol
ii  libqscintilla2-qt5-15:amd64                    2.14.1+dfsg-1                         amd64        Qt5 port of the Scintilla source code editing widget
ii  libqscintilla2-qt5-l10n                        2.14.1+dfsg-1                         all          Scintilla source code editing widget for Qt5, translation files
ii  libqt5charts5:amd64                            5.15.10-2                             amd64        Qt charts shared library
ii  libqt5core5a:amd64                             5.15.10+dfsg-3                        amd64        Qt 5 core module
ii  libqt5dbus5:amd64                              5.15.10+dfsg-3                        amd64        Qt 5 D-Bus module
ii  libqt5designer5:amd64                          5.15.10-3                             amd64        Qt 5 designer module
ii  libqt5gui5:amd64                               5.15.10+dfsg-3                        amd64        Qt 5 GUI module
ii  libqt5help5:amd64                              5.15.10-3                             amd64        Qt 5 help module
ii  libqt5multimedia5:amd64                        5.15.10-2                             amd64        Qt 5 Multimedia module
ii  libqt5multimedia5-plugins:amd64                5.15.10-2                             amd64        Qt 5 Multimedia module plugins
ii  libqt5multimediagsttools5:amd64                5.15.10-2                             amd64        GStreamer tools for  Qt 5 Multimedia module
ii  libqt5multimediawidgets5:amd64                 5.15.10-2                             amd64        Qt 5 Multimedia Widgets module
ii  libqt5network5:amd64                           5.15.10+dfsg-3                        amd64        Qt 5 network module
ii  libqt5opengl5:amd64                            5.15.10+dfsg-3                        amd64        Qt 5 OpenGL module
ii  libqt5positioning5:amd64                       5.15.10+dfsg-3                        amd64        Qt Positioning module
ii  libqt5printsupport5:amd64                      5.15.10+dfsg-3                        amd64        Qt 5 print support module
ii  libqt5qml5:amd64                               5.15.10+dfsg-2                        amd64        Qt 5 QML module
ii  libqt5qmlmodels5:amd64                         5.15.10+dfsg-2                        amd64        Qt 5 QML Models library
ii  libqt5quick5:amd64                             5.15.10+dfsg-2                        amd64        Qt 5 Quick library
ii  libqt5sensors5:amd64                           5.15.10-2                             amd64        Qt Sensors module
ii  libqt5sql5:amd64                               5.15.10+dfsg-3                        amd64        Qt 5 SQL module
ii  libqt5sql5-sqlite:amd64                        5.15.10+dfsg-3                        amd64        Qt 5 SQLite 3 database driver
ii  libqt5svg5:amd64                               5.15.10-2                             amd64        Qt 5 SVG module
ii  libqt5test5:amd64                              5.15.10+dfsg-3                        amd64        Qt 5 test module
ii  libqt5waylandclient5:amd64                     5.15.10-2                             amd64        QtWayland client library
ii  libqt5waylandcompositor5:amd64                 5.15.10-2                             amd64        QtWayland compositor library
ii  libqt5webchannel5:amd64                        5.15.10-2                             amd64        Web communication library for Qt
ii  libqt5webkit5:amd64                            5.212.0~alpha4-33                     amd64        Web content engine library for Qt
ii  libqt5widgets5:amd64                           5.15.10+dfsg-3                        amd64        Qt 5 widgets module
ii  libqt5xml5:amd64                               5.15.10+dfsg-3                        amd64        Qt 5 XML module
ii  libqt6core6:amd64                              6.4.2+dfsg-18                         amd64        Qt 6 core module
ii  libqt6dbus6:amd64                              6.4.2+dfsg-18                         amd64        Qt 6 D-Bus module
ii  libqt6gui6:amd64                               6.4.2+dfsg-18                         amd64        Qt 6 GUI module
ii  libqt6network6:amd64                           6.4.2+dfsg-18                         amd64        Qt 6 network module
ii  libqt6opengl6:amd64                            6.4.2+dfsg-18                         amd64        Qt 6 OpenGL module
ii  libqt6openglwidgets6:amd64                     6.4.2+dfsg-18                         amd64        Qt 6 OpenGL widgets module
ii  libqt6printsupport6:amd64                      6.4.2+dfsg-18                         amd64        Qt 6 print support module
ii  libqt6qml6:amd64                               6.4.2+dfsg-3                          amd64        Qt 6 QML module
ii  libqt6qmlmodels6:amd64                         6.4.2+dfsg-3                          amd64        Qt 6 QML Models library
ii  libqt6quick6:amd64                             6.4.2+dfsg-3                          amd64        Qt 6 Quick library
ii  libqt6sql6:amd64                               6.4.2+dfsg-18                         amd64        Qt 6 SQL module
ii  libqt6sql6-sqlite:amd64                        6.4.2+dfsg-18                         amd64        Qt 6 SQLite 3 database driver
ii  libqt6test6:amd64                              6.4.2+dfsg-18                         amd64        Qt 6 test module
ii  libqt6waylandclient6:amd64                     6.4.2-3                               amd64        Qt 6 Wayland Client library
ii  libqt6waylandcompositor6:amd64                 6.4.2-3                               amd64        Qt 6 Wayland Compositor library
ii  libqt6waylandeglclienthwintegration6:amd64     6.4.2-3                               amd64        Qt 6 Wayland WaylandEglClientHwIntegration library
ii  libqt6waylandeglcompositorhwintegration6:amd64 6.4.2-3                               amd64        Qt 6 Wayland WaylandEglCompositorHwIntegration library
ii  libqt6widgets6:amd64                           6.4.2+dfsg-18                         amd64        Qt 6 widgets module
ii  libqt6wlshellintegration6:amd64                6.4.2-3                               amd64        Qt 6 Wayland ShellIntegration library
ii  libqt6xml6:amd64                               6.4.2+dfsg-18                         amd64        Qt 6 XML module
ii  libquadmath0:amd64                             13.2.0-2                              amd64        GCC Quad-Precision Math Library
ii  librabbitmq4:amd64                             0.11.0-1+b1                           amd64        AMQP client library written in C
ii  libradare2-5.0.0:amd64                         5.5.0+dfsg-1+b1                       amd64        libraries from the radare2 suite
ii  libradare2-common                              5.5.0+dfsg-1                          all          arch independent files from the radare2 suite
ii  libradare2-dev                                 5.5.0+dfsg-1+b1                       amd64        devel files from the radare2 suite
ii  libradcli4                                     1.2.11-1+b2                           amd64        Enhanced RADIUS client library
ii  librados2                                      16.2.11+ds-2                          amd64        RADOS distributed object store client library
ii  libraptor2-0:amd64                             2.0.16-3                              amd64        Raptor 2 RDF syntax library
ii  libraqm0:amd64                                 0.10.1-1                              amd64        Library for complex text layout
ii  librav1e0:amd64                                0.6.6-3                               amd64        Fastest and safest AV1 encoder - shared library
ii  libraw1394-11:amd64                            2.1.2-2                               amd64        library for direct access to IEEE 1394 bus (aka FireWire)
ii  librdmacm1:amd64                               47.0-1                                amd64        Library for managing RDMA connections
ii  libreadline8:amd64                             8.2-1.3                               amd64        GNU readline and history libraries, run-time libraries
ii  libregexp-assemble-perl                        0.38-2                                all          Perl module to merge several regular expressions
ii  libregexp-ipv6-perl                            0.03-3                                all          Regular expression for IPv6 addresses
ii  librest-1.0-0:amd64                            0.9.1-6                               amd64        REST service access library
ii  librist4:amd64                                 0.2.7+dfsg-1                          amd64        Reliable Internet Stream Transport -- shared library
ii  librpm9                                        4.18.0+dfsg-1+b1                      amd64        RPM shared library
ii  librpmbuild9                                   4.18.0+dfsg-1+b1                      amd64        RPM build shared library
ii  librpmio9                                      4.18.0+dfsg-1+b1                      amd64        RPM IO shared library
ii  librpmsign9                                    4.18.0+dfsg-1+b1                      amd64        RPM signing shared library
ii  librsvg2-2:amd64                               2.54.7+dfsg-2                         amd64        SAX-based renderer library for SVG files (runtime)
ii  librsvg2-common:amd64                          2.54.7+dfsg-2                         amd64        SAX-based renderer library for SVG files (extra runtime)
ii  librtlsdr0:amd64                               0.6.0-5                               amd64        Software defined radio receiver for Realtek RTL2832U (library)
ii  librtmp1:amd64                                 2.4+20151223.gitfa8646d.1-2+b2        amd64        toolkit for RTMP streams (shared library)
ii  librttopo1:amd64                               1.1.0-3                               amd64        Tuscany Region topology library
ii  librubberband2:amd64                           3.3.0+dfsg-2                          amd64        audio time-stretching and pitch-shifting library
ii  libruby:amd64                                  1:3.1                                 amd64        Libraries necessary to run Ruby
ii  libruby3.1:amd64                               3.1.2-7                               amd64        Libraries necessary to run Ruby 3.1
ii  librygel-core-2.8-0:amd64                      0.42.4-1                              amd64        GNOME UPnP/DLNA services - core library
ii  librygel-db-2.8-0:amd64                        0.42.4-1                              amd64        GNOME UPnP/DLNA services - db library
ii  librygel-renderer-2.8-0:amd64                  0.42.4-1                              amd64        GNOME UPnP/DLNA services - renderer library
ii  librygel-server-2.8-0:amd64                    0.42.4-1                              amd64        GNOME UPnP/DLNA services - server library
ii  libsamplerate0:amd64                           0.2.2-4                               amd64        Audio sample rate conversion library
ii  libsane-common                                 1.2.1-5                               all          API library for scanners -- documentation and support files
ii  libsane1:amd64                                 1.2.1-5                               amd64        API library for scanners
ii  libsasl2-2:amd64                               2.1.28+dfsg1-3                        amd64        Cyrus SASL - authentication abstraction library
ii  libsasl2-modules:amd64                         2.1.28+dfsg1-3                        amd64        Cyrus SASL - pluggable authentication modules
ii  libsasl2-modules-db:amd64                      2.1.28+dfsg1-3                        amd64        Cyrus SASL - pluggable authentication modules (DB)
ii  libsbc1:amd64                                  2.0-1                                 amd64        Sub Band CODEC library - runtime
ii  libsdl2-2.0-0:amd64                            2.28.3+dfsg-1                         amd64        Simple DirectMedia Layer
ii  libsdl2-image-2.0-0:amd64                      2.6.3+dfsg-2                          amd64        Image loading library for Simple DirectMedia Layer 2, libraries
ii  libsdl2-mixer-2.0-0:amd64                      2.6.3+dfsg-1                          amd64        Mixer library for Simple DirectMedia Layer 2, libraries
ii  libsdl2-ttf-2.0-0:amd64                        2.20.2+dfsg-1                         amd64        TrueType Font library for Simple DirectMedia Layer 2, libraries
ii  libseccomp2:amd64                              2.5.4-1+b3                            amd64        high level interface to Linux seccomp filter
ii  libsecret-1-0:amd64                            0.21.0-1                              amd64        Secret store
ii  libsecret-common                               0.21.0-1                              all          Secret store (common files)
ii  libselinux1:amd64                              3.5-1                                 amd64        SELinux runtime shared libraries
ii  libsemanage-common                             3.5-1                                 all          Common files for SELinux policy management libraries
ii  libsemanage2:amd64                             3.5-1                                 amd64        SELinux policy management library
ii  libsensors-config                              1:3.6.0-8                             all          lm-sensors configuration files
ii  libsensors5:amd64                              1:3.6.0-8                             amd64        library to read temperature/voltage/fan sensors
ii  libsepol2:amd64                                3.5-1                                 amd64        SELinux library for manipulating binary security policies
ii  libserd-0-0:amd64                              0.30.16-1                             amd64        lightweight RDF syntax library
ii  libserf-1-1:amd64                              1.3.10-1                              amd64        high-performance asynchronous HTTP client library
ii  libsframe1:amd64                               2.41-5                                amd64        Library to handle the SFrame format (runtime library)
ii  libshine3:amd64                                3.1.1-2                               amd64        Fixed-point MP3 encoding library - runtime files
ii  libshout3:amd64                                2.4.6-1+b1                            amd64        MP3/Ogg Vorbis broadcast streaming library
ii  libsidplay1v5:amd64                            1.36.60-1                             amd64        SID (MOS 6581) emulation library
ii  libsigc++-2.0-0v5:amd64                        2.12.0-1                              amd64        type-safe Signal Framework for C++ - runtime
ii  libsigsegv2:amd64                              2.14-1                                amd64        Library for handling page faults in a portable way
ii  libslang2:amd64                                2.3.3-3                               amd64        S-Lang programming library - runtime version
ii  libsm-dev:amd64                                2:1.2.3-1                             amd64        X11 Session Management library (development headers)
ii  libsm6:amd64                                   2:1.2.3-1                             amd64        X11 Session Management library
ii  libsmartcols1:amd64                            2.39.2-1                              amd64        smart column output alignment library
ii  libsmbclient:amd64                             2:4.18.6+dfsg-1                       amd64        shared library for communication with SMB/CIFS servers
ii  libsmbios-c2                                   2.4.3-1                               amd64        Provide access to (SM)BIOS information -- dynamic library
ii  libsmi2ldbl:amd64                              0.4.8+dfsg2-16                        amd64        library to access SMI MIB information
ii  libsnapd-glib-2-1:amd64                        1.63-5                                amd64        GLib snapd library
ii  libsnappy1v5:amd64                             1.1.10-1                              amd64        fast compression/decompression library
ii  libsndfile1:amd64                              1.2.2-1                               amd64        Library for reading/writing audio files
ii  libsndio7.0:amd64                              1.9.0-0.3+b2                          amd64        Small audio and MIDI framework from OpenBSD, runtime libraries
ii  libsnmp-base                                   5.9.4+dfsg-1                          all          SNMP configuration script, MIBs and documentation
ii  libsnmp40:amd64                                5.9.4+dfsg-1                          amd64        SNMP (Simple Network Management Protocol) library
ii  libsocket6-perl                                0.29-3                                amd64        Perl extensions for IPv6
ii  libsodium23:amd64                              1.0.18-1                              amd64        Network communication, cryptography and signaturing library
ii  libsombok3:amd64                               2.4.0-2+b1                            amd64        Unicode Text Segmentation library
ii  libsonic0:amd64                                0.2.0-12                              amd64        Simple library to speed up or slow down speech
ii  libsord-0-0:amd64                              0.16.14+git221008-1                   amd64        library for storing RDF data in memory
ii  libsoundtouch1:amd64                           2.3.2+ds1-1                           amd64        Sound stretching library
ii  libsoup-3.0-0:amd64                            3.4.3-1                               amd64        HTTP library implementation in C -- Shared library
ii  libsoup-3.0-common                             3.4.3-1                               all          HTTP library implementation in C -- Common files
ii  libsoup2.4-1:amd64                             2.74.3-1                              amd64        HTTP library implementation in C -- Shared library
ii  libsoup2.4-common                              2.74.3-1                              all          HTTP library implementation in C -- Common files
ii  libsoxr0:amd64                                 0.1.3-4                               amd64        High quality 1D sample-rate conversion library
ii  libspa-0.2-bluetooth:amd64                     0.3.80-2                              amd64        libraries for the PipeWire multimedia server - bluetooth plugins
ii  libspa-0.2-modules:amd64                       0.3.80-2                              amd64        libraries for the PipeWire multimedia server Simple Plugin API - modules
ii  libspandsp2:amd64                              0.0.6+dfsg-2+b1                       amd64        Telephony signal processing library
ii  libspatialite8:amd64                           5.1.0-1                               amd64        Geospatial extension for SQLite - libraries
ii  libspectre1:amd64                              0.2.12-1                              amd64        Library for rendering PostScript documents
ii  libspeechd2:amd64                              0.11.5-1                              amd64        Speech Dispatcher: Shared libraries
ii  libspeex1:amd64                                1.2.1-2                               amd64        The Speex codec runtime library
ii  libspeexdsp1:amd64                             1.2.1-1                               amd64        DSP library derived from speex
ii  libsphinxbase3:amd64                           0.8+5prealpha+1-16                    amd64        Speech recognition tool - shared library
ii  libspreadsheet-parseexcel-perl                 0.6500-3                              all          Perl module to access information from Excel Spreadsheets
ii  libspreadsheet-writeexcel-perl                 2.40-4                                all          module to create Excel spreadsheets
ii  libsqlite3-0:amd64                             3.42.0-1                              amd64        SQLite 3 shared library
ii  libsratom-0-0:amd64                            0.6.14-1                              amd64        library for serialising LV2 atoms to/from Turtle
ii  libsrt1.5-gnutls:amd64                         1.5.3-1                               amd64        Secure Reliable Transport UDP streaming library (GnuTLS flavour)
ii  libsrtp2-1:amd64                               2.5.0-3                               amd64        Secure RTP (SRTP) and UST Reference Implementations - shared library
ii  libss2:amd64                                   1.47.0-2+b1                           amd64        command-line interface parsing library
ii  libssh-4:amd64                                 0.10.5-3                              amd64        tiny C SSH library (OpenSSL flavor)
ii  libssh-gcrypt-4:amd64                          0.10.5-3                              amd64        tiny C SSH library (gcrypt flavor)
ii  libssh2-1:amd64                                1.11.0-2                              amd64        SSH2 client-side library
ii  libssl3:amd64                                  3.0.10-1                              amd64        Secure Sockets Layer toolkit - shared libraries
ii  libstartup-notification0:amd64                 0.12-6+b1                             amd64        library for program launch feedback (shared library)
ii  libstdc++-13-dev:amd64                         13.2.0-2                              amd64        GNU Standard C++ Library v3 (development files)
ii  libstdc++6:amd64                               13.2.0-2                              amd64        GNU Standard C++ Library v3
ii  libstemmer0d:amd64                             2.2.0-4                               amd64        Snowball stemming algorithms for use in Information Retrieval
ii  libstring-crc32-perl                           2.100-2                               amd64        Perl interface for cyclic redundancy check generation
ii  libstring-random-perl                          1:0.32-2                              all          Perl module for generating random strings
ii  libsuperlu6:amd64                              6.0.1+dfsg1-1                         amd64        Direct solution of large, sparse systems of linear equations
ii  libsvn1:amd64                                  1.14.2-4+b2                           amd64        Shared libraries used by Apache Subversion
ii  libsvtav1enc1:amd64                            1.6.0+dfsg-1                          amd64        Scalable Video Technology for AV1 (libsvtav1enc shared library)
ii  libswresample4:amd64                           7:6.0-6                               amd64        FFmpeg library for audio resampling, rematrixing etc. - runtime files
ii  libswscale7:amd64                              7:6.0-6                               amd64        FFmpeg library for image scaling and various conversions - runtime files
ii  libsybdb5:amd64                                1.3.17+ds-2                           amd64        libraries for connecting to MS SQL and Sybase SQL servers
ii  libsyn123-0:amd64                              1.31.3-2                              amd64        MPEG layer 1/2/3 audio decoder (libsyn123 shared library)
ii  libsynctex2:amd64                              2022.20220321.62855-8                 amd64        TeX Live: SyncTeX parser library
ii  libsystemd-shared:amd64                        254.1-3                               amd64        systemd shared private library
ii  libsystemd0:amd64                              254.1-3                               amd64        systemd utility library
ii  libsz2:amd64                                   1.0.6-1+b1                            amd64        Adaptive Entropy Coding library - SZIP
ii  libtag1v5:amd64                                1.13.1-1                              amd64        audio meta-data library
ii  libtag1v5-vanilla:amd64                        1.13.1-1                              amd64        audio meta-data library - vanilla flavour
ii  libtalloc2:amd64                               2.4.1-2                               amd64        hierarchical pool based memory allocator
ii  libtasn1-6:amd64                               4.19.0-3                              amd64        Manage ASN.1 structures (runtime)
ii  libtcl8.6:amd64                                8.6.13+dfsg-2                         amd64        Tcl (the Tool Command Language) v8.6 - run-time library files
ii  libtdb1:amd64                                  1.4.9-2                               amd64        Trivial Database - shared library
ii  libteamdctl0:amd64                             1.31-1                                amd64        library for communication with `teamd` process
ii  libteckit0:amd64                               2.5.11+ds1-1+b1                       amd64        Encoding conversion library
ii  libterm-readkey-perl                           2.38-2+b1                             amd64        perl module for simple terminal control
ii  libtevent0:amd64                               0.15.0-1                              amd64        talloc-based event loop library - shared library
ii  libtexlua53-5:amd64                            2022.20220321.62855-8                 amd64        TeX Live: Lua 5.3, modified for use with LuaTeX
ii  libtexluajit2:amd64                            2022.20220321.62855-8                 amd64        TeX Live: LuaJIT, modified for use with LuaJITTeX
ii  libtext-charwidth-perl:amd64                   0.04-11                               amd64        get display widths of characters on the terminal
ii  libtext-csv-perl                               2.03-1                                all          comma-separated values manipulator (using XS or PurePerl)
ii  libtext-csv-xs-perl:amd64                      1.51-1                                amd64        Perl C/XS module to process Comma-Separated Value files
ii  libtext-iconv-perl:amd64                       1.7-8                                 amd64        module to convert between character sets in Perl
ii  libtext-wrapi18n-perl                          0.06-10                               all          internationalized substitute of Text::Wrap
ii  libthai-data                                   0.1.29-1                              all          Data files for Thai language support library
ii  libthai0:amd64                                 0.1.29-1                              amd64        Thai language support library
ii  libtheora0:amd64                               1.1.1+dfsg.1-16.1+b1                  amd64        Theora Video Compression Codec
ii  libtie-ixhash-perl                             1.23-4                                all          Perl module to order associative arrays
ii  libtiff6:amd64                                 4.5.1+git230720-1                     amd64        Tag Image File Format (TIFF) library
ii  libtimedate-perl                               2.3300-2                              all          collection of modules to manipulate date/time information
ii  libtinfo6:amd64                                6.4+20230625-2                        amd64        shared low-level terminfo library for terminal handling
ii  libtirpc-common                                1.3.3+ds-1                            all          transport-independent RPC library - common files
ii  libtirpc-dev:amd64                             1.3.3+ds-1                            amd64        transport-independent RPC library - development files
ii  libtirpc3:amd64                                1.3.3+ds-1                            amd64        transport-independent RPC library
ii  libtk8.6:amd64                                 8.6.13-2                              amd64        Tk toolkit for Tcl and X11 v8.6 - run-time files
ii  libtommath1:amd64                              1.2.1-1                               amd64        multiple-precision integer library [runtime]
ii  libtotem-plparser-common                       3.26.6-1                              all          Totem Playlist Parser library - common files
ii  libtotem-plparser18:amd64                      3.26.6-1+b1                           amd64        Totem Playlist Parser library - runtime files
ii  libtotem0:amd64                                43.0-2                                amd64        Main library for the Totem media player
ii  libtracker-sparql-3.0-0:amd64                  3.4.2-3                               amd64        metadata database, indexer and search tool - library
ii  libtry-tiny-perl                               0.31-2                                all          module providing minimalistic try/catch
ii  libts0:amd64                                   1.22-1+b1                             amd64        touch screen library
ii  libtsan2:amd64                                 13.2.0-2                              amd64        ThreadSanitizer -- a Valgrind-based detector of data races (runtime)
ii  libtsk19:amd64                                 4.12.0+dfsg-1                         amd64        library for forensics analysis on volume and filesystem data
ii  libtss2-esys-3.0.2-0:amd64                     3.2.1-3                               amd64        TPM2 Software stack library - TSS and TCTI libraries
ii  libtss2-mu0:amd64                              3.2.1-3                               amd64        TPM2 Software stack library - TSS and TCTI libraries
ii  libtss2-rc0:amd64                              3.2.1-3                               amd64        TPM2 Software stack library - TSS and TCTI libraries
ii  libtss2-sys1:amd64                             3.2.1-3                               amd64        TPM2 Software stack library - TSS and TCTI libraries
ii  libtss2-tcti-cmd0:amd64                        3.2.1-3                               amd64        TPM2 Software stack library - TSS and TCTI libraries
ii  libtss2-tcti-device0:amd64                     3.2.1-3                               amd64        TPM2 Software stack library - TSS and TCTI libraries
ii  libtss2-tcti-mssim0:amd64                      3.2.1-3                               amd64        TPM2 Software stack library - TSS and TCTI libraries
ii  libtss2-tcti-swtpm0:amd64                      3.2.1-3                               amd64        TPM2 Software stack library - TSS and TCTI libraries
ii  libtss2-tctildr0:amd64                         3.2.1-3                               amd64        TPM2 Software stack library - TSS and TCTI libraries
ii  libturbojpeg0:amd64                            1:2.1.5-2                             amd64        TurboJPEG runtime library - SIMD optimized
ii  libtwolame0:amd64                              0.4.0-2                               amd64        MPEG Audio Layer 2 encoding library
ii  libtypes-serialiser-perl                       1.01-1                                all          module providing simple data types for common serialisation formats
ii  libubertooth1:amd64                            2020.12.R1-0kali2                     amd64        Shared library for Bluetooth experimentation
ii  libubsan1:amd64                                13.2.0-2                              amd64        UBSan -- undefined behaviour sanitizer (runtime)
ii  libuchardet0:amd64                             0.0.7-1                               amd64        universal charset detection library - shared library
ii  libucl1:amd64                                  1.03+repack-6                         amd64        Portable compression library - runtime
ii  libudev1:amd64                                 254.1-3                               amd64        libudev shared library
ii  libudfread0:amd64                              1.1.2-1                               amd64        UDF reader library
ii  libudisks2-0:amd64                             2.10.0-5                              amd64        GObject based library to access udisks2
ii  libunbound8:amd64                              1.17.1-2                              amd64        library implementing DNS resolution and validation
ii  libunicode-linebreak-perl                      0.0.20190101-1+b5                     amd64        UAX #14 Unicode Line Breaking Algorithm
ii  libunicode-map-perl                            0.112-13+b1                           amd64        Perl module for mapping charsets from and to UTF16 Unicode
ii  libunistring2:amd64                            1.0-2                                 amd64        Unicode string library for C
ii  libunistring5:amd64                            1.1-2                                 amd64        Unicode string library for C
ii  libunsafessl1.0.2:amd64                        1.0.2u-0kali1                         amd64        Secure Sockets Layer toolkit - shared libraries - UNSAFE VERSION
ii  libunwind8:amd64                               1.6.2-3                               amd64        library to determine the call-chain of a program - runtime
ii  libupower-glib3:amd64                          0.99.20-2                             amd64        abstraction for power management - shared library
ii  liburcu8:amd64                                 0.14.0-1                              amd64        userspace RCU (read-copy-update) library
ii  liburi-perl                                    5.21-1                                all          module to manipulate and access URI strings
ii  liburing2:amd64                                2.4-1                                 amd64        Linux kernel io_uring access library - shared library
ii  liburiparser1:amd64                            0.9.7+dfsg-2                          amd64        URI parsing library compliant with RFC 3986
ii  libusb-1.0-0:amd64                             2:1.0.26-1                            amd64        userspace USB programming library
ii  libusbmuxd6:amd64                              2.0.2-4                               amd64        USB multiplexor daemon for iPhone and iPod Touch devices - library
ii  libutempter0:amd64                             1.2.1-3                               amd64        privileged helper for utmp/wtmp updates (runtime)
ii  libutf8proc2:amd64                             2.8.0-1                               amd64        C library for processing UTF-8 Unicode data (shared library)
ii  libuuid-perl                                   0.28-2+b1                             amd64        Perl extension for using UUID interfaces as defined in e2fsprogs
ii  libuuid1:amd64                                 2.39.2-1                              amd64        Universally Unique ID library
ii  libuv1:amd64                                   1.44.2-1                              amd64        asynchronous event notification library - runtime library
ii  libuv1-dev:amd64                               1.44.2-1                              amd64        asynchronous event notification library - development files
ii  libv4l-0:amd64                                 1.24.1-3                              amd64        Collection of video4linux support libraries
ii  libv4lconvert0:amd64                           1.24.1-3                              amd64        Video4linux frame format conversion library
ii  libva-drm2:amd64                               2.19.0-1                              amd64        Video Acceleration (VA) API for Linux -- DRM runtime
ii  libva-x11-2:amd64                              2.19.0-1                              amd64        Video Acceleration (VA) API for Linux -- X11 runtime
ii  libva2:amd64                                   2.19.0-1                              amd64        Video Acceleration (VA) API for Linux -- runtime
ii  libvdpau-va-gl1:amd64                          0.4.2-1+b1                            amd64        VDPAU driver with OpenGL/VAAPI backend
ii  libvdpau1:amd64                                1.5-2                                 amd64        Video Decode and Presentation API for Unix (libraries)
ii  libvhdi1:amd64                                 20210425-1+b2                         amd64        Virtual Hard Disk image format access library
ii  libvidstab1.1:amd64                            1.1.0-2+b1                            amd64        video stabilization library (shared library)
ii  libvisual-0.4-0:amd64                          0.4.2-2                               amd64        audio visualization framework
ii  libvmdk1:amd64                                 20200926-2+b2                         amd64        VMWare Virtual Disk format access library
ii  libvo-aacenc0:amd64                            0.1.3-2                               amd64        VisualOn AAC encoder library
ii  libvo-amrwbenc0:amd64                          0.1.3-2                               amd64        VisualOn AMR-WB encoder library
ii  libvolume-key1:amd64                           0.3.12-5+b1                           amd64        Library for manipulating storage encryption keys and passphrases
ii  libvorbis0a:amd64                              1.3.7-1                               amd64        decoder library for Vorbis General Audio Compression Codec
ii  libvorbisenc2:amd64                            1.3.7-1                               amd64        encoder library for Vorbis General Audio Compression Codec
ii  libvorbisfile3:amd64                           1.3.7-1                               amd64        high-level API for Vorbis General Audio Compression Codec
ii  libvpl2                                        2023.3.0-1                            amd64        oneAPI Video Processing Library -- shared library
ii  libvpx7:amd64                                  1.12.0-1                              amd64        VP8 and VP9 video codec (shared library)
ii  libvte-2.91-0:amd64                            0.72.2-3                              amd64        Terminal emulator widget for GTK+ 3.0 - runtime files
ii  libvte-2.91-common                             0.72.2-3                              amd64        Terminal emulator widget for GTK+ 3.0 - common files
ii  libvulkan1:amd64                               1.3.250.0-1                           amd64        Vulkan loader library
ii  libwacom-common                                2.7.0-1                               all          Wacom model feature query library (common files)
ii  libwacom9:amd64                                2.7.0-1                               amd64        Wacom model feature query library
ii  libwavpack1:amd64                              5.6.0-1                               amd64        audio codec (lossy and lossless) - library
ii  libwayland-client0:amd64                       1.22.0-2.1                            amd64        wayland compositor infrastructure - client library
ii  libwayland-cursor0:amd64                       1.22.0-2.1                            amd64        wayland compositor infrastructure - cursor library
ii  libwayland-egl1:amd64                          1.22.0-2.1                            amd64        wayland compositor infrastructure - EGL library
ii  libwayland-server0:amd64                       1.22.0-2.1                            amd64        wayland compositor infrastructure - server library
ii  libwbclient0:amd64                             2:4.18.6+dfsg-1                       amd64        Samba winbind client library
ii  libwebkit2gtk-4.1-0:amd64                      2.40.5-1                              amd64        Web content engine library for GTK
ii  libwebp7:amd64                                 1.2.4-0.2                             amd64        Lossy compression of digital photographic images
ii  libwebpdemux2:amd64                            1.2.4-0.2                             amd64        Lossy compression of digital photographic images.
ii  libwebpmux3:amd64                              1.2.4-0.2                             amd64        Lossy compression of digital photographic images
ii  libwebrtc-audio-processing1:amd64              0.3-1+b1                              amd64        AudioProcessing module from the WebRTC project.
ii  libwebsockets19:amd64                          4.3.2-4                               amd64        lightweight C websockets library
ii  libwildmidi2:amd64                             0.4.3-1                               amd64        software MIDI player library
ii  libwinpr2-2:amd64                              2.10.0+dfsg1-1.1                      amd64        Windows Portable Runtime library
ii  libwireplumber-0.4-0:amd64                     0.4.14-4                              amd64        Shared libraries for WirePlumber
ii  libwireshark-data                              4.0.8-1                               all          network packet dissection library -- data files
ii  libwireshark16:amd64                           4.0.8-1                               amd64        network packet dissection library -- shared library
ii  libwiretap13:amd64                             4.0.8-1                               amd64        network packet capture library -- shared library
ii  libwmflite-0.2-7:amd64                         0.2.13-1                              amd64        Windows metafile conversion lite library
ii  libwnck-3-0:amd64                              43.0-3                                amd64        Window Navigator Construction Kit - runtime files
ii  libwnck-3-common                               43.0-3                                all          Window Navigator Construction Kit - common files
ii  libwoff1:amd64                                 1.0.2-2                               amd64        library for converting fonts to WOFF 2.0
ii  libwpe-1.0-1:amd64                             1.14.0-1                              amd64        Base library for the WPE WebKit port
ii  libwpebackend-fdo-1.0-1:amd64                  1.14.2-1                              amd64        WPE backend for FreeDesktop.org
ii  libwrap0:amd64                                 7.6.q-32                              amd64        Wietse Venema's TCP wrappers library
ii  libwsutil14:amd64                              4.0.8-1                               amd64        network packet dissection utilities library -- shared library
ii  libwww-mechanize-perl                          2.17-1                                all          module to automate interaction with websites
ii  libwww-perl                                    6.72-1                                all          simple and consistent interface to the world-wide web
ii  libwww-robotrules-perl                         6.02-1                                all          database of robots.txt-derived permissions
ii  libx11-6:amd64                                 2:1.8.6-1                             amd64        X11 client-side library
ii  libx11-data                                    2:1.8.6-1                             all          X11 client-side library
ii  libx11-dev:amd64                               2:1.8.6-1                             amd64        X11 client-side library (development headers)
ii  libx11-protocol-perl                           0.56-9                                all          Perl module for the X Window System Protocol, version 11
ii  libx11-xcb1:amd64                              2:1.8.6-1                             amd64        Xlib/XCB interface library
ii  libx264-164:amd64                              2:0.164.3095+gitbaee400-3+b1          amd64        x264 video coding library
ii  libx265-199:amd64                              3.5-2+b1                              amd64        H.265/HEVC video stream encoder (shared library)
ii  libx86-1:amd64                                 1.1+ds1-12                            amd64        x86 real-mode library
ii  libxatracker2:amd64                            23.1.7-1                              amd64        X acceleration library -- runtime
ii  libxau-dev:amd64                               1:1.0.9-1                             amd64        X11 authorisation library (development headers)
ii  libxau6:amd64                                  1:1.0.9-1                             amd64        X11 authorisation library
ii  libxaw7:amd64                                  2:1.0.14-1                            amd64        X11 Athena Widget library
ii  libxcb-damage0:amd64                           1.15-1                                amd64        X C Binding, damage extension
ii  libxcb-dri2-0:amd64                            1.15-1                                amd64        X C Binding, dri2 extension
ii  libxcb-dri3-0:amd64                            1.15-1                                amd64        X C Binding, dri3 extension
ii  libxcb-glx0:amd64                              1.15-1                                amd64        X C Binding, glx extension
ii  libxcb-icccm4:amd64                            0.4.1-1.1                             amd64        utility libraries for X C Binding -- icccm
ii  libxcb-image0:amd64                            0.4.0-2                               amd64        utility libraries for X C Binding -- image
ii  libxcb-keysyms1:amd64                          0.4.0-1+b2                            amd64        utility libraries for X C Binding -- keysyms
ii  libxcb-present0:amd64                          1.15-1                                amd64        X C Binding, present extension
ii  libxcb-randr0:amd64                            1.15-1                                amd64        X C Binding, randr extension
ii  libxcb-render-util0:amd64                      0.3.9-1+b1                            amd64        utility libraries for X C Binding -- render-util
ii  libxcb-render0:amd64                           1.15-1                                amd64        X C Binding, render extension
ii  libxcb-res0:amd64                              1.15-1                                amd64        X C Binding, res extension
ii  libxcb-shape0:amd64                            1.15-1                                amd64        X C Binding, shape extension
ii  libxcb-shm0:amd64                              1.15-1                                amd64        X C Binding, shm extension
ii  libxcb-sync1:amd64                             1.15-1                                amd64        X C Binding, sync extension
ii  libxcb-util1:amd64                             0.4.0-1+b1                            amd64        utility libraries for X C Binding -- atom, aux and event
ii  libxcb-xfixes0:amd64                           1.15-1                                amd64        X C Binding, xfixes extension
ii  libxcb-xinerama0:amd64                         1.15-1                                amd64        X C Binding, xinerama extension
ii  libxcb-xinput0:amd64                           1.15-1                                amd64        X C Binding, xinput extension
ii  libxcb-xkb1:amd64                              1.15-1                                amd64        X C Binding, XKEYBOARD extension
ii  libxcb-xv0:amd64                               1.15-1                                amd64        X C Binding, xv extension
ii  libxcb1:amd64                                  1.15-1                                amd64        X C Binding
ii  libxcb1-dev:amd64                              1.15-1                                amd64        X C Binding, development files
ii  libxcomposite1:amd64                           1:0.4.5-1                             amd64        X11 Composite extension library
ii  libxcursor1:amd64                              1:1.2.1-1                             amd64        X cursor management library
ii  libxcvt0:amd64                                 0.1.2-1                               amd64        VESA CVT standard timing modelines generator -- shared library
ii  libxdamage1:amd64                              1:1.1.6-1                             amd64        X11 damaged region extension library
ii  libxdmcp-dev:amd64                             1:1.1.2-3                             amd64        X11 authorisation library (development headers)
ii  libxdmcp6:amd64                                1:1.1.2-3                             amd64        X11 Display Manager Control Protocol library
ii  libxerces-c3.2:amd64                           3.2.4+debian-1                        amd64        validating XML parser library for C++
ii  libxext-dev:amd64                              2:1.3.4-1+b1                          amd64        X11 miscellaneous extensions library (development headers)
ii  libxext6:amd64                                 2:1.3.4-1+b1                          amd64        X11 miscellaneous extension library
ii  libxfixes3:amd64                               1:6.0.0-2                             amd64        X11 miscellaneous 'fixes' extension library
ii  libxfont2:amd64                                1:2.0.6-1                             amd64        X11 font rasterisation library
ii  libxft2:amd64                                  2.3.6-1                               amd64        FreeType-based font drawing library for X
ii  libxi6:amd64                                   2:1.8-1+b1                            amd64        X11 Input extension library
ii  libxinerama1:amd64                             2:1.1.4-3                             amd64        X11 Xinerama extension library
ii  libxkbcommon-x11-0:amd64                       1.5.0-1                               amd64        library to create keymaps with the XKB X11 protocol
ii  libxkbcommon0:amd64                            1.5.0-1                               amd64        library interface to the XKB compiler - shared library
ii  libxkbfile1:amd64                              1:1.1.0-1                             amd64        X11 keyboard file manipulation library
ii  libxkbregistry0:amd64                          1.5.0-1                               amd64        library to query available RMLVO
ii  libxklavier16:amd64                            5.4-4                                 amd64        X Keyboard Extension high-level API
ii  libxm4:amd64                                   2.3.8-3                               amd64        Motif - X/Motif shared library
ii  libxml++2.6-2v5:amd64                          2.40.1-3                              amd64        C++ interface to the GNOME XML library (libxml2)
ii  libxml-dom-perl                                1.46-2                                all          Perl module for building DOM Level 1 compliant doc structures
ii  libxml-parser-perl                             2.46-4                                amd64        Perl module for parsing XML files
ii  libxml-perl                                    0.08-4                                all          Perl modules for working with XML
ii  libxml-regexp-perl                             0.04-1.1                              all          Perl module for regular expressions for XML tokens
ii  libxml-twig-perl                               1:3.52-2                              all          Perl module for processing huge XML documents in tree mode
ii  libxml-writer-perl                             0.900-2                               all          Perl module for writing XML documents
ii  libxml-xpathengine-perl                        0.14-2                                all          re-usable XPath engine for DOM-like trees
ii  libxml2:amd64                                  2.9.14+dfsg-1.3                       amd64        GNOME XML library
ii  libxml2-dev:amd64                              2.9.14+dfsg-1.3                       amd64        GNOME XML library - development files
ii  libxml2-utils                                  2.9.14+dfsg-1.3                       amd64        GNOME XML library - utilities
ii  libxmlb2:amd64                                 0.3.14-2                              amd64        Binary XML library
ii  libxmu6:amd64                                  2:1.1.3-3                             amd64        X11 miscellaneous utility library
ii  libxmuu1:amd64                                 2:1.1.3-3                             amd64        X11 miscellaneous micro-utility library
ii  libxnvctrl0:amd64                              525.125.06-1                          amd64        NV-CONTROL X extension (runtime library)
ii  libxpm4:amd64                                  1:3.5.12-1.1                          amd64        X11 pixmap library
ii  libxrandr2:amd64                               2:1.5.2-2+b1                          amd64        X11 RandR extension library
ii  libxrender1:amd64                              1:0.9.10-1.1                          amd64        X Rendering Extension client library
ii  libxres1:amd64                                 2:1.2.1-1                             amd64        X11 Resource extension library
ii  libxshmfence1:amd64                            1.3-1                                 amd64        X shared memory fences - shared library
ii  libxsimd-dev:amd64                             8.1.0-7                               amd64        C++ wrappers for SIMD intrinsics
ii  libxslt1.1:amd64                               1.1.35-1                              amd64        XSLT 1.0 processing library - runtime library
ii  libxss1:amd64                                  1:1.2.3-1                             amd64        X11 Screen Saver extension library
ii  libxt-dev:amd64                                1:1.2.1-1.1                           amd64        X11 toolkit intrinsics library (development headers)
ii  libxt6:amd64                                   1:1.2.1-1.1                           amd64        X11 toolkit intrinsics library
ii  libxtables12:amd64                             1.8.9-2                               amd64        netfilter xtables library
ii  libxtst6:amd64                                 2:1.2.3-1.1                           amd64        X11 Testing -- Record extension library
ii  libxv1:amd64                                   2:1.0.11-1.1                          amd64        X11 Video extension library
ii  libxvidcore4:amd64                             2:1.3.7-1                             amd64        Open source MPEG-4 video codec (library)
ii  libxvmc1:amd64                                 2:1.0.12-2                            amd64        X11 Video extension library
ii  libxxf86dga1:amd64                             2:1.1.5-1                             amd64        X11 Direct Graphics Access extension library
ii  libxxf86vm1:amd64                              1:1.1.4-1+b2                          amd64        X11 XFree86 video mode extension library
ii  libxxhash0:amd64                               0.8.1-1                               amd64        shared library for xxhash
ii  libyajl2:amd64                                 2.1.0-5                               amd64        Yet Another JSON Library
ii  libyaml-0-2:amd64                              0.2.5-1                               amd64        Fast YAML 1.1 parser and emitter library
ii  libyaml-tiny-perl                              1.74-1                                all          Perl module for reading and writing YAML files
ii  libyara10:amd64                                4.3.2-1                               amd64        YARA shared library
ii  libyelp0:amd64                                 42.2-1                                amd64        Library for the GNOME help browser
ii  libyuv0:amd64                                  0.0~git20230616.a366ad7-1             amd64        Library for YUV scaling (shared library)
ii  libz3-4:amd64                                  4.8.12-3.1                            amd64        theorem prover from Microsoft Research - runtime libraries
ii  libz3-dev:amd64                                4.8.12-3.1                            amd64        theorem prover from Microsoft Research - development files
ii  libzbar0:amd64                                 0.23.92-8                             amd64        QR code / bar code scanner and decoder (library)
ii  libzimg2:amd64                                 3.0.5+ds1-1                           amd64        scaling, colorspace, depth conversion library (shared library)
ii  libzip-dev:amd64                               1.7.3-1+b1                            amd64        library for reading, creating, and modifying zip archives (development)
ii  libzip4:amd64                                  1.7.3-1+b1                            amd64        library for reading, creating, and modifying zip archives (runtime)
ii  libzmq5:amd64                                  4.3.4-6                               amd64        lightweight messaging kernel (shared library)
ii  libzstd1:amd64                                 1.5.5+dfsg2-1                         amd64        fast lossless compression algorithm
ii  libzvbi-common                                 0.2.42-1                              all          Vertical Blanking Interval decoder (VBI) - common files
ii  libzvbi0:amd64                                 0.2.42-1                              amd64        Vertical Blanking Interval decoder (VBI) - runtime files
ii  libzxing2:amd64                                1.4.0-3+b1                            amd64        C++ port of ZXing library (library files)
ii  libzzip-0-13:amd64                             0.13.72+dfsg.1-1.1                    amd64        library providing read access on ZIP-archives - library
ii  linux-base                                     4.9                                   all          Linux image base package
ii  linux-image-6.3.0-kali1-amd64                  6.3.7-1kali1                          amd64        Linux 6.3 for 64-bit PCs
ii  linux-image-6.4.0-kali3-amd64                  6.4.11-1kali1                         amd64        Linux 6.4 for 64-bit PCs
ii  linux-image-amd64                              6.4.11-1kali1                         amd64        Linux for 64-bit PCs (meta-package)
ii  linux-libc-dev:amd64                           6.4.11-1kali1                         amd64        Linux support headers for userspace development
ii  llvm-14                                        1:14.0.6-13                           amd64        Modular compiler and toolchain technologies
ii  llvm-14-dev                                    1:14.0.6-13                           amd64        Modular compiler and toolchain technologies, libraries and headers
ii  llvm-14-linker-tools                           1:14.0.6-13                           amd64        Modular compiler and toolchain technologies - Plugins
ii  llvm-14-runtime                                1:14.0.6-13                           amd64        Modular compiler and toolchain technologies, IR interpreter
ii  llvm-14-tools                                  1:14.0.6-13                           amd64        Modular compiler and toolchain technologies, tools
ii  llvm-15                                        1:15.0.7-8                            amd64        Modular compiler and toolchain technologies
ii  llvm-15-dev                                    1:15.0.7-8                            amd64        Modular compiler and toolchain technologies, libraries and headers
ii  llvm-15-linker-tools                           1:15.0.7-8                            amd64        Modular compiler and toolchain technologies - Plugins
ii  llvm-15-runtime                                1:15.0.7-8                            amd64        Modular compiler and toolchain technologies, IR interpreter
ii  llvm-15-tools                                  1:15.0.7-8                            amd64        Modular compiler and toolchain technologies, tools
ii  lmodern                                        2.005-1                               all          scalable PostScript and OpenType fonts based on Computer Modern
ii  locales                                        2.37-7                                all          GNU C Library: National Language (locale) data [support]
ii  login                                          1:4.13+dfsg1-1+b1                     amd64        system login tools
ii  logrotate                                      3.21.0-1                              amd64        Log rotation utility
ii  logsave                                        1.47.0-2+b1                           amd64        save the output of a command in a log file
ii  lrzsz                                          0.12.21-10+b1                         amd64        Tools for zmodem/xmodem/ymodem file transfer
ii  lsb-release                                    12.0-2                                all          Linux Standard Base version reporting utility (minimal implementation)
ii  lsof                                           4.95.0-1                              amd64        utility to list open files
ii  lua-lpeg:amd64                                 1.0.2-2                               amd64        LPeg library for the Lua language
ii  macchanger                                     1.7.0-5.4                             amd64        utility for manipulating the MAC address of network interfaces
ii  magicrescue                                    1.1.10+dfsg-2                         amd64        recover files by looking for magic bytes
ii  mailcap                                        3.70+nmu1                             all          Debian's mailcap system, and support programs
ii  make                                           4.3-4.1                               amd64        utility for directing compilation
ii  malcontent                                     0.11.0-4                              all          framework for parental control of applications
ii  malcontent-gui                                 0.11.0-4                              amd64        GUI to configure malcontent
ii  man-db                                         2.11.2-3                              amd64        tools for reading manual pages
ii  manpages                                       6.03-2                                all          Manual pages about using a GNU/Linux system
ii  manpages-dev                                   6.03-2                                all          Manual pages about using GNU/Linux for development
ii  mariadb-client                                 1:10.11.4-1                           amd64        MariaDB database client binaries
ii  mariadb-client-core                            1:10.11.4-1                           amd64        MariaDB database core client binaries
ii  mariadb-common                                 1:10.11.4-1                           all          MariaDB common configuration files
ii  mariadb-plugin-provider-bzip2                  1:10.11.4-1                           amd64        BZip2 compression support in the server and storage engines
ii  mariadb-plugin-provider-lz4                    1:10.11.4-1                           amd64        LZ4 compression support in the server and storage engines
ii  mariadb-plugin-provider-lzma                   1:10.11.4-1                           amd64        LZMA compression support in the server and storage engines
ii  mariadb-plugin-provider-lzo                    1:10.11.4-1                           amd64        LZO compression support in the server and storage engines
ii  mariadb-plugin-provider-snappy                 1:10.11.4-1                           amd64        Snappy compression support in the server and storage engines
ii  mariadb-server                                 1:10.11.4-1                           amd64        MariaDB database server binaries
ii  mariadb-server-core                            1:10.11.4-1                           amd64        MariaDB database core server files
ii  maskprocessor                                  0.73+git20170609.1708898-3+b1         amd64        high-performance word generator with a per-position configurable charset
ii  masscan                                        2:1.3.2+ds1-1                         amd64        TCP port scanner
ii  mawk                                           1.3.4.20230808-1                      amd64        Pattern scanning and text processing language
ii  media-types                                    10.1.0                                all          List of standard media types and their usual file extension
ii  medusa                                         2.2-7+b1                              amd64        fast, parallel, modular, login brute-forcer for network services
ii  mesa-va-drivers:amd64                          23.1.7-1                              amd64        Mesa VA-API video acceleration drivers
ii  mesa-vdpau-drivers:amd64                       23.1.7-1                              amd64        Mesa VDPAU video acceleration drivers
ii  mesa-vulkan-drivers:amd64                      23.1.7-1                              amd64        Mesa Vulkan graphics drivers
ii  metasploit-framework                           6.3.31-0kali1                         amd64        Framework for exploit development and vulnerability research
ii  mime-support                                   3.66                                  all          transitional package
ii  mimikatz                                       2.2.0-git20220919-0kali1              all          Uses admin rights on Windows to display passwords in plaintext
ii  mingw-w64-common                               11.0.1-3                              all          Common files for Mingw-w64
ii  mingw-w64-i686-dev                             11.0.1-3                              all          Development files for MinGW-w64 targeting Win32
ii  mingw-w64-x86-64-dev                           11.0.1-3                              all          Development files for MinGW-w64 targeting Win64
ii  minicom                                        2.8-2                                 amd64        Friendly menu driven serial communication program
ii  miredo                                         1.2.6-7.1+b2                          amd64        Teredo IPv6 tunneling through NATs
ii  mitmproxy                                      10.0.0-0kali1                         all          SSL-capable man-in-the-middle HTTP proxy
ii  mobile-broadband-provider-info                 20230416-1                            all          database of mobile broadband service providers
ii  modemmanager                                   1.20.6-2                              amd64        D-Bus service for managing modems
ii  mokutil                                        0.6.0-2                               amd64        tools for manipulating machine owner keys
ii  mosquitto                                      2.0.17-3                              amd64        MQTT version 5.0/3.1.1/3.1 compatible message broker
ii  mount                                          2.39.2-1                              amd64        tools for mounting and manipulating filesystems
ii  mpg123                                         1.31.3-2                              amd64        MPEG layer 1/2/3 audio player
ii  msfpc                                          1.4.5-0kali3                          amd64        MSFvenom Payload Creator (MSFPC)
ii  mtd-utils                                      1:2.1.6-1                             amd64        Memory Technology Device Utilities
ii  multimac                                       1.0.3-1kali3                          amd64        Create multiple MACs on an adapter
ii  mupdf-tools                                    1.22.2+ds1-2                          amd64        command line tools for the MuPDF viewer
ii  mutter-common                                  44.1-1                                all          shared files for the Mutter window manager
ii  mutter-common-bin                              44.1-1                                amd64        shared programs for the Mutter window manager
ii  mysql-common                                   5.8+1.1.0                             all          MySQL database common files, e.g. /etc/mysql/my.cnf
ii  nano                                           7.2-1                                 amd64        small, friendly text editor inspired by Pico
ii  nasm                                           2.16.01-1                             amd64        General-purpose x86 assembler
ii  nautilus                                       44.2.1-2                              amd64        file manager and graphical shell for GNOME
ii  nautilus-data                                  44.2.1-2                              all          data files for nautilus
ii  nautilus-extension-gnome-terminal:amd64        3.48.1-2+kali1                        amd64        GNOME terminal emulator application - Nautilus extension
ii  nbtscan                                        1.7.2-2                               amd64        scan networks searching for NetBIOS information
ii  ncompress                                      4.2.4.6-6                             amd64        original Lempel-Ziv compress/uncompress programs
ii  ncrack                                         0.7+debian-4                          amd64        High-speed network authentication cracking tool
ii  ncurses-base                                   6.4+20230625-2                        all          basic terminal type definitions
ii  ncurses-bin                                    6.4+20230625-2                        amd64        terminal-related programs and man pages
ii  ncurses-hexedit                                0.9.7+orig-7.2                        amd64        Edit files/disks in hex, ASCII and EBCDIC
ii  ncurses-term                                   6.4+20230625-2                        all          additional terminal type definitions
ii  net-tools                                      2.10-0.1                              amd64        NET-3 networking toolkit
ii  netbase                                        6.4                                   all          Basic TCP/IP networking system
ii  netcat-traditional                             1.10-47                               amd64        TCP/IP swiss army knife
ii  netdiscover                                    0.10-3                                amd64        active/passive network address scanner using ARP requests
ii  netmask                                        2.4.4-3                               amd64        helps determine network masks
ii  netsed                                         1.2-3+b1                              amd64        network packet-altering stream editor
ii  netsniff-ng                                    0.6.8-3                               amd64        Linux network packet sniffer toolkit
ii  netstandard-targeting-pack-2.1                 2.1.0-1                               amd64        NETStandard.Library.Ref 2.1.0
ii  network-manager                                1.44.0-1                              amd64        network management framework (daemon and userspace tools)
ii  network-manager-gnome                          1.32.0-3                              amd64        network management framework (GNOME frontend)
ii  nfs-common                                     1:2.6.3-3                             amd64        NFS support files common to client and server
ii  nftables                                       1.0.8-1                               amd64        Program to control packet filtering rules by Netfilter project
ii  nginx                                          1.24.0-1                              amd64        small, powerful, scalable web/proxy server
ii  nginx-common                                   1.24.0-1                              all          small, powerful, scalable web/proxy server - common files
ii  ngrep                                          1.47+ds1-5+b1                         amd64        grep for network traffic
ii  nikto                                          1:2.5.0+git20230114.90ff645-0kali1    all          web server security scanner
ii  nmap                                           7.94+dfsg1-1kali1                     amd64        The Network Mapper
ii  nmap-common                                    7.94+dfsg1-1kali1                     all          Architecture independent files for nmap
ii  node-normalize.css                             8.0.1-5                               all          Modern alternative to CSS resets
ii  notus-scanner                                  22.5.0-0kali1                         all          vulnerable products detection (Python 3)
ii  nsis                                           3.09-1                                amd64        Nullsoft Scriptable Install System (modified for Debian)
ii  nsis-common                                    3.09-1                                all          Nullsoft Scriptable Install System stubs and plugins
ii  nss-plugin-pem:amd64                           1.1.0-1                               amd64        PEM file reader for Network Security Services (NSS)
ii  ntfs-3g                                        1:2022.10.3-1+b1                      amd64        read/write NTFS driver for FUSE
ii  numba-doc                                      0.56.4+dfsg-2                         all          native machine code compiler for Python (docs)
ii  ocl-icd-libopencl1:amd64                       2.3.2-1                               amd64        Generic OpenCL ICD Loader
ii  offsec-awae-python2                            2023.3.2                              amd64        Python 2 resources for OffSec's AWAE/WEB-300
ii  onesixtyone                                    0.3.4-1                               amd64        fast and simple SNMP scanner
ii  openjdk-17-jre:amd64                           17.0.9~4ea-1                          amd64        OpenJDK Java runtime, using Hotspot JIT
ii  openjdk-17-jre-headless:amd64                  17.0.9~4ea-1                          amd64        OpenJDK Java runtime, using Hotspot JIT (headless)
ii  opensc                                         0.23.0-1                              amd64        Smart card utilities with support for PKCS#15 compatible cards
ii  opensc-pkcs11:amd64                            0.23.0-1                              amd64        Smart card utilities (PKCS#11 module)
ii  openssh-client                                 1:9.4p1-1                             amd64        secure shell (SSH) client, for secure access to remote machines
ii  openssh-server                                 1:9.4p1-1                             amd64        secure shell (SSH) server, for secure access from remote machines
ii  openssh-sftp-server                            1:9.4p1-1                             amd64        secure shell (SSH) sftp server module, for SFTP access from remote machines
ii  openssl                                        3.0.10-1                              amd64        Secure Sockets Layer toolkit - cryptographic utility
ii  openvas-scanner                                22.7.3-0kali2                         amd64        remote network security auditor - scanner
ii  openvpn                                        2.6.3-2                               amd64        virtual private network daemon
ii  ophcrack                                       3.8.0-3+b1                            amd64        Microsoft Windows password cracker using rainbow tables (gui)
ii  ophcrack-cli                                   3.8.0-3+b1                            amd64        Microsoft Windows password cracker using rainbow tables (cmdline)
ii  oracle-instantclient-basic                     19.6.0.0.0-0kali2                     amd64        Oracle Instant Client Basic
ii  orca                                           44.1-2                                all          Scriptable screen reader
ii  os-prober                                      1.81                                  amd64        utility to detect other OSes on a set of drives
ii  osinfo-db                                      0.20230719-1                          all          Operating system database files
ii  ospd-openvas                                   22.5.4-0kali1                         all          OSP server implementation to allow GVM to remotely control an OpenVAS Scanner
ii  p11-kit                                        0.25.0-4                              amd64        p11-glue utilities
ii  p11-kit-modules:amd64                          0.25.0-4                              amd64        p11-glue proxy and trust modules
ii  p7zip                                          16.02+dfsg-8                          amd64        7zr file archiver with high compression ratio
ii  p7zip-full                                     16.02+dfsg-8                          amd64        7z and 7za file archivers with high compression ratio
ii  parted                                         3.6-3                                 amd64        disk partition manipulator
ii  passing-the-hash                               0~2015.12.33                          amd64        Patched tools to use password hashes as authentication input
ii  passwd                                         1:4.13+dfsg1-1+b1                     amd64        change and administer password and group data
ii  patator                                        0.9-4                                 all          Multi-purpose brute-forcer
ii  patch                                          2.7.6-7                               amd64        Apply a diff file to an original
ii  pci.ids                                        0.0~2023.08.10-1                      all          PCI ID Repository
ii  pciutils                                       1:3.10.0-2                            amd64        PCI utilities
ii  pcscd                                          2.0.0-1                               amd64        Middleware to access a smart card using PC/SC (daemon side)
ii  pdf-parser                                     0.7.8-0kali1                          all          Parses PDF files to identify fundamental elements
ii  pdfid                                          0.2.8-0kali1                          all          Scans PDF files for certain PDF keywords
ii  perl                                           5.36.0-7                              amd64        Larry Wall's Practical Extraction and Report Language
ii  perl-base                                      5.36.0-7                              amd64        minimal Perl system
ii  perl-modules-5.36                              5.36.0-7                              all          Core Perl modules
ii  perl-openssl-defaults:amd64                    7+b1                                  amd64        version compatibility baseline for Perl OpenSSL packages
ii  perl-tk                                        1:804.036-1+b2                        amd64        Perl module providing the Tk graphics library
ii  pg-gvm                                         22.5.1-0kali1                         amd64        functionality for ical object manipulation
ii  pgcli                                          3.5.0-6                               all          CLI for PostgreSQL with auto-completion and syntax highlighting
ii  php                                            2:8.2+93                              all          server-side, HTML-embedded scripting language (default)
ii  php-common                                     2:93                                  all          Common files for PHP packages
ii  php-mysql                                      2:8.2+93                              all          MySQL module for PHP [default]
ii  php8.2                                         8.2.7-1                               all          server-side, HTML-embedded scripting language (metapackage)
ii  php8.2-cli                                     8.2.7-1                               amd64        command-line interpreter for the PHP scripting language
ii  php8.2-common                                  8.2.7-1                               amd64        documentation, examples and common module for PHP
ii  php8.2-mysql                                   8.2.7-1                               amd64        MySQL module for PHP
ii  php8.2-opcache                                 8.2.7-1                               amd64        Zend OpCache module for PHP
ii  php8.2-readline                                8.2.7-1                               amd64        readline module for PHP
ii  pinentry-curses                                1.2.1-1                               amd64        curses-based PIN or pass-phrase entry dialog for GnuPG
ii  pinentry-gnome3                                1.2.1-1                               amd64        GNOME 3 PIN or pass-phrase entry dialog for GnuPG
ii  pipal                                          3.4.0-0kali1                          all          Statistical analysis on password dumps
ii  pipewire:amd64                                 0.3.80-2                              amd64        audio and video processing engine multimedia server
ii  pipewire-alsa:amd64                            0.3.80-2                              amd64        PipeWire ALSA plugin
ii  pipewire-audio                                 0.3.80-2                              all          recommended set of PipeWire packages for a standard audio desktop use
ii  pipewire-bin                                   0.3.80-2                              amd64        PipeWire multimedia server - programs
ii  pipewire-pulse                                 0.3.80-2                              amd64        PipeWire PulseAudio daemon
ii  pixiewps                                       1.4.2-5                               amd64        Offline WPS bruteforce tool
ii  pkexec                                         123-1+kali1                           amd64        run commands as another user with polkit authorization
ii  plocate                                        1.1.19-2                              amd64        much faster locate
ii  plymouth                                       22.02.122-3                           amd64        boot animation, logger and I/O multiplexer
ii  plymouth-label                                 22.02.122-3                           amd64        boot animation, logger and I/O multiplexer - label control
ii  pocketsphinx-en-us                             0.8+5prealpha+1-15                    all          Speech recognition tool - US English language model
ii  pocl-opencl-icd:amd64                          4.0-2                                 amd64        pocl ICD
ii  polenum                                        1.6.1-2                               all          Extracts the password policy from a Windows system
ii  policykit-1                                    123-1+kali1                           amd64        transitional package for polkitd and pkexec
ii  polkitd                                        123-1+kali1                           amd64        framework for managing administrative policies and privileges
ii  poppler-data                                   0.4.12-1                              all          encoding data for the poppler PDF rendering library
ii  postgresql                                     15+254                                all          object-relational SQL database (supported version)
ii  postgresql-15                                  15.4-1                                amd64        The World's Most Advanced Open Source Relational Database
ii  postgresql-client-15                           15.4-1                                amd64        front-end programs for PostgreSQL 15
ii  postgresql-client-common                       254                                   all          manager for multiple PostgreSQL client versions
ii  postgresql-common                              254                                   all          PostgreSQL database-cluster manager
ii  power-profiles-daemon                          0.13-2                                amd64        Makes power profiles handling available over D-Bus.
ii  powermgmt-base                                 1.37                                  all          common utils for power management
ii  powershell                                     7.2.6-1.deb                           amd64        PowerShell is an automation and configuration management platform.
ii  powershell-empire                              5.4.2-0kali4                          all          PowerShell and Python post-exploitation agent
ii  powersploit                                    3.0.0+git20200817.d943001-0kali1      all          PowerShell Post-Exploitation Framework
ii  ppp                                            2.4.9-1+1.1+b1                        amd64        Point-to-Point Protocol (PPP) - daemon
ii  preview-latex-style                            12.2-1                                all          extraction of elements from LaTeX documents as graphics
ii  procps                                         2:4.0.3-1                             amd64        /proc file system utilities
ii  proj-bin                                       9.3.0-1                               amd64        Cartographic projection library (tools)
ii  proj-data                                      9.3.0-1                               all          Cartographic projection filter and library (datum package)
ii  proxychains4                                   4.16-3                                amd64        redirect connections through socks/http proxies (proxychains-ng)
ii  proxytunnel                                    1.11-2                                amd64        Help SSH and other protocols through HTTP(S) proxies
ii  psmisc                                         23.6-1                                amd64        utilities that use the proc file system
ii  ptunnel                                        0.72-3+b1                             amd64        Tunnel TCP connections over ICMP packets
ii  publicsuffix                                   20230209.2326-1                       all          accurate, machine-readable list of domain name suffixes
ii  pv                                             1.7.24-1                              amd64        Shell pipeline element to meter data passing through
ii  pwnat                                          0.3-beta+git20140908-0kali2           amd64        NAT to NAT client-server communication
ii  pyqt5-dev-tools                                5.15.9+dfsg-2                         amd64        Development tools for PyQt5
ii  pyqt6-dev-tools                                6.5.2-1                               all          development tools for PyQt6
ii  python-apt-common                              2.6.0                                 all          Python interface to libapt-pkg (locales)
ii  python-babel-localedata                        2.10.3-1                              all          tools for internationalizing Python applications - locale data files
ii  python-cffi                                    1.14.0-2kali2                         all          Foreign Function Interface for Python calling C code
ii  python-cffi-backend                            1.14.0-2kali2+b1                      amd64        Foreign Function Interface for Python calling C code - backend
ii  python-is-python3                              3.11.4-1                              all          symlinks /usr/bin/python to python3
ii  python-matplotlib-data                         3.6.3-1                               all          Python based plotting system (data package)
ii  python-odf-doc                                 1.4.2-2                               all          documentation and examples for python-odf and python3-odf
ii  python-odf-tools                               1.4.2-2                               all          Python tools to manipulate OpenDocument files
ii  python-tables-data                             3.7.0-9                               all          Hierarchical database for Python3 based on HDF5 (test data)
ii  python-tinycss2-common                         1.2.1-2                               all          Low-level CSS parser (test data)
ii  python2                                        2.7.18-3                              amd64        interactive high-level object-oriented language (Python2 version)
ii  python2-minimal                                2.7.18-3                              amd64        minimal subset of the Python2 language
ii  python2.7                                      2.7.18-13.2                           amd64        Interactive high-level object-oriented language (version 2.7)
ii  python2.7-minimal                              2.7.18-13.2                           amd64        Minimal subset of the Python language (version 2.7)
ii  python3                                        3.11.4-5+b1                           amd64        interactive high-level object-oriented language (default python3 version)
ii  python3-aardwolf                               0.2.2-0kali1                          amd64        Asynchronous RDP/VNC client (Python 3)
ii  python3-adblockparser                          0.7-0kali1                            all          parser for Adblock Plus filters (Python 3)
ii  python3-aesedb                                 0.1.3+git20230221.9b7c468-0kali1      all          async parser for JET (Python 3)
ii  python3-aiocmd                                 0.1.2-0kali1                          all          Asyncio-based automatic CLI creation tool using prompt-toolkit
ii  python3-aioconsole                             0.3.1-0kali2                          all          Asynchronous console and interfaces for asyncio (Python 3)
ii  python3-aiodns                                 3.0.0-2                               all          Asynchronous DNS resolver library for Python 3
ii  python3-aiofiles                               23.2.1-2                              all          support for Python asyncio file operations
ii  python3-aiohttp                                3.8.5-1                               amd64        http client/server for asyncio
ii  python3-aiomultiprocess                        0.9.0-0kali1                          all          Take a modern Python codebase to the next level of performance (Python 3)
ii  python3-aioquic                                0.9.21-2                              amd64        Python implementation of QUIC and HTTP/3
ii  python3-aioredis                               1.3.1-2                               all          asyncio (PEP 3156) Redis support
ii  python3-aiosignal                              1.3.1-1                               all          manage callbacks in asyncio projects
ii  python3-aiosmb                                 0.4.4-0kali1                          all          Fully asynchronous SMB library (Python 3)
ii  python3-aiosqlite                              0.17.0-2                              all          sqlite library for Python 3 using asyncio
ii  python3-aiowinreg                              0.0.7-0kali1                          all          Registry hive parsing the async way (Python 3)
ii  python3-ajpy                                   0.0.4-2.1                             all          Python module to craft AJP requests
ii  python3-alembic                                1.8.1-2                               all          lightweight database migration tool for SQLAlchemy - Python module
ii  python3-all                                    3.11.4-5+b1                           amd64        package depending on all supported Python 3 runtime versions
ii  python3-all-dev                                3.11.4-5+b1                           amd64        package depending on all supported Python 3 development packages
ii  python3-altgraph                               0.17.3+ds0-2                          all          Python 3 graph (network) package
ii  python3-aniso8601                              9.0.1-2                               all          python3 library for parsing dates and time
ii  python3-anyio                                  3.7.0-1                               all          Asynchronous compatibility layer (Python 3)
ii  python3-apispec                                6.3.0-1                               all          pluggable API specification generator (Python 3)
ii  python3-apispec-webframeworks                  0.5.2-0kali2                          all          Web framework plugins for apispec (Python 3)
ii  python3-appdirs                                1.4.4-4                               all          determining appropriate platform-specific directories (Python 3)
ii  python3-apscheduler                            3.9.1-2                               all          In-process task scheduler with Cron-like capabilities
ii  python3-apt                                    2.6.0                                 amd64        Python 3 interface to libapt-pkg
ii  python3-arc4                                   0.3.0-0kali1+b1                       amd64        small and insanely fast ARCFOUR (RC4) cipher implementation (Python 3)
ii  python3-argcomplete                            2.0.0-1                               all          bash tab completion for argparse (for Python 3)
ii  python3-arrow                                  1.2.3-1                               all          Python3 library to manipulate dates, times, and timestamps
ii  python3-asciitree                              0.3.3-3                               all          Draw tree structures using (ASCII or Unicode) characters
ii  python3-asgiref                                3.7.2-1                               all          ASGI in-memory channel layer (Python3 version)
ii  python3-asn1crypto                             1.5.1-3                               all          Fast ASN.1 parser and serializer (Python 3)
ii  python3-asn1tools                              0.164.0-0kali1                        all          ASN.1 parsing, encoding and decoding (Python 3)
ii  python3-asttokens                              2.2.1-1                               all          annotate Python asbtract syntax trees with code references (Python 3)
ii  python3-asyauth                                0.0.9-0kali2                          all          Unified authentication library (Python 3)
ii  python3-async-timeout                          4.0.3-1                               all          timeout context manager for asyncio programs in Python
ii  python3-asysocks                               0.2.2-0kali1                          all          Socks5 / Socks4 client and server library (Python 3)
ii  python3-attr                                   23.1.0-2                              all          Attributes without boilerplate (Python 3)
ii  python3-autobahn                               22.7.1+dfsg1-4                        all          WebSocket client and server library, WAMP framework - Python 3.x
ii  python3-autocommand                            2.2.2-2                               all          library to generate argparse parsers from function signatures
ii  python3-automat                                22.10.0-1                             all          Self-service finite-state machines for the programmer on the go
ii  python3-babel                                  2.10.3-1                              all          tools for internationalizing Python applications - Python 3.x
ii  python3-backcall                               0.2.0-4                               all          Callback functions for Python
ii  python3-backoff                                2.2.1-1                               all          Function decoration for backoff and retry
ii  python3-base58                                 1.0.3-2                               all          Python library with Base58 encode and decode functions
ii  python3-bcrypt                                 3.2.2-1                               amd64        password hashing library for Python 3
ii  python3-beniget                                0.4.1-3                               all          collection of compile-time Python AST analyzers
ii  python3-bidict                                 0.22.1-1                              all          Bidirectional map data structures and related functionality
ii  python3-binwalk                                2.3.4+dfsg1-1                         all          Python3 library for analyzing binary blobs and executable code
ii  python3-bitstruct                              8.15.1-1+b1                           amd64        Python bit pack/unpack package
ii  python3-bleach                                 6.0.0-2                               all          whitelist-based HTML-sanitizing library (Python 3)
ii  python3-blinker                                1.6.2-1                               all          Fast, simple object-to-object and broadcast signaling (Python3)
ii  python3-bluepy                                 1.3.0-0kali1                          amd64        Python interface to Bluetooth Low Energy on Linux (Python 3)
ii  python3-bottle                                 0.12.23-1.2                           all          fast and simple WSGI-framework for Python 3
ii  python3-bottleneck                             1.3.5+ds1-2+b1                        amd64        Fast NumPy array functions written in C (Python 3)
ii  python3-brlapi:amd64                           6.6-4                                 amd64        Braille display access via BRLTTY - Python3 bindings
ii  python3-brotli                                 1.0.9-2+b6                            amd64        lossless compression algorithm and format (Python 3 version)
ii  python3-bs4                                    4.12.2-2                              all          error-tolerant HTML parser for Python 3
ii  python3-cairo:amd64                            1.24.0-1.1                            amd64        Python3 bindings for the Cairo vector graphics library
ii  python3-cbor                                   1.0.0-1.2+b1                          amd64        Python3 Implementation of RFC 7049. Concise Binary Object Representation (CBOR)
ii  python3-censys                                 2.2.5-1                               all          easy-to-use and lightweight API wrapper for Censys APIs (censys.io)
ii  python3-certifi                                2022.9.24-1                           all          root certificates for validating SSL certs and verifying TLS hosts (python3)
ii  python3-cffi                                   1.15.1-5                              all          Foreign Function Interface for Python 3 calling C code
ii  python3-cffi-backend:amd64                     1.15.1-5+b1                           amd64        Foreign Function Interface for Python 3 calling C code - runtime
ii  python3-chardet                                5.2.0+dfsg-1                          all          Universal Character Encoding Detector (Python3)
ii  python3-charset-normalizer                     3.2.0-1                               all          charset, encoding and language detection (Python 3)
ii  python3-cheroot                                10.0.0+ds1-1                          all          Pure-Python HTTP server
ii  python3-cherrypy-cors                          1.6-0kali3                            all          CORS support for CherryPy (Python 3)
ii  python3-cherrypy3                              18.8.0-3                              all          Python web development framework - Python 3 module
ii  python3-cli-helpers                            2.3.0-3                               all          easy command-line apps with Python
ii  python3-click                                  8.1.6-1                               all          Wrapper around optparse for command line utilities - Python 3.x
ii  python3-click-plugins                          1.1.1-4                               all          Click extension to register external CLI commands (Python 3)
ii  python3-cmd2                                   2.4.3+ds-2                            all          Enhanced Python cmd module - Python 3.x
ii  python3-colorama                               0.4.6-4                               all          Cross-platform colored terminal text in Python - Python 3.x
ii  python3-configobj                              5.0.8-2                               all          simple but powerful config file reader and writer for Python 3
ii  python3-constantly                             15.1.0-4                              all          Symbolic constants in Python
ii  python3-contourpy                              1.0.7-1+b1                            amd64        Python library for calculating contours of 2D quadrilateral grids
ii  python3-cryptography                           38.0.4-4                              amd64        Python library exposing cryptographic recipes and primitives (Python 3)
ii  python3-cups:amd64                             2.0.1-5+b4                            amd64        Python3 bindings for CUPS
ii  python3-cupshelpers                            1.5.18-1                              all          Python utility modules around the CUPS printing system
ii  python3-cvss                                   2.4-0kali2                            all          CVSS v2 and v3 computation utilities (Python 3)
ii  python3-cycler                                 0.11.0-1                              all          composable kwarg iterator (Python 3)
ii  python3-dateutil                               2.8.2-3                               all          powerful extensions to the standard Python 3 datetime module
ii  python3-dbus                                   1.3.2-5                               amd64        simple interprocess messaging system (Python 3 interface)
ii  python3-debconf                                1.5.82                                all          interact with debconf from Python 3
ii  python3-debian                                 0.1.49                                all          Python 3 modules to work with Debian-related data formats
ii  python3-debianbts                              4.0.1                                 all          Python interface to Debian's Bug Tracking System
ii  python3-decorator                              5.1.1-4                               all          simplify usage of Python decorators by programmers
ii  python3-defusedxml                             0.7.1-2                               all          XML bomb protection for Python stdlib modules (for Python 3)
ii  python3-deprecated                             1.2.14-1                              all          Python decorator for old classes, functions or methods
ii  python3-dev                                    3.11.4-5+b1                           amd64        header files and a static library for Python (default)
ii  python3-dicttoxml                              1.7.15-1                              all          Python 3 module for converting dict into a XML string
ii  python3-diskcache                              5.4.0-3                               all          Python3 module for disk and file backed persistent cache
ii  python3-distlib                                0.3.7-1                               all          low-level components of python distutils2/packaging
ii  python3-distro                                 1.8.0-1                               all          Linux OS platform information API
ii  python3-distutils                              3.11.5-1                              all          distutils package for Python 3.x
ii  python3-django                                 3:3.2.20-1.1                          all          High-level Python web development framework
ii  python3-dnslib                                 0.9.23-1                              all          Module to encode/decode DNS wire-format packets (Python 3)
ii  python3-dnspython                              2.4.2-1                               all          DNS toolkit for Python 3
ii  python3-docopt                                 0.6.2-4.1                             all          command-line interface description language (Python3)
ii  python3-docx                                   0.8.11+dfsg1-5                        all          library for creating and updating Microsoft Word files (Python 3)
ii  python3-donut                                  0.9.3+git20220530.e75bdcd-0kali2+b1   amd64        Generates position-independent shellcode from memory and runs them
ii  python3-dotenv                                 1.0.0-1                               all          Get and set values in the .env file in local and production servers
ii  python3-dropbox                                11.36.2-1                             all          Official Dropbox API Client (Python3 version)
ii  python3-dsinternals                            1.2.4+git20230301.edb3fc8-0kali1      all          Library to interact with Windows AD
ii  python3-ecdsa                                  0.18.0-3                              all          ECDSA cryptographic signature library (Python 3)
ii  python3-email-validator                        1.3.0-1                               all          Robust email address syntax and deliverability validation library (Python 3)
ii  python3-engineio                               4.3.4-2                               all          python3 implementation of the Engine.IO realtime server
ii  python3-et-xmlfile                             1.0.1-2.1                             all          low memory library for creating large XML files (Python 3)
ii  python3-executing                              1.2.0-2                               all          Inspect Python AST node being executed
ii  python3-exifread                               3.0.0-1                               all          Python library to extract Exif data from TIFF and JPEG files
ii  python3-faraday-agent-parameters-types         1.2.0-0kali2                          all          Set the models of parameters types for the agents (Python 3)
ii  python3-faraday-plugins                        1.13.2-0kali1                         all          Faraday plugins (Python 3)
ii  python3-fastapi                                0.101.0-1                             all          modern, fast, web framework for building APIs, based on type hints
ii  python3-feedparser                             6.0.10-1                              all          Universal Feed Parser for Python 3
ii  python3-filedepot                              0.5.2-0kali5                          all          file storage made easy for the Web World (Python 3)
ii  python3-filelock                               3.12.2-1                              all          platform independent file locking module
ii  python3-filteralchemy                          0.1.0+git20190401-0kali2              all          Declarative query builder for SQLAlchemy (Python 3)
ii  python3-flasgger                               0.9.5+dfsg.2-3                        all          Extract swagger specs from your flask project
ii  python3-flask                                  2.2.2-3                               all          micro web framework based on Werkzeug and Jinja2 - Python 3.x
ii  python3-flask-classful                         0.15.0~b1+git20211224.521173d-0kali1  all          Class based views for Flask (Python 3)
ii  python3-flask-kvsession                        0.6.4-0kali1                          all          Flask's session handling using server-side sessions (Python 3)
ii  python3-flask-limiter                          3.3.1-1                               all          Rate-limiting for Flask routes
ii  python3-flask-login                            0.6.2-1                               all          user session management for Flask -- Python 3 module
ii  python3-flask-mail                             0.9.1+dfsg1-2                         all          Flask extension for sending email
ii  python3-flask-principal                        0.4.0-4                               all          identity management for Flask
ii  python3-flask-restful                          0.3.9-6                               all          REST API framework for Flask applications (Python3 Module)
ii  python3-flask-socketio                         5.3.2-1                               all          Socket.IO integration for Flask applications
ii  python3-flask-sqlalchemy                       3.0.3-1                               all          adds SQLAlchemy support to your Python 3 Flask application
ii  python3-flaskext.wtf                           1.1.1-1                               all          Simple integration of Flask and WTForms (Python 3)
ii  python3-flatbuffers                            2.0.8+dfsg1-6                         all          efficient cross platform serialization library - Python bindings
ii  python3-fonttools                              4.38.0-1+b1                           amd64        Converts OpenType and TrueType fonts to and from XML (Python 3 Library)
ii  python3-frozenlist                             1.4.0-1                               amd64        list-like structure which implements collections.abc.MutableSequence
ii  python3-fs                                     2.4.16-2                              all          Python filesystem abstraction
ii  python3-future                                 0.18.2-6                              all          Clean single-source support for Python 3 and 2 - Python 3.x
ii  python3-gast                                   0.5.2-2                               all          compatibility layer for the AST of various Python versions (Python3 version)
ii  python3-gdal                                   3.7.1+dfsg-1+b2                       amd64        Python 3 bindings to the Geospatial Data Abstraction Library
ii  python3-gexf                                   0.2.2+git20150530-0kali2              all          library to generate gexf file format (Python 3)
ii  python3-gi                                     3.44.1-2                              amd64        Python 3 bindings for gobject-introspection libraries
ii  python3-git                                    3.1.30-1                              all          Python library to interact with Git repositories
ii  python3-gitdb                                  4.0.9-2                               all          pure-Python git object database (Python 3)
ii  python3-gnupg                                  0.4.9-1                               all          Python wrapper for the GNU Privacy Guard (Python 3.x)
ii  python3-gpg                                    1.18.0-3+b1                           amd64        Python interface to the GPGME GnuPG encryption library (Python 3)
ii  python3-greenlet                               2.0.2-1                               amd64        Lightweight in-process concurrent programming (python3)
ii  python3-gvm                                    23.4.2-0kali1                         all          Greenbone Vulnerability Management Python Library (Python 3)
ii  python3-h11                                    0.14.0-1                              all          Pure-Python, bring-your-own-I/O implementation of HTTP/1.1 (Python 3)
ii  python3-h2                                     4.1.0-4                               all          Pure-Python3 HTTP/2 State-Machine based protocol implementation in Python
ii  python3-hamcrest                               2.0.3-2                               all          Hamcrest framework for matcher objects (Python 3)
ii  python3-hiredis                                1.0.1-2+b3                            amd64        redis protocol reader for Python using hiredis
ii  python3-hpack                                  4.0.0-2                               all          Pure-Python3 HTTP/2 header encoding (HPACK)
ii  python3-html2text                              2020.1.16-2                           all          Python module for converting HTML to Markdown text (Python3 version)
ii  python3-html5lib                               1.1-3                                 all          HTML parser/tokenizer based on the WHATWG HTML5 specification
ii  python3-httpagentparser                        1.9.1-0kali1                          all          Python HTTP Agent Parser (Python 3)
ii  python3-httpcore                               0.17.3-1                              all          minimal low-level HTTP client
ii  python3-httplib2                               0.20.4-3                              all          comprehensive HTTP client library written for Python3
ii  python3-httpx                                  0.23.3-1                              all          next generation HTTP client
ii  python3-humanize                               4.4.0-1                               all          Python Humanize library (Python 3)
ii  python3-hupper                                 1.10.3-1                              all          Integrated process monitor for developing servers. (Python 3)
ii  python3-hyperframe                             6.0.0-1                               all          Pure-Python3 HTTP/2 framing code
ii  python3-hyperlink                              21.0.0-5                              all          Immutable, Pythonic, correct URLs.
ii  python3-ibus-1.0                               1.5.29~rc1-1                          all          Intelligent Input Bus - introspection overrides for Python (Python 3)
ii  python3-idna                                   3.3-2                                 all          Python IDNA2008 (RFC 5891) handling (Python 3)
ii  python3-impacket                               0.11.0-1                              all          Python3 module to easily build and dissect network protocols
ii  python3-importlib-metadata                     4.12.0-1                              all          library to access the metadata for a Python package - Python 3.x
ii  python3-incremental                            21.3.0-3                              all          Library for versioning Python projects
ii  python3-inflect                                7.0.0-1                               all          Generate plurals, singular nouns, ordinals, indefinite articles (Python 3)
ii  python3-iniconfig                              1.1.1-2                               all          brain-dead simple parsing of ini files
ii  python3-invoke                                 2.0.0-1                               all          Pythonic task execution - Python 3.x
ii  python3-ipwhois                                1.2.0-0kali1                          all          Retrieve and parse whois data for IP addresses (Python 3)
ii  python3-ipy                                    1:1.01-2                              all          Python3 module for handling IPv4 and IPv6 addresses and networks
ii  python3-ipython                                8.14.0-1                              all          Enhanced interactive Python shell (Python 3 version)
ii  python3-itsdangerous                           2.1.2-3                               all          Various helpers to pass trusted data to untrusted environment - Python 3.x
ii  python3-jaraco.collections                     4.2.0-1                               all          models and classes to supplement the stdlib 'collections' module
ii  python3-jaraco.context                         4.3.0-1                               all          jaraco contextlib extensions
ii  python3-jaraco.functools                       3.7.0-1                               all          additional functools in the spirit of stdlib's functools
ii  python3-jaraco.text                            3.11.1-1                              all          jaraco text manipulation functions
ii  python3-jedi                                   0.18.2-1                              all          autocompletion tool for Python 3
ii  python3-jinja2                                 3.1.2-1                               all          small but fast and easy to use stand-alone template engine
ii  python3-jose                                   3.3.0+dfsg-4                          all          JavaScript Object Signing and Encryption (JOSE) for Python
ii  python3-jq                                     1.2.1-0kali1+b2                       amd64        Python bindings for jq (Python 3)
ii  python3-json-pointer                           2.3-3                                 all          resolve JSON pointers - Python 3.x
ii  python3-jsonschema                             4.10.3-2                              all          An(other) implementation of JSON Schema (Draft 3, 4, 6, 7)
ii  python3-jwt                                    2.7.0-1                               all          Python 3 implementation of JSON Web Token
ii  python3-kaitaistruct                           0.10-1                                all          Kaitai Struct declarative parser generator for binary data (python3)
ii  python3-kismetcapturebtgeiger                  2023.07.R1-0kali2                     all          Kismet BTLE geiger datasource
ii  python3-kismetcapturefreaklabszigbee           2023.07.R1-0kali2                     all          Kismet Freaklabs Zigbee datasource
ii  python3-kismetcapturertl433                    2023.07.R1-0kali2                     all          Kismet rtl_433 datasource
ii  python3-kismetcapturertladsb                   2023.07.R1-0kali2                     all          Kismet rtladsb datasource
ii  python3-kismetcapturertlamr                    2023.07.R1-0kali2                     all          Kismet rtlamr datasource
ii  python3-kiwisolver                             1.4.4-1+b1                            amd64        fast implementation of the Cassowary constraint solver - Python 3.X
ii  python3-ldap3                                  2.9.1-2                               all          Pure Python LDAP client library
ii  python3-ldapdomaindump                         0.9.3-2                               all          Active Directory information dumper via LDAP (Python 3)
ii  python3-ldb                                    2:2.7.2+samba4.18.6+dfsg-1            amd64        Python 3 bindings for LDB
ii  python3-lib2to3                                3.11.5-1                              all          Interactive high-level object-oriented language (lib2to3)
ii  python3-limits                                 2.8.0-1                               all          Rate limiting utilities for Python
ii  python3-llvmlite                               0.40.1-1                              amd64        LLVM Python 3 binding for writing JIT compilers
ii  python3-log-symbols                            0.0.14-3                              all          Colored symbols for various log levels for Python3
ii  python3-louis                                  3.26.0-1                              all          Python bindings for liblouis
ii  python3-lsassy                                 3.1.6-0kali1                          all          Extract credentials from lsass remotely (Python 3)
ii  python3-lxml:amd64                             4.9.3-1                               amd64        pythonic binding for the libxml2 and libxslt libraries
ii  python3-lz4                                    4.0.2+dfsg-1+b2                       amd64        Python interface to the lz4 compression library (Python 3)
ii  python3-macholib                               1.16.2+ds0-1                          all          module for Mach-O header analysis and editing (Python 3 interface)
ii  python3-magic                                  2:0.4.27-2                            all          python3 interface to the libmagic file type identification library
ii  python3-mako                                   1.2.4+ds-2                            all          fast and lightweight templating for the Python 3 platform
ii  python3-markdown                               3.4.4-1                               all          text-to-HTML conversion library/tool (Python 3 version)
ii  python3-markdown-it                            3.0.0-2                               all          Python port of markdown-it and some its associated plugins
ii  python3-markupsafe                             2.1.3-1                               amd64        HTML/XHTML/XML string library
ii  python3-marshmallow                            3.18.0-1                              all          Lightweight library for converting complex datatypes
ii  python3-marshmallow-sqlalchemy                 0.29.0-3                              all          SQLAlchemy integration with marshmallow (Python3)
ii  python3-masky                                  0.1.1-0kali2                          all          library to remotely dump domain users' credentials thanks to an ADCS (Python 3)
ii  python3-matplotlib                             3.6.3-1+b1                            amd64        Python based plotting system in a style similar to Matlab (Python 3)
ii  python3-matplotlib-inline                      0.1.6-2                               all          Matplotlib backend for inline use in IPython and Jupyter
ii  python3-mdurl                                  0.1.2-1                               all          Python port of the JavaScript mdurl package
ii  python3-mechanize                              1:0.4.8+pypi-5                        all          stateful programmatic web browsing
ii  python3-minidump                               0.0.21-0kali1                         all          library to parse and read Microsoft minidump file format (Python 3)
ii  python3-minikerberos                           0.4.0-0kali1                          all          Kerberos manipulation library in pure Python (Python 3)
ii  python3-minimal                                3.11.4-5+b1                           amd64        minimal subset of the Python language (default python3 version)
ii  python3-mistune0                               0.8.4-2                               all          Markdown parser for Python 3
ii  python3-mitmproxy-rs                           0.2.2-0kali2                          amd64        mitmproxy's Rust bits (Python 3)
ii  python3-mitmproxy-wireguard                    0.1.18-0kali2                         amd64        proxy any device that can be configured as a WireGuard client (Python 3)
ii  python3-mnemonic                               0.19-3                                all          Implementation of Bitcoin BIP-0039 (Python 3)
ii  python3-more-itertools                         10.1.0-1                              all          library with routines for operating on iterables, beyond itertools (Python 3)
ii  python3-mpmath                                 1.2.1-2                               all          library for arbitrary-precision floating-point arithmetic (Python3)
ii  python3-msgpack                                1.0.3-3                               amd64        Python 3 implementation of MessagePack format
ii  python3-msldap                                 0.4.7-0kali1                          all          LDAP library for auditing MS AD (Python 3)
ii  python3-multidict                              6.0.4-1+b1                            amd64        multidict implementation (Python library)
ii  python3-multipart                              0.0.5-3                               all          streaming multipart parser for Python
ii  python3-mysqldb                                1.4.6-2+b1                            amd64        Python interface to MySQL
ii  python3-nacl                                   1.5.0-4                               amd64        Python bindings to libsodium (Python 3)
ii  python3-nassl                                  5.0.1-0kali1                          amd64        Experimental OpenSSL wrapper for Python 3
ii  python3-neo4j                                  5.2.1-0kali1                          all          Neo4j Bolt driver for Python (Python 3)
ii  python3-neobolt                                1.7.17-0kali1                         all          Neo4j Bolt Connector for Python 3
ii  python3-neotime                                1.7.4-0kali1                          all          Nanosecond-precision temporal types for Python (Python 3)
ii  python3-netaddr                                0.8.0-2                               all          manipulation of various common network address notations (Python 3)
ii  python3-netifaces:amd64                        0.11.0-2+b1                           amd64        portable network interface information - Python 3.x
ii  python3-networkx                               2.8.8-1                               all          tool to create, manipulate and study complex networks (Python3)
ii  python3-newt:amd64                             0.52.23-1+b1                          amd64        NEWT module for Python3
ii  python3-nplusone                               1.0.0-0kali4                          all          Auto-detecting the n+1 queries problem in Python 3
ii  python3-ntlm-auth                              1.4.0-2                               all          NTLM low-level Python library
ii  python3-numba                                  0.56.4+dfsg-2                         amd64        native machine code compiler for Python 3
ii  python3-numexpr                                2.8.5-3                               amd64        Fast numerical array expression evaluator for Python 3 and NumPy
ii  python3-numpy                                  1:1.24.2-1                            amd64        Fast array facility to the Python 3 language
ii  python3-odf                                    1.4.2-2                               all          Python3 API to manipulate OpenDocument files
ii  python3-olefile                                0.46-3                                all          Python module to read/write MS OLE2 files
ii  python3-opengl                                 3.1.6+dfsg-4                          all          Python bindings to OpenGL (Python 3)
ii  python3-openpyxl                               3.0.9-2                               all          Python 3 module to read/write OpenXML xlsx/xlsm files
ii  python3-openssl                                23.0.0-1                              all          Python 3 wrapper around the OpenSSL library
ii  python3-ordered-set                            4.1.0-1                               all          ordered set implementation for Python 3
ii  python3-oscrypto                               1.3.0-4                               all          cryptography library for Python
ii  python3-packaging                              23.1-1                                all          core utilities for python3 packages
ii  python3-paho-mqtt                              1.6.1-1                               all          MQTT client class (Python 3)
ii  python3-pandas                                 1.5.3+dfsg-6                          all          data structures for "relational" or "labeled" data
ii  python3-pandas-lib:amd64                       1.5.3+dfsg-6                          amd64        low-level implementations and bindings for pandas
ii  python3-paramiko                               2.12.0-2                              all          Make ssh v2 connections (Python 3)
ii  python3-parso                                  0.8.3-1                               all          Python parser that supports error recovery - Python 3.X
ii  python3-passlib                                1.7.4-3                               all          comprehensive password hashing framework
ii  python3-paste                                  3.5.2+repack-1                        all          tools for using a Web Server Gateway Interface stack - Python 3.x
ii  python3-pastedeploy                            3.0.1-5                               all          load, configure, and compose WSGI applications and servers (Python 3)
ii  python3-pastedeploy-tpl                        3.0.1-5                               all          load, configure, compose WSGI applications and servers (Templates)
ii  python3-pastescript                            3.2.1-1                               all          PasteScript is a pluggable command-line tool (Python3)
ii  python3-pcapy                                  0.11.5-3+b2                           amd64        Python interface to the libpcap packet capture library (Python 3)
ii  python3-pefile                                 2023.2.7-1                            all          Portable Executable (PE) parsing module for Python
ii  python3-pendulum                               2.1.2-4                               amd64        Python datetimes made easy
ii  python3-pexpect                                4.8.0-4                               all          Python 3 module for automating interactive applications
ii  python3-pgspecial                              2.0.1-2                               all          Meta-commands handler for Postgres Database (Python 3)
ii  python3-phonenumbers                           8.12.57-4                             all          parsing/formatting/validating phone numbers - Python 3
ii  python3-pickleshare                            0.7.5-5                               all          File system based database that uses Python pickles for Python 3
ii  python3-pil:amd64                              10.0.0-1                              amd64        Python Imaging Library (Python3)
ii  python3-pil.imagetk:amd64                      10.0.0-1                              amd64        Python Imaging Library - ImageTk Module (Python3)
ii  python3-pip                                    23.2+dfsg-1                           all          Python package installer
ii  python3-pip-whl                                23.2+dfsg-1                           all          Python package installer (pip wheel)
ii  python3-pkg-resources                          67.8.0-1                              all          Package Discovery and Resource Access using pkg_resources
ii  python3-plaster                                1.0-3                                 all          Python multi-format configuration file loader interface - Python 3.x module
ii  python3-plaster-pastedeploy                    0.5-5                                 all          PasteDeploy configuration format plugin for plaster - Python 3.x module
ii  python3-platformdirs                           3.10.0-1                              all          determining appropriate platform-specific directories (Python 3)
ii  python3-pluggy                                 1.3.0-1                               all          plugin and hook calling mechanisms for Python - 3.x
ii  python3-pluginbase                             1.0.1-1                               all          Support library for building plugins systems (Python 3)
ii  python3-ply                                    3.11-5                                all          Lex and Yacc implementation for Python3
ii  python3-png                                    0.20220715.0-1                        all          Pure Python PNG Reader/Writer (Python 3)
ii  python3-portend                                3.1.0-1                               all          Python module to monitor TCP port states
ii  python3-pptx                                   0.6.18-0kali1                         all          Create Open XML PowerPoint documents in Python (Python 3)
ii  python3-prettytable                            3.6.0-1                               all          library to represent tabular data in visually appealing ASCII tables (Python3)
ii  python3-prompt-toolkit                         3.0.39-2                              all          library for building interactive command lines (Python 3)
ii  python3-protobuf                               3.21.12-7                             amd64        Python 3 bindings for protocol buffers
ii  python3-psutil                                 5.9.4-1+b1                            amd64        module providing convenience functions for managing processes (Python3)
ii  python3-psycopg                                3.1.10-1                              all          PostgreSQL database adapter for Python 3
ii  python3-psycopg2                               2.9.6-3                               amd64        Python 3 module for PostgreSQL
ii  python3-ptyprocess                             0.7.0-5                               all          Run a subprocess in a pseudo terminal from Python 3
ii  python3-publicsuffix2                          2.20191221-3                          all          Python3 module to get a domain suffix using the Public Suffix List
ii  python3-publicsuffixlist                       0.9.3-0kali1                          all          Public Suffix List parser implementation (Python 3)
ii  python3-pure-eval                              0.2.2-1                               all          Safely evaluate Python AST nodes without side effects
ii  python3-py-sneakers                            1.0.1-0kali1                          all          Port of the libnms C library (Python 3)
ii  python3-pyasn1                                 0.4.8-4                               all          ASN.1 library for Python (Python 3 module)
ii  python3-pyasn1-modules                         0.2.8-1                               all          Collection of protocols modules written in ASN.1 language (Python 3)
ii  python3-pyatspi                                2.46.0-2                              all          Assistive Technology Service Provider Interface - Python3 bindings
ii  python3-pycares                                4.3.0-2                               amd64        Python interface for c-ares (Python 3)
ii  python3-pycparser                              2.21-1                                all          C parser in Python 3
ii  python3-pycryptodome                           3.11.0+dfsg1-4                        amd64        cryptographic Python library (Python 3)
ii  python3-pycurl                                 7.45.2-5                              amd64        Python bindings to libcurl (Python 3)
ii  python3-pydantic                               1.10.4-1                              all          Data validation and settings management using Python type hinting
ii  python3-pydispatch                             2.0.5-5                               all          Python 3 signal dispatching mechanism
ii  python3-pydot                                  1.4.2-1                               all          Python interface to Graphviz's dot (Python 3)
ii  python3-pyee                                   9.0.4-1                               all          Python 3 port of node.js's EventEmitter to Python
ii  python3-pyexploitdb                            0.2.6-0kali1                          all          library to fetch the most recent exploit-database (Python 3)
ii  python3-pyfiglet                               0.8.0+dfsg-3                          all          Python 3 port of the FIGlet specification
ii  python3-pygame                                 2.5.1-2                               amd64        SDL bindings for games development (Python 3)
ii  python3-pygments                               2.15.1+dfsg-1                         all          syntax highlighting package written in Python 3
ii  python3-pygraphviz                             1.7-3+b4                              amd64        Python interface to the Graphviz graph layout and visualization package (Python 3)
ii  python3-pyinotify                              0.9.6-2                               all          simple Linux inotify Python bindings
ii  python3-pyinstaller                            3.5-0kali2                            all          Converts (packages) Python programs into stand-alone executables.
ii  python3-pylnk3                                 0.4.2-0kali2                          all          Python library for reading and writing Windows shortcut files (.lnk)
ii  python3-pylsqpack                              0.3.17-2                              amd64        Python wrapper for the ls-qpack QPACK library
ii  python3-pyminifier                             2.1-0kali2                            all          Python code minifier, obfuscator, and compressor (Python 3)
ii  python3-pymssql                                2.2.2-1+b3                            amd64        Python database access for MS SQL server and Sybase - Python 3
ii  python3-pymysql                                1.0.2-2                               all          Pure-Python MySQL Driver - Python 3.x
ii  python3-pyotp                                  2.6.0-3                               all          Python One Time Password Library
ii  python3-pyparsing                              3.1.1-1                               all          alternative to creating and executing simple grammars - Python 3.x
ii  python3-pypdf2                                 2.12.1-3                              all          Pure-Python library built as a PDF toolkit (Python 3)
ii  python3-pyperclip                              1.8.2-2                               all          Cross-platform clipboard module for Python3
ii  python3-pyppeteer                              1.0.2-0kali1                          all          port of puppeteer JavaScript chromium browser automation library (Python 3)
ii  python3-pypsrp                                 0.8.1-0kali1                          all          PowerShell Remoting Protocol for Python (Python 3)
ii  python3-pypykatz                               0.6.6-0kali1                          all          Mimikatz implementation in pure Python (Python 3)
ii  python3-pyqrcode                               1.2.1-4                               all          Python 3 module to generate QR Codes
ii  python3-pyqt5                                  5.15.9+dfsg-2                         amd64        Python 3 bindings for Qt5
ii  python3-pyqt5.qtopengl                         5.15.9+dfsg-2                         amd64        Python 3 bindings for Qt5's OpenGL module
ii  python3-pyqt5.sip                              12.12.2-1                             amd64        runtime module for Python extensions using SIP
ii  python3-pyqt6                                  6.5.2-1                               amd64        Python bindings for Qt 6
ii  python3-pyqt6.sip                              13.5.2-1                              amd64        runtime module for Python extensions using SIP
ii  python3-pyqtgraph                              0.13.3-1                              all          Scientific Graphics and GUI Library for Python 3
ii  python3-pyramid                                2.0+dfsg-2                            all          Pyramid web application framework, a Pylons project - Python 3.x version
ii  python3-pyrsistent:amd64                       0.18.1-1+b3                           amd64        persistent/functional/immutable data structures for Python
ii  python3-pyshodan                               0.2.3+git20220608-0kali1              all          script for interacting with Shodan API (Python 3)
ii  python3-pysimplesoap                           1.16.2-5                              all          simple and lightweight SOAP Library (Python 3)
ii  python3-pysmi                                  0.3.2-3                               all          SNMP SMI/MIB Parser
ii  python3-pysnmp4                                4.4.12-2                              all          Python SNMP library for agents and managers (Python 3 module)
ii  python3-pytest                                 7.4.0-2                               all          Simple, powerful testing in Python3
ii  python3-pythran                                0.11.0+ds-8                           amd64        ahead of time compiler for Python
ii  python3-pytzdata                               2020.1+dfsg-7                         all          timezone database for Python
ii  python3-pyvnc                                  0.1-0kali4                            all          client library for interacting with a VNC session (Python 3)
ii  python3-pywerview                              0.3.3-0kali1                          all          (partial) Python rewriting of PowerSploit's PowerView (Python 3)
ii  python3-qrcode                                 7.4.2-3                               all          QR Code image generator library - Python 3.x
ii  python3-quamash                                0.6.1~dfsg-2                          all          implementation of the PEP 3156 event-loop with Qt
ii  python3-redis                                  4.3.4-3                               all          Persistent key-value database with network interface (Python 3 library)
ii  python3-reportbug                              12.0.0                                all          Python modules for interacting with bug tracking systems
ii  python3-repoze.lru                             0.7-3                                 all          tiny LRU cache implementation and decorator for Python 3
ii  python3-requests                               2.31.0+dfsg-1                         all          elegant and simple HTTP library for Python3, built for human beings
ii  python3-requests-ntlm                          1.1.0-3                               all          Adds support for NTLM authentication to the requests library
ii  python3-requests-toolbelt                      1.0.0-2                               all          Utility belt for advanced users of python3-requests
ii  python3-retrying                               1.3.3-4                               all          simplifies the task of adding retry behavior - Python 3.x
ii  python3-rfc3986                                1.5.0-3                               all          validating URI references per RFC 3986 - Python 3.x
ii  python3-rfc3987                                1.3.8-2                               all          Parsing and validation of URIs (RFC 3986) and IRIs (RFC 3987)
ii  python3-rich                                   13.3.1-2                              all          render rich text, tables, progress bars, syntax highlighting, markdown and more
ii  python3-routes                                 2.5.1-3                               all          Routing Recognition and Generation Tools for Python 3
ii  python3-rq                                     1.15-1                                all          Simple job queues for Python 3
ii  python3-rsa                                    4.8-1                                 all          Pure-Python RSA implementation (Python 3)
ii  python3-ruamel.yaml                            0.17.21-1                             all          roundtrip YAML parser/emitter (Python 3 module)
ii  python3-ruamel.yaml.clib:amd64                 0.2.7-1+b2                            amd64        C version of reader, parser and emitter for ruamel.yaml
ii  python3-samba                                  2:4.18.6+dfsg-1                       amd64        Python 3 bindings for Samba
ii  python3-scapy                                  2.5.0+dfsg-2                          all          Packet generator/sniffer and network scanner/discovery (Python 3)
ii  python3-scipy                                  1.10.1-2                              amd64        scientific tools for Python 3
ii  python3-secretsocks                            0.9.1+git20221130.43c0bed-0kali1      all          Socks server for tunneling connections (Python 3)
ii  python3-secure                                 0.3.0-0kali1                          all          Secure lock headers and cookies for Python web frameworks (Python 3)
ii  python3-serial                                 3.5-1.1                               all          pyserial - module encapsulating access for the serial port
ii  python3-service-identity                       23.1.0-1                              all          Service identity verification for pyOpenSSL (Python 3 module)
ii  python3-setproctitle:amd64                     1.3.2-1                               amd64        Setproctitle implementation for Python 3
ii  python3-setuptools                             67.8.0-1                              all          Python3 Distutils Enhancements
ii  python3-setuptools-whl                         67.8.0-1                              all          Python Distutils Enhancements (wheel package)
ii  python3-sgmllib3k                              1.0.0-4                               all          Python 3 port of Python 2's sgmllib
ii  python3-shodan                                 1.28.0-2                              all          Official Python library for Shodan (Python 3)
ii  python3-simple-rest-client                     1.1.3-0kali2                          all          Simple REST client (Python 3)
ii  python3-simplejson                             3.19.1-1                              amd64        simple, fast, extensible JSON encoder/decoder for Python 3.x
ii  python3-simplekv                               0.14.1-0kali1                         all          simple key-value store for binary data (Python 3)
ii  python3-six                                    1.16.0-4                              all          Python 2 and 3 compatibility library
ii  python3-slowapi                                0.1.4-0kali1                          all          Rate limiting library for Starlette and FastAPI (Python 3)
ii  python3-slugify                                4.0.0-2                               all          Python module that provides tools for slugifying unicode strings
ii  python3-smbc                                   1.0.23-2+b4                           amd64        Python 3 bindings for the Samba client library
ii  python3-smmap                                  5.0.0-1                               all          pure Python implementation of a sliding window memory map manager
ii  python3-snappy                                 0.5.3-1.2+b1                          amd64        snappy compression library from Google - Python 3.x
ii  python3-sniffio                                1.2.0-1                               all          detect which async Python library is in use
ii  python3-socketio                               5.7.2-2                               all          python3 implementation of the Socket.IO realtime client and server
ii  python3-socks                                  1.7.1+dfsg-1                          all          Python 3 SOCKS client module
ii  python3-sortedcontainers                       2.4.0-2                               all          sorted container types: SortedList, SortedDict, and SortedSet (Python 3)
ii  python3-soupsieve                              2.4.1-2                               all          modern CSS selector implementation for BeautifulSoup (Python 3)
ii  python3-speechd                                0.11.5-1                              all          Python interface to Speech Dispatcher
ii  python3-spinners                               0.0~git20200220.a73d561-3             all          spinners library of terminal for python3
ii  python3-spnego                                 0.8.0-0kali1                          all          Library to handle SPNEGO authentication (Python 3)
ii  python3-sqlalchemy                             1.4.47+ds1-1                          all          SQL toolkit and Object Relational Mapper for Python 3
ii  python3-sqlalchemy-ext:amd64                   1.4.47+ds1-1                          amd64        SQL toolkit and Object Relational Mapper for Python3 - C extension
ii  python3-sqlalchemy-schemadisplay               1.3-0kali3                            all          Turn SQLAlchemy DB Model into a graph (Python 3)
ii  python3-sqlalchemy-utc                         0.14.0-2                              all          SQLAlchemy type to store timezone aware datetime values
ii  python3-sqlparse                               0.4.2-1                               all          non-validating SQL parser for Python 3
ii  python3-stack-data                             0.6.2-3                               all          Better tracebacks for Python
ii  python3-starlette                              0.30.0-1                              all          ASGI library ideal for building high performance asyncio services
ii  python3-status                                 1.0.1-0kali1                          all          HTTP Status for Humans (Python 3)
ii  python3-stone                                  3.3.1-2                               all          interface description language (IDL) for APIs (Python3 version)
ii  python3-sympy                                  1.12-3                                all          Computer Algebra System (CAS) in Python (Python 3)
ii  python3-syslog-rfc5424-formatter               1.2.3-0kali1                          all          Python logging formatter for emitting RFC5424 Syslog messages (Python 3)
ii  python3-tables                                 3.7.0-9                               all          Hierarchical database for Python3 based on HDF5
ii  python3-tables-lib                             3.7.0-9                               amd64        Hierarchical database for Python3 based on HDF5 (extension)
ii  python3-tabulate                               0.8.9-1                               all          pretty-print tabular data in Python3
ii  python3-talloc:amd64                           2.4.1-2                               amd64        hierarchical pool based memory allocator - Python3 bindings
ii  python3-tdb                                    1.4.9-2                               amd64        Python3 bindings for TDB
ii  python3-tempita                                0.5.2-7                               all          very small text templating language - Python 3.x
ii  python3-tempora                                5.3.0-1                               all          Python objects and routines pertaining to date and time
ii  python3-termcolor                              1.1.0-4                               all          ANSII Color formatting for output in terminal - Python 3.x
ii  python3-terminaltables                         3.1.10-2                              all          Python library for printing tables to the console
ii  python3-tinycss2                               1.2.1-2                               all          Low-level CSS parser (Python3 version)
ii  python3-tk:amd64                               3.11.5-1                              amd64        Tkinter - Writing Tk applications with Python 3.x
ii  python3-tld                                    0.11.11-4                             all          Extract the top level domain (TLD) from a given URL (Python 3)
ii  python3-tls-parser                             1.2.2-0kali1                          all          Small library to parse TLS records (Python 3)
ii  python3-tornado                                6.3.2-1                               amd64        scalable, non-blocking web server and tools - Python 3 package
ii  python3-tqdm                                   4.64.1-1                              all          fast, extensible progress bar for Python 3 and CLI tool
ii  python3-traitlets                              5.5.0-2                               all          Lightweight Traits-like package for Python 3
ii  python3-translationstring                      1.4-2                                 all          Utility library for i18n relied on by various Repoze packages - Python 3.x
ii  python3-trie                                   0.4.0+ds-1                            all          Pure Python implementation of the trie data structure (Python 3)
ii  python3-twisted                                22.4.0-4                              all          Event-based framework for internet applications
ii  python3-txaio                                  21.2.1-2                              all          compatibility API between asyncio/Twisted/Trollius - Python 3.x
ii  python3-typing-extensions                      4.7.1-2                               all          Backported and Experimental Type Hints for Python
ii  python3-tz                                     2023.3-4                              all          Python3 version of the Olson timezone database
ii  python3-tzlocal                                5.0.1-1                               all          tzinfo object for the local timezone
ii  python3-u-msgpack                              2.3.0-3                               all          Python3 MessagePack serializer and deserializer
ii  python3-ubjson                                 0.16.1-2+b3                           amd64        Universal Binary JSON encoder/decoder for Python 3
ii  python3-ufolib2                                0.14.0+dfsg1-1                        all          Unified Font Object (UFO) fonts library
ii  python3-ujson:amd64                            5.8.0-1                               amd64        ultra fast JSON encoder and decoder for Python 3
ii  python3-unicodecsv                             0.14.1-7                              all          drop-in replacement for Pythons CSV module with Unicode support
ii  python3-unicrypto                              0.0.10-0kali1                         all          Unified interface for some crypto algos (Python 3)
ii  python3-unidecode                              1.3.6-1                               all          ASCII transliterations of Unicode text (Python 3 module)
ii  python3-uritemplate                            4.1.1-3                               all          implementation of RFC6570 - Python 3.x
ii  python3-urllib3                                1.26.16-1                             all          HTTP library with thread-safe connection pooling for Python3
ii  python3-urwid                                  2.1.2-4+b1                            amd64        curses-based UI/widget library for Python 3
ii  python3-uvicorn                                0.23.2+dfsg-2                         all          ASGI server implementation, using uvloop and httptools (Python3 version)
ii  python3-uvloop                                 0.17.0+ds1-2+b2                       amd64        fast implementation of asyncio event loop on top of libuv
ii  python3-validators                             0.20.0-2                              all          Python Data Validation for Humans (Python 3)
ii  python3-venusian                               3.0.0-2                               all          library for deferring decorator actions
ii  python3-virtualenv                             20.24.1+ds-1                          all          Python virtual environment creator
ii  python3-wcwidth                                0.2.5+dfsg1-1.1                       all          determine printable width of a string on a terminal
ii  python3-webargs                                8.0.1-2                               all          Python library for parsing and validating HTTP request arguments (Python 3)
ii  python3-webcolors                              1.11.1-1                              all          python3 library of color names and value formats
ii  python3-webencodings                           0.5.1-5                               all          Python implementation of the WHATWG Encoding standard
ii  python3-webob                                  1:1.8.6-3                             all          Python module providing WSGI request and response objects (Python 3)
ii  python3-websocket                              1.2.3-1                               all          WebSocket client library - Python 3.x
ii  python3-websockets                             10.4-1                                all          implementation of the WebSocket Protocol (RFC 6455)
ii  python3-websockify                             0.10.0+dfsg1-5                        amd64        WebSockets support for any application/server - Python 3
ii  python3-werkzeug                               2.2.2-3                               all          collection of utilities for WSGI applications (Python 3.x)
ii  python3-wheel                                  0.41.0-2                              all          built-package format for Python
ii  python3-wheel-whl                              0.41.0-2                              all          built-package format for Python (wheel wheel)
ii  python3-whois                                  0.8-1                                 all          Python module for retrieving WHOIS information
ii  python3-winacl                                 0.1.7-0kali1                          all          Platform independent lib for interfacing windows security descriptors
ii  python3-wrapt                                  1.14.1-5                              amd64        decorators, wrappers and monkey patching. - Python 3.x
ii  python3-wsaccel                                0.6.3-3                               amd64        Accelerator for ws4py and AutobahnPython - Python 3.x
ii  python3-wsproto                                1.2.0-1                               all          WebSockets state-machine based protocol implementation (Python3)
ii  python3-wtforms                                3.0.1-2                               all          Flexible forms validation and rendering library for Python 3
ii  python3-xdg                                    0.28-2                                all          Python 3 library to access freedesktop.org standards
ii  python3-xlrd                                   1.2.0-3                               all          extract data from Microsoft Excel spreadsheet files (Python3 version)
ii  python3-xlsxwriter                             3.0.2-2                               all          Python 3 module for creating Excel XLSX files
ii  python3-xlutils                                2.0.0-0kali3                          all          Utilities for working with Excel files (Python 3)
ii  python3-xlwt                                   1.3.0-4                               all          module for writing Microsoft Excel spreadsheet files - Python 3.x
ii  python3-xmltodict                              0.13.0-1                              all          Makes working with XML feel like you are working with JSON (Python 3)
ii  python3-yaml                                   6.0.1-1                               amd64        YAML parser and emitter for Python3
ii  python3-yara                                   4.3.1-1                               amd64        Python 3 bindings for YARA
ii  python3-yarl                                   1.8.2-1+b1                            amd64        yet another URL library for Python
ii  python3-yaswfp                                 0.9.3-2                               all          Yet Another SWF Parser (Python 3)
ii  python3-zapv2                                  0.0.20-0kali1                         all          implementation to access the OWASP ZAP API (Python 3)
ii  python3-zc.lockfile                            2.0-4                                 all          Basic inter-process locks for Python 3
ii  python3-zipp                                   1.0.0-6                               all          pathlib-compatible Zipfile object wrapper - Python 3.x
ii  python3-zlib-wrapper                           0.1.3-0kali3                          all          Wrapper around zlib with custom header crc32 (Python 3)
ii  python3-zope.deprecation                       4.4.0-5                               all          Zope Deprecation Infrastructure
ii  python3-zope.interface                         5.5.2-1+b1                            amd64        Interfaces for Python3
ii  python3-zstandard                              0.21.0-1                              amd64        Python bindings for interfacing with Zstandard library
ii  python3.11                                     3.11.4-1                              amd64        Interactive high-level object-oriented language (version 3.11)
ii  python3.11-dev                                 3.11.4-1                              amd64        Header files and a static library for Python (v3.11)
ii  python3.11-minimal                             3.11.4-1                              amd64        Minimal subset of the Python language (version 3.11)
ii  qsslcaudit                                     0.8.3-0kali1                          amd64        test SSL/TLS clients how secure they are
ii  qt5-gtk-platformtheme:amd64                    5.15.10+dfsg-3                        amd64        Qt 5 GTK+ 3 platform theme
ii  qt5ct                                          1.5-1+b5                              amd64        Qt5 Configuration Utility
ii  qt6-base-dev-tools                             6.4.2+dfsg-18                         amd64        Qt 6 base development programs
ii  qt6-gtk-platformtheme:amd64                    6.4.2+dfsg-18                         amd64        Qt 6 GTK+ 3 platform theme
ii  qt6-qpa-plugins:amd64                          6.4.2+dfsg-18                         amd64        Qt 6 QPA plugins
ii  qt6-translations-l10n                          6.4.2-1                               all          translations for Qt 6
ii  qt6-wayland:amd64                              6.4.2-3                               amd64        Qt 6 Wayland platform plugin
ii  qtbase5-dev-tools                              5.15.10+dfsg-3                        amd64        Qt 5 base development programs
ii  qtchooser                                      66-2                                  amd64        Wrapper to select between Qt development binary versions
ii  qttranslations5-l10n                           5.15.10-2                             all          translations for Qt 5
ii  qtwayland5:amd64                               5.15.10-2                             amd64        QtWayland platform plugin
ii  racc                                           1.6.2-1                               all          Ruby LALR parser generator
ii  radare2                                        5.5.0+dfsg-1+b1                       amd64        free and advanced command line hexadecimal editor
ii  rake                                           13.0.6-3                              all          ruby make-like utility
ii  rdesktop                                       1.9.0-2+b1                            amd64        RDP client for Windows NT/2000 Terminal Server and Windows Servers
ii  read-edid                                      3.0.2-1.1                             amd64        hardware information-gathering tool for VESA PnP monitors
ii  readline-common                                8.2-1.3                               all          GNU readline and history libraries, common files
ii  realmd                                         0.17.1-2                              amd64        DBus service for configuring kerberos and other online identities
ii  reaver                                         1.6.6-2                               amd64        brute force attack tool against Wi-Fi Protected Setup PIN number
ii  rebind                                         0.3.4-1kali7                          amd64        DNS rebinding tool
ii  recon-ng                                       5.1.2-1                               all          Web Reconnaissance framework written in Python
ii  recordmydesktop                                0.4.0-1+b1                            amd64        Captures audio-video data of a Linux desktop session
ii  redis-server                                   5:7.0.13-1                            amd64        Persistent key-value database with network interface
ii  redis-tools                                    5:7.0.13-1                            amd64        Persistent key-value database with network interface (client)
ii  redsocks                                       0.5-2+b3                              amd64        arbitrary TCP connection redirector to a SOCKS or HTTPS proxy server
ii  ree                                            1.4.1-2                               amd64        extract ROM extensions
ii  reportbug                                      12.0.0                                all          reports bugs in the Debian distribution
ii  responder                                      3.1.3.0-0kali3                        all          LLMNR/NBT-NS/mDNS Poisoner
ii  rfkill                                         2.39.2-1                              amd64        tool for enabling and disabling wireless devices
ii  rpcbind                                        1.2.6-6+b1                            amd64        converts RPC program numbers into universal addresses
ii  rpcsvc-proto                                   1.4.3-1                               amd64        RPC protocol compiler and definitions
ii  rpm                                            4.18.0+dfsg-1+b1                      amd64        package manager for RPM
ii  rpm-common                                     4.18.0+dfsg-1+b1                      amd64        common files for RPM
ii  rpm2cpio                                       4.18.0+dfsg-1+b1                      amd64        tool to convert RPM package to CPIO archive
ii  rsmangler                                      1.5-0kali3                            all          Wordlist mangling tool
ii  rsync                                          3.2.7-1                               amd64        fast, versatile, remote (and local) file-copying tool
ii  rtkit                                          0.13-5                                amd64        Realtime Policy and Watchdog Daemon
ii  ruby                                           1:3.1                                 amd64        Interpreter of object-oriented scripting language Ruby (default version)
ii  ruby-activesupport                             2:6.1.7.3+dfsg-2                      all          collection of utility classes used by the Rails framework
ii  ruby-addressable                               2.8.5-1                               all          alternative URI implementation for Ruby
ii  ruby-builder                                   3.2.4-2                               all          Builders for XML MarkUps
ii  ruby-bundler                                   2.3.15-2                              all          Manage Ruby application dependencies (runtime)
ii  ruby-cms-scanner                               0.13.8-0kali5                         all          CMS Scanner Framework
ii  ruby-concurrent                                1.1.6+dfsg-5                          all          modern concurrency tools for Ruby
ii  ruby-dev:amd64                                 1:3.1                                 amd64        Header files for compiling extension modules for Ruby (default version)
ii  ruby-domain-name                               0.5.20190701-1                        all          Domain Name manipulation library for Ruby
ii  ruby-erubi                                     1.12.0-1                              all          Small ERB Implementation
ii  ruby-ethon                                     0.16.0-1                              all          libcurl wrapper using ffi
ii  ruby-ffi:amd64                                 1.15.5+dfsg-1+b1                      amd64        load dynamic libraries, bind functions from within ruby code
ii  ruby-get-process-mem                           0.2.5-1                               all          get memory usage of a process in Ruby
ii  ruby-gssapi                                    1.2.0-1.1                             all          FFI wrapper around the system GSSAPI library
ii  ruby-gyoku                                     1.3.1-1.1                             all          translates Ruby hashes to XML
ii  ruby-http-cookie                               1.0.5-1                               all          Ruby library to handle HTTP Cookies based on RFC 6265
ii  ruby-httpclient                                2.8.3+git20211122.4658227-1           all          HTTP client library for ruby
ii  ruby-i18n                                      1.14.1-1                              all          I18n and localization solution for Ruby
ii  ruby-ipaddress                                 0.8.3-3                               all          Ruby library to manipulate IPv4/IPv6 addresses
ii  ruby-levenshtein                               0.2.2-3+b2                            amd64        calculates the Levenshtein distance between two sequences
ii  ruby-little-plugger                            1.1.4-1.1                             all          module that provides Gem based plugin management
ii  ruby-logging                                   2.2.2-1                               all          flexible and extendable logging library for Ruby
ii  ruby-mime                                      0.4.4-2                               all          MIME library for Ruby
ii  ruby-mime-types                                3.5.1-1                               all          guess MIME type of files
ii  ruby-mime-types-data                           3.2023.0808-1                         all          registry for information about MIME media type definitions
ii  ruby-mini-exiftool                             2.9.0-2                               all          wrapper for exiftool command-line
ii  ruby-mini-portile2                             2.8.4-1                               all          simplistic port-like solution for developers
ii  ruby-multi-json                                1.14.1-2                              all          Ruby library to provide easy switching between different JSON backends
ii  ruby-net-http-digest-auth                      1.4.1-1                               all          RFC 2617 Digest Access Authentication implementation
ii  ruby-net-telnet                                0.2.0-1                               all          telnet client library
ii  ruby-nokogiri                                  1.14.3+dfsg-2                         amd64        HTML, XML, SAX, and Reader parser for Ruby
ii  ruby-nori                                      2.6.0-1.1                             all          XML to Hash translator
ii  ruby-ntlm                                      0.6.3-2                               all          NTLM authentication client for Ruby
ii  ruby-oj:amd64                                  3.16.1-1                              amd64        fast JSON parser and serializer for Ruby
ii  ruby-opt-parse-validator                       1.9.5-0kali2                          all          Ruby OptionParser Validators
ii  ruby-pkg-config                                1.5.3-1                               all          pkg-config implementation for Ruby
ii  ruby-progressbar                               1.11.0-1                              all          text progress bar library for Ruby
ii  ruby-public-suffix                             4.0.6+ds-2                            all          Domain name parser based on the Public Suffix List
ii  ruby-rchardet                                  1.8.0-1                               all          Character encoding auto-detection for Ruby
ii  ruby-rubygems                                  3.3.15-2                              all          Package management framework for Ruby
ii  ruby-sdbm:amd64                                1.0.0-5+b1                            amd64        simple file-based key-value store with String keys and values
ii  ruby-snmp                                      1.3.2-1                               all          simple network management protocol bindings for ruby
ii  ruby-spider                                    0.5.0-4                               all          web spidering library for Ruby
ii  ruby-sqlite3                                   1.4.2-4+b3                            amd64        SQLite3 interface for Ruby
ii  ruby-typhoeus                                  1.4.0-3                               all          parallel HTTP library on top of ethon
ii  ruby-tzinfo                                    2.0.6-1                               all          Daylight-savings aware timezone library
ii  ruby-unf                                       0.1.4-2.1                             all          Wrapper library to bring Unicode Normalization Form support to Ruby
ii  ruby-unf-ext                                   0.0.7.7-1+b4                          amd64        Unicode Normalization Form support library for CRuby
ii  ruby-webrick                                   1.8.1-1                               all          HTTP server toolkit in Ruby
ii  ruby-winrm                                     2.3.6-0kali1                          all          Ruby library for Windows Remote Management
ii  ruby-winrm-fs                                  1.3.5-0kali1                          all          WinRM File System
ii  ruby-xmlrpc                                    0.3.2-2                               all          XMLRPC library for Ruby
ii  ruby-yajl                                      1.4.3-1+b2                            amd64        Ruby interface to Yajl, a JSON stream-based parser library
ii  ruby-zeitwerk                                  2.6.8-1                               all          Efficient and thread-safe constant autoloader
ii  ruby-zip                                       2.3.2-1                               all          Ruby module for reading and writing zip files
ii  ruby3.1                                        3.1.2-7                               amd64        Interpreter of object-oriented scripting language Ruby
ii  ruby3.1-dev:amd64                              3.1.2-7                               amd64        Header files for compiling extension modules for the Ruby 3.1
ii  ruby3.1-doc                                    3.1.2-7                               all          Documentation for Ruby 3.1
ii  rubygems-integration                           1.18                                  all          integration of Debian Ruby packages with Rubygems
ii  runit-helper                                   2.15.2                                all          dh-runit implementation detail
ii  rwho                                           0.17-15                               amd64        Clients to query the rwho server
ii  rwhod                                          0.17-15                               amd64        System status server
ii  rygel                                          0.42.4-1                              amd64        GNOME UPnP/DLNA services
ii  sakis3g                                        0.2.0e+git20150717-0kali2             amd64        Tool for establishing 3G connections
ii  samba                                          2:4.18.6+dfsg-1                       amd64        SMB/CIFS file, print, and login server for Unix
ii  samba-ad-provision                             2:4.18.6+dfsg-1                       all          Samba files needed for AD domain provision
ii  samba-common                                   2:4.18.6+dfsg-1                       all          common files used by both the Samba server and client
ii  samba-common-bin                               2:4.18.6+dfsg-1                       amd64        Samba common files used by both the server and the client
ii  samba-dsdb-modules:amd64                       2:4.18.6+dfsg-1                       amd64        Samba Directory Services Database
ii  samba-libs:amd64                               2:4.18.6+dfsg-1                       amd64        Samba core libraries
ii  samba-vfs-modules:amd64                        2:4.18.6+dfsg-1                       amd64        Samba Virtual FileSystem plugins
ii  samdump2                                       3.0.0-7+b1                            amd64        Dump Windows 2k/NT/XP password hashes
ii  sane-airscan                                   0.99.27-1+b1                          amd64        SANE backend for AirScan (eSCL) and WSD document scanner
ii  sane-utils                                     1.2.1-5                               amd64        API library for scanners -- utilities
ii  sbd                                            1.37-1kali4                           amd64        Secure backdoor for linux and windows
ii  scalpel                                        1.60-10                               amd64        fast filesystem-independent file recovery
ii  screen                                         4.9.1-1                               amd64        terminal multiplexer with VT100/ANSI terminal emulation
ii  scrounge-ntfs                                  0.9-10                                amd64        Data recovery program for NTFS filesystems
ii  sed                                            4.9-1                                 amd64        GNU stream editor for filtering/transforming text
ii  sendemail                                      1.56-5.2                              all          lightweight, command line SMTP email client
ii  sensible-utils                                 0.0.20                                all          Utilities for sensible alternative selection
ii  set                                            8.0.3+git20200609-0kali2              all          Social-Engineer Toolkit
ii  sgml-base                                      1.31                                  all          SGML infrastructure and SGML catalog file support
ii  sgml-data                                      2.0.11+nmu1                           all          common SGML and XML data
ii  shared-mime-info                               2.2-1                                 amd64        FreeDesktop.org shared MIME database and spec
ii  shim-helpers-amd64-signed                      1+15.7+1                              amd64        boot loader to chain-load signed boot loaders (signed by Debian)
ii  shim-signed:amd64                              1.40+15.7-1                           amd64        Secure Boot chain-loading bootloader (Microsoft-signed binary)
ii  shim-signed-common                             1.40+15.7-1                           all          Secure Boot chain-loading bootloader (common helper scripts)
ii  shim-unsigned                                  15.7-1                                amd64        boot loader to chain-load signed boot loaders under Secure Boot
ii  skipfish                                       2.10b-2kali7                          amd64        fully automated, active web application security reconnaissance tool
ii  sleuthkit                                      4.12.0+dfsg-1                         amd64        tools for forensics analysis on volume and filesystem data
ii  smartmontools                                  7.3-1+b1                              amd64        control and monitor storage systems using S.M.A.R.T.
ii  smbclient                                      2:4.18.6+dfsg-1                       amd64        command-line SMB/CIFS clients for Unix
ii  smbmap                                         1.9.1-1                               all          handy SMB enumeration tool
ii  snmp                                           5.9.4+dfsg-1                          amd64        SNMP (Simple Network Management Protocol) applications
ii  snmpcheck                                      1.9-0kali2                            all          SNMP service enumeration tool
ii  snmpd                                          5.9.4+dfsg-1                          amd64        SNMP (Simple Network Management Protocol) agents
ii  socat                                          1.7.4.4-2                             amd64        multipurpose relay for bidirectional data transfer
ii  sound-icons                                    0.1-8                                 all          Sounds for speech enabled applications
ii  sound-theme-freedesktop                        0.8-3                                 all          freedesktop.org sound theme
ii  sparta-scripts                                 1.0.4+git20190226-0kali1              all          Additional Sparta Scripts for Legion
ii  speech-dispatcher                              0.11.5-1                              amd64        Common interface to speech synthesizers
ii  speech-dispatcher-audio-plugins:amd64          0.11.5-1                              amd64        Speech Dispatcher: Audio output plugins
ii  speech-dispatcher-espeak-ng                    0.11.5-1                              amd64        Speech Dispatcher: Espeak-ng output module
ii  sphinx-rtd-theme-common                        1.3.0+dfsg-1                          all          sphinx theme from readthedocs.org (common files)
ii  spiderfoot                                     4.0-0kali3                            all          OSINT collection and reconnaissance tool
ii  spike                                          2.9-1kali9                            amd64        Network protocol fuzzer
ii  spooftooph                                     0.5.2-1kali4                          amd64        Automates spoofing or cloning Bluetooth devices
ii  sqlite3                                        3.42.0-1                              amd64        Command line interface for SQLite 3
ii  sqlitebrowser                                  3.12.2-3                              amd64        GUI editor for SQLite databases
ii  sqlmap                                         1.7.9-1                               all          automatic SQL injection tool
ii  sqsh                                           2.5.16.1-2+b1                         amd64        commandline SQL client for MS SQL and Sybase servers
ii  squashfs-tools                                 1:4.6.1-1                             amd64        Tool to create and append to squashfs filesystems
ii  ssl-cert                                       1.1.2                                 all          simple debconf wrapper for OpenSSL
ii  ssldump                                        1.5-1                                 amd64        SSLv3/TLS network protocol analyzer
ii  sslh                                           1.22c-1+b1                            amd64        Applicative protocol multiplexer
ii  sslscan                                        2.1.0-0kali1                          amd64        Fast SSL scanner
ii  sslsplit                                       0.5.5-2.1                             amd64        transparent and scalable SSL/TLS interception
ii  sslyze                                         5.1.3-0kali1                          all          Fast and full-featured SSL scanner
ii  starkiller                                     2.3.2+ds-0kali2                       all          Frontend for Powershell Empire
ii  statsprocessor                                 0.11+git20160316-3+b2                 amd64        word generator based on per-position Markov chains
ii  stunnel4                                       3:5.70-2                              amd64        Universal SSL tunnel for network daemons
ii  subversion                                     1.14.2-4+b2                           amd64        Advanced version control system
ii  sudo                                           1.9.14p2-1                            amd64        Provide limited super user privileges to specific users
ii  swaks                                          20201014.0-2                          all          SMTP command-line test tool
ii  switcheroo-control                             2.6-1+b1                              amd64        D-Bus service to check the availability of dual-GPU
ii  sysstat                                        12.6.1-1                              amd64        system performance tools for Linux
ii  system-config-printer-common                   1.5.18-1                              all          backend and the translation files for system-config-printer
ii  system-config-printer-udev                     1.5.18-1                              amd64        Utilities to detect and configure printers automatically
ii  systemd                                        254.1-3                               amd64        system and service manager
ii  systemd-dev                                    254.1-3                               all          systemd development files
ii  systemd-sysv                                   254.1-3                               amd64        system and service manager - SysV compatibility symlinks
ii  systemd-timesyncd                              254.1-3                               amd64        minimalistic service to synchronize local time with NTP servers
ii  sysvinit-utils                                 3.07-1                                amd64        System-V-like utilities
ii  t1utils                                        1.41-4                                amd64        Collection of simple Type 1 font manipulation programs
ii  tar                                            1.34+dfsg-1.2                         amd64        GNU version of the tar archiving utility
ii  tasksel                                        3.73+kali1                            all          tool for selecting tasks for installation on Debian systems
ii  tasksel-data                                   3.73+kali1                            all          official tasks used for installation of Debian systems
ii  tcl                                            8.6.13                                amd64        Tool Command Language (default version) - shell
ii  tcl-expect:amd64                               5.45.4-2+b1                           amd64        Automates interactive applications (Tcl package)
ii  tcl8.6                                         8.6.13+dfsg-2                         amd64        Tcl (the Tool Command Language) v8.6 - shell
ii  tcpdump                                        4.99.4-3                              amd64        command-line network traffic analyzer
ii  tcpick                                         0.2.1-11                              amd64        TCP stream sniffer and connection tracker
ii  tcpreplay                                      4.4.4-1                               amd64        Tool to replay saved tcpdump files at arbitrary speeds
ii  tdb-tools                                      1.4.9-2                               amd64        Trivial Database - bundled binaries
ii  testdisk                                       7.1-5+nmu1                            amd64        Partition scanner and disk recovery tool, and PhotoRec file recovery tool
ii  tex-common                                     6.18                                  all          common infrastructure for building and installing TeX
ii  tex-gyre                                       20180621-6                            all          scalable PostScript and OpenType fonts based on URW Fonts
ii  texlive-base                                   2022.20230122-3                       all          TeX Live: Essential programs and files
ii  texlive-binaries                               2022.20220321.62855-8                 amd64        Binaries for TeX Live
ii  texlive-fonts-recommended                      2022.20230122-3                       all          TeX Live: Recommended fonts
ii  texlive-latex-base                             2022.20230122-3                       all          TeX Live: LaTeX fundamental packages
ii  texlive-latex-extra                            2022.20230122-4                       all          TeX Live: LaTeX additional packages
ii  texlive-latex-recommended                      2022.20230122-3                       all          TeX Live: LaTeX recommended packages
ii  texlive-pictures                               2022.20230122-3                       all          TeX Live: Graphics, pictures, diagrams
ii  texlive-plain-generic                          2022.20230122-4                       all          TeX Live: Plain (La)TeX packages
ii  tftp-hpa                                       5.2+20150808-1.4                      amd64        HPA's tftp client
ii  thc-ipv6                                       3.8-1+b1                              amd64        The Hacker Choice's IPv6 Attack Toolkit
ii  thc-pptp-bruter                                0.1.4-1kali4                          amd64        THC PPTP Brute Force
ii  theharvester                                   4.4.3-0kali1                          all          tool for gathering e-mail accounts and subdomain names from public sources
ii  tightvncpasswd                                 1:1.3.10-7                            amd64        virtual network computing password tool
ii  tightvncserver                                 1:1.3.10-7                            amd64        virtual network computing server software
ii  timgm6mb-soundfont                             1.3-5                                 all          TimGM6mb SoundFont from MuseScore 1.3
ii  tipa                                           2:1.3-21                              all          system for processing phonetic symbols in LaTeX
ii  tk                                             8.6.13                                amd64        Toolkit for Tcl and X11 (default version) - windowing shell
ii  tk8.6                                          8.6.13-2                              amd64        Tk toolkit for Tcl and X11 v8.6 - windowing shell
ii  tk8.6-blt2.5                                   2.5.3+dfsg-4.1                        amd64        graphics extension library for Tcl/Tk - library
ii  tmux                                           3.3a-4                                amd64        terminal multiplexer
ii  tnftp                                          20230507-2                            amd64        enhanced ftp client
ii  toilet-fonts                                   0.3-1.4                               all          collection of TOIlet fonts
ii  totem                                          43.0-2                                amd64        Simple media player for the GNOME desktop based on GStreamer
ii  totem-common                                   43.0-2                                all          Data files for the Totem media player
ii  totem-plugins                                  43.0-2                                amd64        Plugins for the Totem media player
ii  tpm-udev                                       0.6                                   all          udev rules for TPM modules
ii  traceroute                                     1:2.1.3-1                             amd64        Traces the route taken by packets over an IPv4/IPv6 network
ii  tracker                                        3.4.2-3                               amd64        metadata database, indexer and search tool
ii  tracker-extract                                3.4.3-2                               amd64        metadata database, indexer and search tool - metadata extractors
ii  tracker-miner-fs                               3.4.3-2                               amd64        metadata database, indexer and search tool - filesystem indexer
ii  tree                                           2.1.1-1                               amd64        displays an indented directory tree, in color
ii  tshark                                         4.0.8-1                               amd64        network traffic analyzer - console version
ii  tzdata                                         2023c-7                               all          time zone and daylight-saving time data
ii  ucf                                            3.0043+nmu1                           all          Update Configuration File(s): preserve user changes to config files
ii  udev                                           254.1-3                               amd64        /dev/ and hotplug management daemon
ii  udisks2                                        2.10.0-5                              amd64        D-Bus service to access and manipulate storage devices
ii  udptunnel                                      1.1-10                                amd64        tunnel UDP packets over a TCP connection
ii  unicode-data                                   15.0.0-1                              all          Property data for the Unicode character set
ii  unicorn-magic                                  3.12-0kali2                           all          Tool for a PowerShell downgrade attack and inject shellcode
ii  unix-privesc-check                             1.4-0kali1                            all          Script to check for simple privilege escalation vectors
ii  unixodbc-common                                2.3.12-1                              all          Common ODBC configuration files
ii  unrar                                          1:6.2.10-2                            amd64        Unarchiver for .rar files (non-free version)
ii  unzip                                          6.0-28                                amd64        De-archiver for .zip files
ii  update-inetd                                   4.53                                  all          inetd configuration file updater
ii  upower                                         0.99.20-2                             amd64        abstraction for power management
ii  upx-ucl                                        3.96-3+b1                             amd64        efficient live-compressor for executables
ii  usb-modeswitch                                 2.6.1-3+b2                            amd64        mode switching tool for controlling "flip flop" USB devices
ii  usb-modeswitch-data                            20191128-5                            all          mode switching data for usb-modeswitch
ii  usb.ids                                        2023.05.17-1                          all          USB ID Repository
ii  usbmuxd                                        1.1.1-3                               amd64        USB multiplexor daemon for iPhone and iPod Touch devices
ii  usbutils                                       1:015-1                               amd64        Linux USB utilities
ii  usr-is-merged                                  37                                    all          Transitional package to assert a merged-/usr system
ii  util-linux                                     2.39.2-1                              amd64        miscellaneous system utilities
ii  util-linux-extra                               2.39.2-1                              amd64        interactive login tools
ii  va-driver-all:amd64                            2.19.0-1                              amd64        Video Acceleration (VA) API -- driver metapackage
ii  vboot-kernel-utils                             0~R106-15054.B-1                      amd64        Chrome OS verified boot utils required to sign kernels
ii  vboot-utils                                    0~R106-15054.B-1                      amd64        Chrome OS verified u-boot utilities
ii  vdpau-driver-all:amd64                         1.5-2                                 amd64        Video Decode and Presentation API for Unix (driver metapackage)
ii  vim                                            2:9.0.1672-1                          amd64        Vi IMproved - enhanced vi editor
ii  vim-common                                     2:9.0.1672-1                          all          Vi IMproved - Common files
ii  vim-runtime                                    2:9.0.1672-1                          all          Vi IMproved - Runtime files
ii  vim-tiny                                       2:9.0.1672-1                          amd64        Vi IMproved - enhanced vi editor - compact version
ii  vlan                                           2.0.5                                 all          ifupdown integration for vlan configuration
ii  voiphopper                                     2.04-1kali5                           amd64        Runs a VLAN hop security test
ii  vpnc                                           0.5.3+git20220927-1                   amd64        Cisco-compatible VPN client
ii  vpnc-scripts                                   0.1~git20220510-1                     all          Network configuration scripts for VPNC and OpenConnect
ii  wafw00f                                        2.2.0-1                               all          identify and fingerprint Web Application Firewall products
ii  wamerican                                      2020.12.07-2                          all          American English dictionary words for /usr/share/dict
ii  wapiti                                         3.0.4+dfsg-2                          all          web application vulnerability scanner
ii  wce                                            1.42-beta-0kali4                      all          Windows Credentials Editor
ii  webp-pixbuf-loader:amd64                       0.2.4-2                               amd64        WebP Image format GdkPixbuf loader
ii  webshells                                      1.1+kali8                             all          Collection of webshells
ii  weevely                                        4.0.1-2                               all          Stealth tiny web shell
ii  wfuzz                                          3.1.0-3                               all          Web application bruteforcer
ii  wget                                           1.21.4-1+b1                           amd64        retrieves files from the web
ii  whatweb                                        0.5.5-1                               all          Next generation web scanner
ii  whiptail                                       0.52.23-1+b1                          amd64        Displays user-friendly dialog boxes from shell scripts
ii  whois                                          5.5.18                                amd64        intelligent WHOIS client
ii  wifite                                         2.7.0-1                               all          Python script to automate wireless auditing using aircrack-ng tools
ii  windows-binaries                               0.6.10                                all          Various pentesting Windows binaries
ii  winexe                                         1.1~20140107-0kali18+b6               amd64        Remote Windows-command executor
ii  wireless-regdb                                 2022.06.06-1                          all          wireless regulatory database for Linux
ii  wireless-tools                                 30~pre9-14                            amd64        Tools for manipulating Linux Wireless Extensions
ii  wireplumber                                    0.4.14-4                              amd64        modular session / policy manager for PipeWire
ii  wireshark                                      4.0.8-1                               amd64        network traffic analyzer - meta-package
ii  wireshark-common                               4.0.8-1                               amd64        network traffic analyzer - common files
ii  wireshark-qt                                   4.0.8-1                               amd64        network traffic analyzer - Qt version
ii  wordlists                                      2023.2.0                              all          Contains the rockyou wordlist
ii  wpasupplicant                                  2:2.10-15                             amd64        client support for WPA and WPA2 (IEEE 802.11i)
ii  wpscan                                         3.8.24-0kali1                         all          Black box WordPress vulnerability scanner
ii  x11-apps                                       7.7+9                                 amd64        X applications
ii  x11-common                                     1:7.7+23                              all          X Window System (X.Org) infrastructure
ii  x11-utils                                      7.7+5                                 amd64        X11 utilities
ii  x11-xkb-utils                                  7.7+7                                 amd64        X11 XKB utilities
ii  x11-xserver-utils                              7.7+9+b1                              amd64        X server utilities
ii  x11proto-dev                                   2023.2-1                              all          X11 extension protocols and auxiliary headers
ii  xauth                                          1:1.1.2-1                             amd64        X authentication utility
ii  xbitmaps                                       1.1.1-2.2                             all          Base X bitmaps
ii  xbrlapi                                        6.6-4                                 amd64        Access software for a blind person using a braille display - xbrlapi
ii  xcvt                                           0.1.2-1                               amd64        VESA CVT standard timing modelines generator
ii  xdg-dbus-proxy                                 0.1.5-1                               amd64        filtering D-Bus proxy
ii  xdg-desktop-portal                             1.17.2-1                              amd64        desktop integration portal for Flatpak and Snap
ii  xdg-desktop-portal-gtk                         1.14.1-1                              amd64        GTK+/GNOME portal backend for xdg-desktop-portal
ii  xdg-user-dirs                                  0.18-1                                amd64        tool to manage well known user directories
ii  xdg-user-dirs-gtk                              0.11-1                                amd64        tool to manage well known user directories (Gtk extension)
ii  xdg-utils                                      1.1.3-4.1                             all          desktop integration utilities from freedesktop.org
ii  xfonts-base                                    1:1.0.5+nmu1                          all          standard fonts for X
ii  xfonts-encodings                               1:1.0.4-2.2                           all          Encodings for X.Org fonts
ii  xfonts-utils                                   1:7.7+6                               amd64        X Window System font utility programs
ii  xkb-data                                       2.38-2                                all          X Keyboard Extension (XKB) configuration data
ii  xkbset                                         0.8-1                                 amd64        Small utility to change the AccessX settings of XKEYBOARD
ii  xml-core                                       0.18+nmu1                             all          XML infrastructure and XML catalog file support
ii  xml-twig-tools                                 1:3.52-2                              all          command line tools for processing XML documents
ii  xorg-sgml-doctools                             1:1.11-1.1                            all          Common tools for building X.Org SGML documentation
ii  xserver-common                                 2:21.1.8-1                            all          common files used by various X servers
ii  xserver-xephyr                                 2:21.1.8-1                            amd64        nested X server
ii  xserver-xorg                                   1:7.7+23                              amd64        X.Org X server
ii  xserver-xorg-core                              2:21.1.8-1                            amd64        Xorg X server - core server
ii  xserver-xorg-input-all                         1:7.7+23                              amd64        X.Org X server -- input driver metapackage
ii  xserver-xorg-input-libinput                    1.3.0-1                               amd64        X.Org X server -- libinput input driver
ii  xserver-xorg-input-wacom                       1.2.0-1                               amd64        X.Org X server -- Wacom input driver
ii  xserver-xorg-legacy                            2:21.1.8-1                            amd64        setuid root Xorg server wrapper
ii  xserver-xorg-video-all                         1:7.7+23                              amd64        X.Org X server -- output driver metapackage
ii  xserver-xorg-video-amdgpu                      23.0.0-1                              amd64        X.Org X server -- AMDGPU display driver
ii  xserver-xorg-video-ati                         1:19.1.0-3                            amd64        X.Org X server -- AMD/ATI display driver wrapper
ii  xserver-xorg-video-fbdev                       1:0.5.0-2                             amd64        X.Org X server -- fbdev display driver
ii  xserver-xorg-video-intel                       2:2.99.917+git20210115-1              amd64        X.Org X server -- Intel i8xx, i9xx display driver
ii  xserver-xorg-video-nouveau                     1:1.0.17-2                            amd64        X.Org X server -- Nouveau display driver
ii  xserver-xorg-video-radeon                      1:19.1.0-3                            amd64        X.Org X server -- AMD/ATI Radeon display driver
ii  xserver-xorg-video-vesa                        1:2.5.0-1+b1                          amd64        X.Org X server -- VESA display driver
ii  xserver-xorg-video-vmware                      1:13.3.0-3.1+b1                       amd64        X.Org X server -- VMware display driver
ii  xsltproc                                       1.1.35-1                              amd64        XSLT 1.0 command line processor
ii  xtightvncviewer                                1:1.3.10-7                            amd64        virtual network computing client software for X
ii  xtrans-dev                                     1.4.0-1                               all          X transport library (development files)
ii  xvfb                                           2:21.1.8-1                            amd64        Virtual Framebuffer 'fake' X server
ii  xwayland                                       2:23.2.0-1                            amd64        X server for running X clients under Wayland
ii  xz-utils                                       5.4.1-0.2                             amd64        XZ-format compression utilities
ii  yelp                                           42.2-1                                amd64        Help browser for GNOME
ii  yelp-xsl                                       42.1-2                                all          XSL stylesheets for the yelp help browser
ii  zenity                                         3.44.2-1                              amd64        Display graphical dialog boxes from shell scripts
ii  zenity-common                                  3.44.2-1                              all          Display graphical dialog boxes from shell scripts (common files)
ii  zip                                            3.0-13                                amd64        Archiver for .zip files
ii  zlib1g:amd64                                   1:1.2.13.dfsg-3                       amd64        compression library - runtime
ii  zlib1g-dev:amd64                               1:1.2.13.dfsg-3                       amd64        compression library - development
ii  zsh                                            5.9-5                                 amd64        shell with lots of features
ii  zsh-autosuggestions                            0.7.0-1                               all          Fish-like fast/unobtrusive autosuggestions for zsh
ii  zsh-common                                     5.9-5                                 all          architecture independent files for Zsh
ii  zsh-syntax-highlighting                        0.7.1-2                               all          Fish shell like syntax highlighting for zsh
ii  zstd                                           1.5.5+dfsg2-1                         amd64        fast lossless compression algorithm -- CLI tool

```

` zet/20230922222809/README.md `

# Related

- [20230922222627](/zet/20230922222627/README.md) testing environment on netbook

Tags:

    #broken #workflow

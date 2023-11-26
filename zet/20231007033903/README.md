# script to extract text from every second of youtube video frames

- [x] develop this idea further
- command line utility to download youtube videos https://github.com/ytdl-org/youtube-dl
  - can be installed from python pip - doesn't work
  - installing and running the fresh version from github does work
- install dependencies
  - youtube-dl
  - ffmpeg
    - this was awkward to install on my system. i had to do a full upgrade and fix apt dependencies to install it.
  - tesseract
- right now it works, but it is a little sketchy. there's some opportunity for future development.
  - check if it returned an mkv or mp4 file
  - should also print video title or url to output
  - should work out of a temporary directory
- since it is not instantaneous, it is kind of like watching the video in the terminal while it processes
- i have a card in my zk about this project 20221006200018
  - i have a note to check out https://www.videoproc.com/video-editor/extract-frames-from-video.htm

```bash
tldr ffmpeg

 - Quickly extract a single frame from a video at time mm:ss and save it as a 128x128 resolution image:
    ffmpeg -ss mm:ss -i video.mp4 -frames 1 -s 128x128 -f image2 image.png

tldr tesseract
 - Recognize text in an image and save it to output.txt (the .txt extension is added automatically):
   tesseract image.png output

youtube-dl https://www.youtube.com/watch?v=PREVgpmZGuo

git clone https://github.com/ytdl-org/youtube-dl
sudo python3 setup.py install

# how long is this video
exiftool ~/testing/htbmailroom.mp4 | grep ^Duration
Duration                        : 0:50:04

source <(exiftool ~/testing/htbmailroom.mp4 | grep ^Duration | awk -F : '
/^Duration/ {
  print "seconds=" $NF
  print "minutes=" $(NF-1)
  print "hours=" ($(NF-2) + 1) - 1
} ')
echo $seconds

```

## running through the steps and trying it out
```bash
┌──(parallels㉿kali-linux-2022-2)-[~/testing]
└─$ ffmpeg -ss 01:01 -i ~/testing/htbmailroom.mp4 -frames 1 -s 1024x768 -f image2 image.png
ffmpeg version 6.0-7 Copyright (c) 2000-2023 the FFmpeg developers
  built with gcc 13 (Debian 13.2.0-4)
  ...
[image2 @ 0xaaaaf4aa6c20] The specified filename 'image.png' does not contain an image sequence pattern or a pattern is invalid.
[image2 @ 0xaaaaf4aa6c20] Use a pattern such as %03d for an image sequence or use the -update option (with -frames:v 1 if needed) to write a single image.
frame=    1 fps=0.0 q=-0.0 Lsize=N/A time=00:00:00.00 bitrate=N/A speed=   0x
video:69kB audio:0kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: unknown

┌──(parallels㉿kali-linux-2022-2)-[~/testing]
└─$ tesseract image.png output.txt
Estimating resolution as 196

┌──(parallels㉿kali-linux-2022-2)-[~/testing]
└─$ cat output.txt.txt
a ‘Seat rang

Fe ew Se Tri

pea 10.14.8]-[ippsec@parrot]-[~/htb/mailroom]
[+]$ sudo
```

` zet/20231007033903/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20230929153207](/zet/20230929153207/README.md) computer science experiments hub
- [20231122214039](/zet/20231122214039/README.md) stuff i should blog about

Tags:

    #data #youtube #script

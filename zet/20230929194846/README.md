# testing if shortcuts will work and not pick up extra files

- concept of `testing if shortcuts will work and not pick up extra files`
- yes shortcuts brought in nested executables. that seems like unwanted behavior
- confirmed that only one line was added now for the new short cmd

```bash
# before
ls shortcuts/
check-script-dependencies
copy-text-from-image-url.sh
crackmapexec.sh
destroy-containers-and-images.sh
docker-build-github-repo-image
docker-current-directory.sh
docker-exec-picker.awk
docker-get-tags
draw_bar
draw_title_bar
edit-kb-fuzzy-find-markdown
enum4linux-ng.sh
exif-all-images.sh
exploit-fuzzy-search
exploit-fuzzy-search-preview
extract-pdf-embedded-file-stream.sh
find-alnum-base64
find-executable
find-largest-files.sh
fuzzy-search-markdown-content
get-columns.awk
getmyip
getmyip_silent
get-random-unique-id.sh
github-latest-files
impacket.sh
linpeas-me
markdown-get-nested-headings
markdown-obsidian-link-files
markdown-obsidian-links
nishanghere
nmap-get-script-types
nmap-get-top-ports
nmap-list-all-ports-services
revshell
root-knowledge-base-repo-path
runneo4j.sh
scripts-dependencies
search-markdown
space-invader
ssh-keygen-generate-file.exp
tldr-command-descriptions
ubuntu-docker-build-environment.sh
unique-lines-unsorted-fast
update-shortcuts
watch-failed-ssh-logins-live-check-shodan.sh
what-installed-this-file.sh

# after fix
ls shortcuts/
check-script-dependencies
copy-text-from-image-url.sh
crackmapexec.sh
destroy-containers-and-images.sh
docker-build-github-repo-image
docker-current-directory.sh
docker-exec-picker.awk
docker-get-tags
draw_bar
draw_title_bar
edit-kb-fuzzy-find-markdown
enum4linux-ng.sh
exif-all-images.sh
exploit-fuzzy-search
exploit-fuzzy-search-preview
extract-pdf-embedded-file-stream.sh
find-alnum-base64
find-executable
find-largest-files.sh
fsdb
fuzzy-search-markdown-content
get-columns.awk
getmyip
getmyip_silent
get-random-unique-id.sh
github-latest-files
impacket.sh
linpeas-me
markdown-get-nested-headings
markdown-obsidian-link-files
markdown-obsidian-links
nishanghere
nmap-get-script-types
nmap-get-top-ports
nmap-list-all-ports-services
revshell
root-knowledge-base-repo-path
runneo4j.sh
scripts-dependencies
search-markdown
space-invader
ssh-keygen-generate-file.exp
tldr-command-descriptions
ubuntu-docker-build-environment.sh
unique-lines-unsorted-fast
update-shortcuts
watch-failed-ssh-logins-live-check-shodan.sh
what-installed-this-file.sh

```

` zet/20230929194846/README.md `

# Related

- [20230929145418](/zet/20230929145418/README.md) file based database for partitioning and event sourced data
- [20230905160850](/zet/20230905160850/README.md) directory for executable short commands to run on path
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #idea

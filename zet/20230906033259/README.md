# functions to copy over and possibly remake as commands

- concept of `functions to copy over and possibly remake as commands`
- https://github.com/nicholas-long/pen-test-environ/blob/main/functions.sh
- awesome base64 optimization script

```bash
function getip_silent {
  iface=$(ip a s | awk -f ~/kb/awk-scripting/get-interface.awk)
  ip a s $iface | awk '$1 == "inet" { gsub(/\/.*/,"",$2);print $2 }'
}

# TODO: try to repace ugly things with is_empty
function getmyip {
  iface=$1
  ifacestf=$(mktemp)

  if [ -z "$iface" ]; then
    ip l | grep -E '^[[:digit:]]+: ' | cut -d ':' -f 2 | awk '{print $1}' > $ifacestf
    tunifaces=$(cat $ifacestf | grep '^tun')
    # if there's one single tun interface, grab it
    if [ $(echo "$tunifaces" | wc -l) == 1 ]; then
      export iface=$tunifaces
    fi
    # if we still can't find it, ask
    if [ -z "$iface" ]; then
      export iface=$(cat $ifacestf | fzf)
    fi
    rm $ifacestf
  fi
  ip a s $iface | grep -Eo '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' | head -n 1
}
```

` zet/20230906033259/README.md `

# Related

- [20230905015120](/zet/20230905015120/README.md) bash rc file and config
- [20230906033727](/zet/20230906033727/README.md) commands to get ip

Tags:

    #idea

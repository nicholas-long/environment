#!/bin/bash
# decorate and colorize a passwd file piped from stdin
$ENVIRON_BASEPATH/zet/20230927233110/colorize.sh -y '^.*sh$' -c '^[^:]+' -r root -g '[^:/]+$' -b 'false|nologin'

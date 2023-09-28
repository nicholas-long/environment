#!/bin/bash
# decorate XML with colors for tags, attributes, and content
$ENVIRON_BASEPATH/zet/20230927233110/colorize.sh -g '>[^<]+<' -c '\[[^]]+' -r CDATA -y '<[^>]+ [^>]*>'

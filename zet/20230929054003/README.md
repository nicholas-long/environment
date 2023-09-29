# bash scripting simple program template parsing arguments with case statement

- template bash script
  - help options generated with self parsing code
```bash
#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# parse args with case statement
VERBOSE=0
PAGING="no"
while [[ $# -gt 0 ]]; do
  case $1 in
    -p|--paging)
      PAGING=1
      ;;
    -o|--optional)
      shift # pop arg
      OPTIONAL="$1"
      ;;
    -v|--verbose)
      VERBOSE=1
      ;;
    -h|--help)
      echo "Usage: $0 [ options ] directory"
      echo "Options:"
      cat "$0" | grep '^\s\+-.|--.*'
      exit 1
      ;;
    *)
      KB_DIR="$1"
      ;;
  esac
  shift
done

if [ $VERBOSE -ne 0 ]; then
  echo "Paging $PAGING"
  [ -n "$OPTIONAL" ] && echo "Optional param $OPTIONAL"
  echo "Positional parameter $KB_DIR"
fi

# exit if parameter is missing
[ -z "$KB_DIR" ] && echo "Missing parameter" && exit 1

exit 0
```

- copied kb script for bash scripting template parsing arguments with case statement
```bash
/home/parallels/kb/bash-scripting/template.sh # parse args with case statement
cp /home/parallels/kb/bash-scripting/template.sh .
```

` zet/20230929054003/README.md `

# Related

- [20230921220840](/zet/20230921220840/README.md) list of kb scripts that i could decide whether to copy over
- [20230925050125](/zet/20230925050125/README.md) git scripting hub
- [20230928185057](/zet/20230928185057/README.md) bash self parsing code

Tags:

    #bash #template #script

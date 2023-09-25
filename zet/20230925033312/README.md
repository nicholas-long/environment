# bash current script directory

- snippet used in a lot of scripts

```bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
```

```bash
grep -R SCRIPT_DIR zet
```

` zet/20230925033312/README.md `

# Related

- [20230925024118](/zet/20230925024118/README.md) script to display information about other scripts and their dependencies
- [20230905185446](/zet/20230905185446/README.md) bash file commands that are not builtins
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #bash #snippet

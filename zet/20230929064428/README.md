# script to check for BEGINFILE usage in awk scripts requiring change to gawk

- concept of `script to check for beginfile usage`
- have to use `#!/usr/bin/env gawk -f` for scripts that use beginfile

```bash
# find all the awk scripts
find . -type f -executable | xargs file | grep 'awk script' | cut -d : -f 1 | xargs grep 'BEGINFILE\|ENDFILE'

# find example scripts that are updated to use gawk
grep -R 'env.*gawk'
```

` zet/20230929064428/README.md `

# Related

- [20230925193834](/zet/20230925193834/README.md) testing on mac os
- [20230926224444](/zet/20230926224444/README.md) updating scripts to use gawk when possible

Tags:

    #script #awk #macos

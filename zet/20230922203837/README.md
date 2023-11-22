# get rid of all platform specific binaries from zkvr

- concept of `get rid of all platform specific binaries from zkvr`

```
```

` zet/20230922203837/README.md `

# storing yq binaries within zettelkasten

- 2023-09-22 i looks like i didn't actually get around to using yq in queries, so i didn't tie zkvr to a particular architecture by including the amd binaries.
- i have things in the install scripts now that could install this interactively and let the user pick the architecture
- 2023-10-05 because of the above, i am deleting the binaries in favor of install scripts

```bash
rm -rf yq_binaries/

grep -R yq zet
```


# Related

- [20221011145143](/zet/20221011145143/README.md) bat command pretty printer
- [20230907151050](/zet/20230907151050/README.md) bat interactive install script
- [20221006032546](/zet/20221006032546/README.md) my original implementation of zet cmd
- [20221009095853](/zet/20221009095853/README.md) finished

Tags:

    #cleanup

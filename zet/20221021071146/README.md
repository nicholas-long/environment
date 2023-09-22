# delete things marked as #DEL periodically

- concept of `delete things marked as #DEL periodically`

```
./graphquery @DEL | awk '/^[0-9]+$/ {system("rm -rf zet/" $0)}'
```

` zet/20221021071146/README.md `

# Related


Tags:

    #workflow #cleanup

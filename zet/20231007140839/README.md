# references to sudo and other considerations for scripts running within a docker

- concept of `looking for references to sudo because of docker builds`
- used to start apache in tmux pwn menu
- some docker ui helper scripts use sudo. those shouldn't be expected to work within docker anyway though.

```bash
grep sudo $(find zet -type f -not -name README.md)
```

` zet/20231007140839/README.md `

# Related

- [20230922220109](/zet/20230922220109/README.md) create a dockerfile for this environment

Tags:

    #docker #linux

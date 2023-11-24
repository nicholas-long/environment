# API queue server implemented in python

- concept of `API queue server implemented in python`

```bash
# post data to queue
┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231024041243]
└─$ curl -d https://github.com/nicholas-long/environ localhost:8000/put

# get data from queue
┌──(parallels㉿kali-linux-2022-2)-[~/environment/zet/20231024041243]
└─$ curl localhost:8000/get
https://github.com/nicholas-long/environ

docker build . -t queue
docker run --rm -it -p 8000:8000 queue
```

` zet/20231024041243/README.md `

# Related

- [20231013173509](/zet/20231013173509/README.md) connecting to an amqp work queue

Tags:

    #python #script #web #api

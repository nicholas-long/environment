# example of connecting to a work queue docker

- concept of `testing a work queue docker`
- docker runs `entrypoint`, connects to rabbitmq queue and passes work to worker process `workjob`
- build and test it from this directory
- use queue `testqueue`

```bash
# run rabbit
docker run --rm -p 5672:5672 -p 8080:15672 rabbitmq:3-management

docker build . -t queuedock
docker run --rm -it queuedock

# publish test data to the queue
seq 1 10 | while read u; do
  echo "$u" | amqp-publish -r testqueue
done

docker run --rm -e RABBIT=172.17.0.1 queuedock
docker run --rm -it -e RABBIT=172.17.0.1 queuedock
```

` zet/20231013173509/README.md `

# Related

- [20231011030523](/zet/20231011030523/README.md) working with a queue or scheduling system in bash

Tags:

    #docker #script #queue

# connecting to an amqp work queue

## docker example

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

# working with a queue or scheduling system in bash

- concept of `working with a queue or scheduling system in bash`
- trying rabbitmq
- potential option https://github.com/cloudamqp/amqpcat
- trying package `amqp-tools` from kali apt
  - connects to localhost by default, so it works if the docker is running with ports exposed
  - the way these work is that the whole session of the producer is turned into a message
  - the consumer is passed a command to run as an arg. it runs this command and pipes the message from amqp to stdin

```bash
docker run --rm -p 5672:5672 rabbitmq
docker run --rm -p 5672:5672 -p 8080:15672 rabbitmq:3-management

amqp-publish -e exchange -r routing-key

┌──(coyote㉿netbook3)-[~/environment]
└─$ amqp-declare-queue -q q
q

# a queue named queue showed up in rabbitmq management console
# write to it using its name as a routing key
┌──(coyote㉿netbook3)-[~/environment]
└─$ amqp-publish -r q
hi

└─$ amqp-consume -q q echo

# consume single message - will block until at least 1 message is in queue
└─$ amqp-consume -q q ./testscript -c 1
```


# Related

- [20231122214039](/zet/20231122214039/README.md) stuff i should blog about
- [20231024041243](/zet/20231024041243/README.md) API queue server implemented in python

Tags:

     #docker #script #queue #bash #scripting #queue

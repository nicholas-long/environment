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
```

` zet/20231011030523/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #bash #scripting

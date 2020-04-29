# axios-long-request-issue

This rpeo recreates an issue with node, axios and docker.


## Summary of the issue

While awaiting response to a request from a server that could take a long time to respond (10 minutes and up)

- the docker container running the node process terminates abruptly.
- the process termination callbacks in node script are not run.
- no exception is cought
- exit coode of the `docker run` command is 255


## How to run

Modify the IP address in test.js and server.js based on your machine
settings so the script from inside the container can call the server
outside the container.

run the server:

```shell
node server.js
```

while the server is running, build and run the docker container

```shell
docker build -t xxx . 
docker run xxx 'node test.js'
```

## What should happen?

Node process running inside the docker container should recieve a successful response and the
node process should exit with code 0.

## What actually happens?

Entire docker container is terminated after about 5.5 minutes with an exit code of 255.
node's process event callbacks are not executed.

```shell
$ docker run xxx 'node test.js'
2020-04-29T14:49:05.040Z - start
$ echo $?
255
$ 
```



// Bloco informativo, sobre a instalação e comandos do docker.
Exemplos de comandos:

docker container create -i --name 01container alpine:3.12
docker container start 01container
docker ps --filter name=01container
docker exec 01container cat /etc/os-release
docker container rm -f 01container
docker pull nginx:1.21.3-alpine
docker container run -d --name 02images -p 3000:80 nginx:1.21.3-alpine
# generate certificates for nginx

```
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./nginx-server.key -out ./nginx-server.crt
```

# provide client angular app

Build heartbeat-client dist
```
ng build --env=dev-docker
```

# start docker container

```
docker-compose up -d
```

or

```
./startup-docker.sh
```

# browse

browse https://localhost

#!/bin/bash

docker run \
 --name heartbeat-client \
 -v $(pwd)/nginx.conf:/etc/nginx/conf.d/default.conf \
 -v $(pwd)/nginx-server.crt:/etc/nginx/ssl/server.crt \
 -v $(pwd)/nginx-server.key:/etc/nginx/ssl/server.key \
 -v $(pwd)/logs/:/var/log/nginx/ \
 -v $(pwd)/../dist:/var/www/heartbeat \
 -p 443:443 \
 -d nginx

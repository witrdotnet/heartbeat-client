#!/bin/bash

SCRIPT_DIR=$(cd `dirname $0` && pwd)

docker run \
 --name heartbeat-client \
 -v ${SCRIPT_DIR}/nginx.conf:/etc/nginx/conf.d/default.conf \
 -v ${SCRIPT_DIR}/nginx-server.crt:/etc/nginx/ssl/server.crt \
 -v ${SCRIPT_DIR}/nginx-server.key:/etc/nginx/ssl/server.key \
 -v ${SCRIPT_DIR}/logs/:/var/log/nginx/ \
 -v ${SCRIPT_DIR}/welcome:/var/www/welcome \
 -v ${SCRIPT_DIR}/../dist:/var/www/heartbeat \
 -p 443:443 \
 -p 80:80 \
 -d nginx

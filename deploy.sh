#!/bin/bash

set -e

function usage {
	echo "============"
	echo "Usage:"
	echo "$0 [target_env]"
	echo "  * target_env: posible values (local, demo, staging)"
	echo "============"
}


if [ $# -eq 0 ]
then
        echo -e "\nError: missed target environment"
        usage
        exit
fi

case $1 in
        local|demo|staging)
                echo -e "\nStart deployment ...";;
        *)
                echo -e "\nError: invalid argument \"$1\""
                usage
		exit;;
esac


TARGET_ENVIRONMENT=$1
ASK_PASSWORD=""
DIST_VERSION=$(date +%Y%m%d.%H%M)

if [ "${TARGET_ENVIRONMENT}" == "local" ]; then ASK_PASSWORD="-K"; fi

echo -e "\n== Build project\n"
ng build -c ${TARGET_ENVIRONMENT}

echo -e "\n== Archive and gzip dist\n"
tar czvf heartbeat-client-${DIST_VERSION}.tgz dist

echo -e "\n== Deploy with ansible\n"
cd deployment
ansible-playbook \
	playbook-heartbeat-client.yml \
	-i inventories/${TARGET_ENVIRONMENT}/hosts \
	${ASK_PASSWORD} \
	--extra-vars "dist_filegz_local_path='..' dist_filegz_name='heartbeat-client-${DIST_VERSION}.tgz'"

echo -e "\n====\n"
echo " Deployed heartbeat-client-${DIST_VERSION}.tgz on : ${TARGET_ENVIRONMENT}"
echo -e "\n====\n"

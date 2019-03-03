# requirements

the python pyOpenSSL module is required (even for playing playbook on localhost):
```
# install on remote hosts
pip install pyOpenSSL 

# or call pip as python module
sudo python -m pip install pyOpenSSL
```

# deploy on localhost

First build angular app and tar gzip "dist/" folder: 

```
ng build -c local
tar czvf heartbeat-client-$(date +%Y%m%d.%H%M).tgz dist
```

Then
```
# note the "-K" parameter necessary to ask password on localhost
ansible-playbook -i inventories/local/hosts playbook-heartbeat-client.yml -K --extra-vars "dist_filegz_local_path='..' dist_filegz_name='heartbeat-client-<date>.tgz'"
```

# deploy on demo

First build angular app and tar gzip "dist/" folder: 

```
ng build -c demo
tar czvf heartbeat-client-$(date +%Y%m%d.%H%M).tgz dist
```

Then
```
ansible-playbook -i inventories/demo/hosts playbook-heartbeat-client.yml --extra-vars "dist_filegz_local_path='..' dist_filegz_name='heartbeat-client-<date>.tgz'"
```

# deploy on staging

First build angular app: 

```
ng build
tar czvf heartbeat-client-$(date +%Y%m%d.%H%M).tgz dist
```

Then
```
ansible-playbook -i inventories/staging/hosts playbook-heartbeat-client.yml --extra-vars "dist_filegz_local_path='..' dist_filegz_name='heartbeat-client-<date>.tgz'"
```

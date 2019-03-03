# requirements

the python pyOpenSSL module is required (even for playing playbook on localhost):
```
# install on remote hosts
pip install pyOpenSSL 

# or call pip as python module
sudo python -m pip install pyOpenSSL
```

# deploy on localhost

```
# note the "-K" parameter necessary to ask password on localhost
ansible-playbook -i inventories/local/hosts playbook-heartbeat-client.yml -K
```

# deploy on demo

First build angular app and tar gzip "dist/" folder: 

```
ng build -c demo
tar czvf heartbeat-client-<YYYYMMDD.HH.mm>.tgz dist
```

Then
```
ansible-playbook -i inventories/demo/hosts playbook-heartbeat-client.yml
```

# deploy on staging

First build angular app: 

```
ng build
```

Then
```
ansible-playbook -i inventories/staging/hosts playbook-heartbeat-client.yml
```

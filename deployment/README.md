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

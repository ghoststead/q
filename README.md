# Q

## Digital Ocean

Create an API key

Install `doctl`
```shell
sudo snap install doctl
doctl auth init
doctl registry login
```


### Push to DO docker registry
```shell
docker push registry.digitalocean.com/ghoststead/q
```


## Mongo

```shell
docker-compose exec mongo mongo -u root
```

```shell
use ghoststead;
db.createUser({
    user: "ghoststead",
    pwd: "s0secret",
    roles: ["readWrite"]
})
```

### Test
```shell
curl -X POST --header "Content-Type: application/json" --data '{"event": "test"}' http://localhost:3000/events
```

### Shell examples

Show last 10 events
```shell
db.events.find().sort({_id:-1}).limit(10);
```

Delete all test events:
```shell
db.events.deleteMany({"event": "test"})
```
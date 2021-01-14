# Q

## Digital Ocean

Create an API key

Install `doctl`
```shell
sudo snap install doctl
doctl auth init
doctl registry login
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
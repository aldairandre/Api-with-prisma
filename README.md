
# GETTING STARTED 🚀

## SEQUELIZE TEST
<br/>

### RUN SERVER

```
  yarn dev
```

### BUILDING DB

```
  docker build -t ecommerce -f ./Dockerfile .
```

```
  docker run -d -v $(pwd)/db/data:/var/lib/mysql -p 3306:3306 --rm --name ecommerce-prisma ecommerce
```

```
  docker exec -i ecommerce-prisma mysql -proot < ./create-db-script.sql
```


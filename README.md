<br/>
<br/>

# SIMPLE API USING PRISMA

<br/>

## GETTING STARTED 🚀
<br/>

### RUN THE API

```
yarn dev
```

### Api Endpoints
<br/>

**GET All Users**

```
localhost:3000/user
```

**POST Create a user**

Data structure of body parameters

name: string 

email: string

role: string (USER Or ADMIN)

```
localhost:3000/user/create
```

**Delete a user**

```
localhost:3000/user/delete/id
```


### BUILDING DATABASE

```
docker build -t ecommerce -f ./Dockerfile .
```

```
docker run -d -v $(pwd)/db/data:/var/lib/mysql -p 3306:3306 --rm --name ecommerce-prisma ecommerce
```

**Run the migration**

```
npx prisma migrate dev
```

**Accessing the container's mysql terminal**

```
docker exec -it ecommerce-prisma mysql -uroot -p
```

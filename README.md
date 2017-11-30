# Book of Engineers POC
## Dockerized Angular 4 App (with Angular CLI)

## Build docker image

```
$ docker build -t book-of-engineers-poc . 
```

## Run the container

```
$ docker run -d -p 8080:80 book-of-engineers-poc
```


The app will be available at http://localhost:8080

You can easily tweak the nginx config in ```nginx/default.conf```

Mock Data made using https://mockaroo.com/schemas/89989

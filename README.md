What to do next:

- Ensure your bundle and npm are up to date.

```
    bundle && npm i
    npm run postinstall
```


## Servers :

- Run the npm rails-server command to load the rails server (localhost:3000)

````
    # Runs foreman
    # foreman loads  Procfile
    # Procfile contains configs for web (rails) and client(webpack)
    npm run rails-server
```

- Run the npm express-server command to load the node server with hot reloading support (localhost:4000)

```
    npm run express-server
```

## Running Tests

```
    # runs :
    # 1. rspec
    # 2. cd client && npm run lint
    npm run test
```

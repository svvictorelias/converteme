## Documentation

Link to api documentation: http://localhost:3333/api-docs/

## Configuring and initializing the project

First, you must clone the application on your machine:

```
    git clone https://github.com/svvictorelias/template-backend.git
```

through ssh

```
    git clone git@github.com:svvictorelias/template-backend.git
```

In this case I didn't use the file `.env` to make the assessment easier. But by default, I create in real projects .

```
    ./env
```

Use `npm install` to install all project dependencies.

```
    npm install
```

Substitute the following data from ormconfig.json for your database connection

```
    "port": 3306
    "host": "database-1Examplex5s.us-east-X.rds.amazonaws.com"
    "username": "rootExample"
    "password": "passExample"
    "database": "dbExample"
```

After replacing the Aurora Db access data, run the following command to run the migrations on your database

```
    npm run typeorm migration:run
```

And finally, use the `npm run dev` to start the server in development mode using the library `nodemon` in this path: [http://localhost:3333](http://localhost:3333)

```
    npm run dev
```

## Endpoints

\*\* All information on endpoints in parentheses "{}" are the values or parameters<br>
\*\* All endpoint's of Post need to pass Bearer Token

<h3>
    User
</h3>

| Action                                      | Request  | endpoint    |
| ------------------------------------------- | -------- | ----------- |
| Get a user By Id                            | `GET`    | /users/{id} |
| Create a user - body: {name,email,password} | `POST`   | /users      |
| Update a user - body: {name,email,password} | `PUT`    | /users/{id} |
| Delete a user By Id                         | `Delete` | /users/{id} |

<br/>
<h3>
    Sessions
</h3>

| Action                                    | Request | endpoint       |
| ----------------------------------------- | ------- | -------------- |
| Create a session - body: {email,password} | `POST`  | /sessions      |
| Refresh token - body: {token}             | `POST`  | /refresh-token |

<br/>

## With more details, acess the http://localhost:3333/api-docs/

## Contact https://www.linkedin.com/in/svvictorelias/

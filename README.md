# Space Painel - Backend 

Space Painel is a web application that will keep the Rebels updated about the status of planest and allies all over the universe.

The application was made in ReactJs, using Redux, axios and other libraries. The Backend was made in NodeJs, a simple API using mongoose and simple ways to make autentication and keep the data safe, check it here: https://github.com/maradelynie/Space-painel .

Checkout the documentation in https://app.swaggerhub.com/apis/maradelynie/spacePainel/1.0.0

## Getting Started

For to have this project running on your computer you just need to clone the the repo and run $ yarn or $ npm install.

### Prerequisites

First of all you will need NodeJs, a browser that can run V8 engine like Chrome and a packege manager like NPM (but I strongly recommend to use Yarn)


[Get Node Here](https://nodejs.org/en/) 

[Get Yarn Here](https://yarnpkg.com/) 

This project uses DataBase from MongoDB, for use that you will need to have an Cluster with a database "askMe" on atlas MongoDB.

[SingUp MongoDB Here](https://cloud.mongodb.com/)

### preparing;

You will need to set some environment variables:
Create an ".env" file on the backend folder that contains these variables;

```
DB_CONNECTION="mongodb+srv://<username>:<password>@cluster0-xfzvp.mongodb.net/askMe?retryWrites=true&w=majority"
PORT=3001
```

### install;

Open your terminal and navigate to the backend folder on the cloned repo folder and install the dependencies with this command line;

```
$ npm install    (or)       $ yarn 
```
(wait till finished)


### run the server;

With all the installation finished, now open the backend folder on your terminal again and run the next command line;

```
$ npm run server   (or)       $ yarn server
```

## Deployment

The app is deployed on heroku in the following url:

[Space Painel](https://space-painel-backend.herokuapp.com/spacepainel)


## Made With

* reactJs ^16.13.1
* Redux ^4.0.5
* Sass (node-sass) ^4.14.1


* axios ^0.19.2
* Express 4.17.1
* mongoose 5.9.19
* mongoDB 3.5.9


* git
* opentdb
* heroku

-See more at packege.json on backend and frontend folder

## Authors

**Mara Oliveira** 


## License

 MIT

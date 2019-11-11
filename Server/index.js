const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Events = require('./routes/Events');
const users = require('./routes/users');
const lookups = require('./routes/lookup');
const register = require('./routes/register')

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization,token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/api',Events);
app.use('/api',users);
app.use('/api',register);

//Connect to DB

const db = 'mongodb://localhost:27017/angular-project-db';

mongoose.connect(db, err => {
    if(err){
        console.log('Error:'+err)
    }else{
        console.log('Connected to mongo db...');
    }
})



//Default route
app.get('/',(req,res) => {
    res.send('Dafault Route');
});

const port = process.env.PORT || 4000;
app.listen(port,()=> console.log('Listening on port:'+port));

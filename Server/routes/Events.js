const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Event = require('../model/Event');
const jwt = require('jsonwebtoken')

const secretK = 'secretPK'

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

function verifyToken(req, res, next){
    //Request header with authorization key
    const bearerHeader = req.headers['authorization']; 
    //Check if there is  a header
    if(typeof bearerHeader !== 'undefined'){
       console.log(bearerHeader)
        const bearer = bearerHeader.split(' ');
        //Get Token arrray by spliting
        const bearerToken = bearer[1];
        req.token = bearerHeader
        //call next middleware
        next();
    }
    else{
        res.send('Something wrong with verifytoken');
    }
 }

//Save Event
router.post('/events',verifyToken, function(req,res,next){
    jwt.verify(req.token, secretK, (err, authData)=>{
        if(err)
        {
    res.send('Problem with token most likely, if postman then verifytoken is the issue')
    return;
        }
    res.header('Access-Control-Allow-Origin',"http://localhost:4200");


    Event.create(req.body, function (err,event) {
        if(err) return next(err);
        res.json(event);
    });
});
});

//Get all events
router.get('/events',verifyToken,function(req,res,next){
    jwt.verify(req.token, secretK, (err, authData)=>{
        if(err)
        {
    res.send('Problem with token most likely, if postman then verifytoken is the issue')
    return;
        }

    Event.find(function (err,event) {
        if(err) return next(err);
        res.json(event);
    });
});
});



//Get event by id
router.get('/events/:id',verifyToken, function(req,res,next){
    jwt.verify(req.token, secretK, (err, authData)=>{
        if(err)
        {
    res.send('Problem with token most likely, if postman then verifytoken is the issue')
    return;
        }
    res.header('Access-Control-Allow-Origin',"*");
    Event.findById(req.params.id, function (err,event) {
        if(err) return next(err);
        res.json(event);
    });
});
});

//Get event by eventname
router.get('/events/by-name/:EventName',verifyToken, function(req,res,next){
    jwt.verify(req.token, secretK, (err, authData)=>{
        if(err)
        {
    res.send('Problem with token most likely, if postman then verifytoken is the issue')
    return;
        }
    res.header('Access-Control-Allow-Origin',"*");
    Event.find({EventName:req.params.EventName}, function (err,event) {
        if(err) return next(err);
        res.json(event);
    });
});
});

//Update event by id
router.put('/events/:id',verifyToken, function(req,res,next){
    jwt.verify(req.token, secretK, (err, authData)=>{
        if(err)
        {
    res.send('Problem with token most likely, if postman then verifytoken is the issue')
    return;
        }
    Event.findByIdAndUpdate(req.params.id, req.body, function (err,event) {
        if(err) return next(err);
        res.json(event);
    });
});
});

//Update event by eventname
router.put('/events/by-name/:name',verifyToken, function(req,res,next){
    jwt.verify(req.token, secretK, (err, authData)=>{
        if(err)
        {
    res.send('Problem with token most likely, if postman then verifytoken is the issue')
    return;
        }
    Event.update({EventName:req.params.name}, req.body, function (err,event) {
        if(err) return next(err);
        res.json(event);
    });
});
});

//Delete event by id
router.delete('/events/:id', function(req,res,next){
    Event.findByIdAndDelete(req.params.id, req.body, function (err,event) {
        if(err) return next(err);
        res.json(event);
    });
});

//Delete event by name
router.delete('/events/by-name/:name', function(req,res,next){
    Event.deleteOne({EventName:req.params.name}, req.body, function (err,event) {
        if(err) return next(err);
        res.json(event);
    });
});






module.exports = router;
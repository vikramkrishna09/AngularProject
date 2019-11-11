const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const LU = require('../model/lookup');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


//Save Event
router.post('/lookup', function(req,res,next){
    LU.create(req.body, function (err,lookup) {
        if(err) return next(err);
        res.json(lookup);
    });
});

//Get all lookup
router.get('/lookup', function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    LU.find(function (err,lookup) {
        if(err) return next(err);
        res.json(lookup);
    });
});

//Get lookup by id
router.get('/lookup/:id', function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    LU.findById(req.params.id, function (err,lookup) {
        if(err) return next(err);
        res.json(lookup);
    });
});


//Update lookup by id
router.put('/lookup/:id', function(req,res,next){
    LU.findByIdAndUpdate(req.params.id, req.body, function (err,lookup) {
        if(err) return next(err);
        res.json(lookup);
    });
});

//Delete lookup by id
router.delete('/lookup/:id', function(req,res,next){
    LU.findByIdAndDelete(req.params.id, req.body, function (err,lookup) {
        if(err) return next(err);
        res.json(lookup);
    });
});




module.exports = router;
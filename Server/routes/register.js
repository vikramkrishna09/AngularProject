const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Register = require('../model/Register');
const jwt = require('jsonwebtoken')

const secretK = 'secretPK'

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());




function verifyToken(req, res, next){
    //Request header with authorization key
    const bearerHeader = req.headers['authorization']; 
    //Check if there is  a header
    if(typeof bearerHeader !== 'undefined'){
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


 router.post('/registerforevent',verifyToken, function(req,res,next){
    jwt.verify(req.token, secretK, (err, authData)=>{
        if(err)
       {
          res.send('Problem with token most likely, if postman then verifytoken is the issue')
          return;
       }


    Register.create(req.body, function (err,event) {
        if(err) return next(err);
        res.json(event);
    });
});
});





module.exports = router;
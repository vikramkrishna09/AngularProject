const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../model/User');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secretK = 'secretPK'


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());




//Save User
router.post('/users',verifyToken, function(req,res,next){
   jwt.verify(req.token, secretK, (err, authData)=>{
      if(err)
      {
  res.send('Problem with token most likely, if postman then verifytoken is the issue')
  return;
      }
      var saltRounds = 5;

      bcrypt.hash(req.body.Password, saltRounds, function(err, hash){
         if(err) {
            return res.status(500).json({
               error: err
            });
         }
    req.body.Password =  hash

    User.create(req.body, function (err,user) {
        if(err) return next(err);
        res.json(user);
    });
   });

   });
});

router.post('/signup', function(req, res) {
    var saltRounds = 5;
    bcrypt.hash(req.body.Password, saltRounds, function(err, hash){
       if(err) {
          return res.status(500).json({
             error: err
          });
       }
       else {
          const user = new User({
             FirstName:req.body.FirstName,
             LastName: req.body.LastName,
             Role: req.body.Role,
             Email: req.body.Email,
             Password: hash    
          });
          user.save().then(function(result) {
             res.status(200).json({
                success: 'New user has been created'
             });
          }).catch(error => {
             res.status(500).json({
                error: err
             });
          });
       }
    });
 });


 router.post('/signin', function(req, res){
    User.findOne({Email: req.body.Email})
    .then(function(user) {
       bcrypt.compare(req.body.Password, user.Password, function(err, result){
          if(err) {
             return res.status(401).json({
                failed: 'Unauthorized Access'
             });
          }
          //If the user’s credentials email and password are valid then in response, we need to return a JWT token. 
          //So let us generate the token and return to the user.
          if(result) {
             const JWTToken = jwt.sign({
                Email: user.Email,
                _id: user._id
             },
             secretK,
                {
                   expiresIn: '2h'
                });
             return res.status(200).json({
                success: 'Welcome to the JWT Auth',
                token: JWTToken,
                Role: user.Role
             });
          }
          return res.status(401).json({
             failed: 'Unauthorized Access'
          });
       });
    })
    .catch(error => {
       res.status(500).json({
          error: error
       });
    });;
 });



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


// router.post('/users', async (request, response) => {
//     try {
//         request.body.password = bcrypt.hashSync(request.body.password, 10);
//         var user = new UserModel(request.body);
//         var result = await user.create();
//         response.send(result);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });


//Get all Users
router.get('/users',verifyToken, function(req,res,next){
    jwt.verify(req.token, secretK, (err, authData)=>{
       console.log("AAA" + req.token)
      if(err)
      {
         res.send('Problem with token most likely, if postman then verifytoken is the issue')
         return;
      }
    User.find(function (err,user) {
        if(err) return next(err);
        res.json(user);
    });
    
});
});

//Get User by id
router.get('/users/:id',verifyToken, function(req,res,next){
    jwt.verify(req.token, secretK, (err, authData)=>{
      if(err)
      {
         res.send('Problem with token most likely, if postman then verifytoken is the issue')
         return;
      }
    User.findById(req.params.id, function (err,user) {
        if(err) return next(err);
        res.json(user);
    });
    

});
});

//Get user by email
router.get('/users/by-email/:email',verifyToken, function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    jwt.verify(req.token, secretK, (err, authData)=>{
      if(err)
      {
         res.send('Problem with token most likely, if postman then verifytoken is the issue')
         return;
      }
    User.findOne({Email:req.params.email}, function (err,event) {
        if(err) return next(err);
        res.json(event);
    });
    

});

});



router.put('/users/:id',verifyToken,(req, res) => {
    jwt.verify(req.token, secretK, (err, authData)=>{
        if(err)
        {
         res.send('Problem with token most likely, if postman then verifytoken is the issue')
         return;
        }
    bcrypt.hash(req.body.Password, 10, function(err, hash)
    {
       if(typeof req.body.Password != 'undefined')
            req.body.Password = hash;
       User.findByIdAndUpdate(req.params.id, req.body, {'new':true},function(err, user) {
          if (err)
              res.send(err);
          
             
 
          res.json(user);
      });  
    })
    

});
    
 });




router.put('/users/by-email/:email',verifyToken,(req, res,next) => {
        jwt.verify(req.token, secretK, (err, authData)=>{
                
            if(err)
            {
               res.send('Problem with token most likely, if postman then verifytoken is the issue')
               return;
            }
    bcrypt.hash(req.body.Password, 10, function(err, hash)
    {
       if(typeof req.body.Password != 'undefined')
            req.body.Password = hash;
            User.findOneAndUpdate({Email:req.params.email}, req.body,{'new': true}, function (err,user) {
                if (err)
              res.send(err);
          
             
 
          res.json(user);
      });  
    })

});
          
 });



//Delete User by id
router.delete('/users/:id',verifyToken, function(req,res,next){
   jwt.verify(req.token, secretK, (err, authData)=>{
                
      if(err)
      {
         res.send('Problem with token most likely, if postman then verifytoken is the issue')
         return;
      }
    User.findByIdAndDelete(req.params.id, req.body, function (err,user) {
        if(err) return next(err);
        res.json(user);
    });
   });

});

//Delete User by email
router.delete('/users/by-email/:email',verifyToken, function(req,res,next){
   jwt.verify(req.token, secretK, (err, authData)=>{
                
      if(err)
      {
         res.send('Problem with token most likely, if postman then verifytoken is the issue')

  
  return;
      }
    User.deleteOne({Email:req.params.email}, req.body, function (err,user) {
        if(err) return next(err);
        res.json(user);
    });

   });
});



//Register User
var BCRYPT_SALT_ROUNDS = 12;
// router.post('/users', function (req, res, next) {
    
//     var username = req.body.username;
//     var password = req.body.password; 
  
//     bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
//       .then(function(hashedPassword) {
//           return User.create(username, hashedPassword);
//       })
//       .then(function() {
//           res.send();
//       })
//       .catch(function(error){
//           console.log("Error saving user: ");
//           console.log(error);
//           next();
//       });
//   });


//   //Login User
//   router.post('/login', function (req, res, next) { 
//     var username = req.body.username;
//     var password = req.body.password;
  
//     User. findOne(req.body)
//       .then(function(user) {
//           return bcrypt.compare(password, user.password);
//       })
//       .then(function(samePassword) {
//           if(!samePassword) {
//               res.status(403).send();
//           }
//           res.send();
//       })
//       .catch(function(error){
//           console.log("Error authenticating user: ");
//           console.log(error);
//           next();
//       });
//   });


module.exports = router;
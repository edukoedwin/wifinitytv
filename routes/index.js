var express = require('express');
var router = express.Router();
//authentication middleware
function authenticateToken(req,res,next){
  //get the jwt access token from the request
  
  var token =req.body.token || req.headers['token'];
  if(token){
      jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
  if(err){
      console.log(decoded)
  res.status(500).send('token is invalid')
  }else{
      next();
  
  }
      })
  }else{
      res.send('please send a token')
  }
  }

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res) {
  res.render('about', { title: 'Express' });
});
router.get('/stream', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/getapp', function(req, res) {
  res.render('getApp', { title: 'Express' });
});
//protected route 
router.get('/protected',authenticateToken,(req,res)=>{
  res.send('token verified')
})
module.exports = router;

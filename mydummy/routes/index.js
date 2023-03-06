var express = require('express');
var router = express.Router();

const loginuser=require('../controller/login')
/* GET home page. */
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index')
  next('');});
   
  router.post('/login', loginuser.userLogin)
  
  
  const signinuser=require('../controller/signup');

  router.get('/signup', function(req,res,next){
     res.render("reg");
     next('')
  });
 router.post('/reg',signinuser.usersignup);
 
  module.exports=router;










// router.get('/submit',(req,res)=>{
//   res.render('submit')
// })
// router.post('/submit',(req,res)=>{
//   res.render('submit')
// })
module.exports = router;

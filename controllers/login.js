const jwt=require('jsonwebtoken');
const connection = require('./../config');
const bcrypt = require('bcryptjs')
const dotenv= require('dotenv')
dotenv.config();

module.exports.login=function(req,res,next){
   const {email,password} =req.body
   connection.query(`select * from users where email = '${email}'`, (err,results)=>{
     if(err|| !results){
       res.json({
         status:false,
         message:'there are errors with the query'
       });
     }else{
       if(results.length>0){
         bcrypt.compare(password,results[0].password,(req,result)=>{
if(!result){
  res.json({
    status:false,
  message:"email and password dont match"
});
}else{
                 
  const token = jwt.sign({id:results[0].id},process.env.SECRET_KEY);
  res.cookie("t", token, { expire: new Date() +9999 })
  const { id, firstName, email } = results[0]
    return res.json({ token, user: { id, email, firstName } })
 }
         })
         
       }else{
        res.json({
          status:false,
        message:"Email does not exits",
        

      });
       }
     }
   })
}
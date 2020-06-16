var connection = require('../config');
var bcrypt = require('bcryptjs');
module.exports.register=(req,res)=>{

   const {firstname,lastname,email,password,phone} = req.body

    bcrypt.hash(password, 10, function(err, hash) {
        // Store hash password in your Database.
    
    connection.query(`INSERT INTO users (firstName,lastName,password,email,phone) values('${firstname}','${lastname}','${hash}','${email}','${phone}')`,(error, results, fields)=> {
      const{email}= req.body
    const user=connection.query(`select * from users where email = '${email}'`)
        if (user){
        return res.status(403).json({
            error: "email is already taken Login!"
        });
        }

      if (error) {
        res.json({
            status:false,
            message:'there are some error with query',
            error
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
});
}
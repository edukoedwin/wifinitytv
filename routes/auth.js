const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const app = express();

const registerController=require('../controllers/register');
const loginController=require('../controllers/login');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/* route to handle login and registration */
router.post('/register',registerController.register);
router.post('/login',loginController.login);
module.exports = router;

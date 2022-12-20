const { Router } = require('express');
const userController = require('../controllers/user_controller'); 
const router = Router()
const { body } = require ('express-validator');

router.post('/registration'
// body('email').isEmail(),
// body('password').isLength({min:5,max: 32})
,userController.registration); 

router.post('/login',userController.login);

router.post('/logout',userController.logout);

// router.get('/activate/:link',userController.activate);

// router.get('/refresh',userController.refresh);

router.post('/categories',userController.getCategoriesProducts);

 
module.exports = router;
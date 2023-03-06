 const { 
  UserCtrl, 
  DialogCtrl, 
  MessageCtrl, 
  UploadFileCtrl, 
  RoleCtrl, 
  ProfileCtrl 
} = require('../controllers/index');   
 const { Router } = require('express');
 const router = Router();

 const createRoutes = (app, io) => {

  app.use('/api',router); 
  const UserController = new UserCtrl(io);
  const RoleController = new RoleCtrl(io);
  const ProfileController = new ProfileCtrl(io); 
  const DialogController = new DialogCtrl(io);
  const MessageController = new MessageCtrl(io);
  const UploadFileController = new UploadFileCtrl(io); 

/* Users Router */
router.get('/users', UserController.list); // Получить всех пользователей
router.get('/user/:id', UserController.getById);  // получить пользователя по id
router.post('/create_user', UserController.add);  // создание пользователя
router.put('/update_user/:id', UserController.update); 
router.delete('/delete_user/:id', UserController.delete); 
  
// /* Users Roles */
// router.get('/roles', RoleController.list);
// router.get('/roles/:name', RoleController.getByName);
// router.post('/create_role', RoleController.add); 

// /* Users Profile */
// router.get('/profiles', ProfileController.list);
// router.get('/profiles/:id', ProfileController.getById); 
// router.post('/create_profile', ProfileController.add); 

// /* Advance Router */
// router.post('/api/role/add_user', role.addUser);
// router.post('/api/company/add_with_branches', companyController.addWithBranches);

// /* Diologs Router */
// router.get('/dialogs', DialogController.list);
// router.get('/dialog/:id', DialogController.getById);
// router.post('/create_dialog', DialogController.add); 
 
// /* Diologs Router */
// router.get('/messages', MessageController.list);
// router.get('/messages/:id', MessageController.getById);
// router.post('/create_messages', MessageController.add); 

};

module.exports = createRoutes;
 
// const { body } = require ('express-validator');

// app.get("/user/me", UserController.getMe);
// app.get("/user/verify", UserController.verify);
// app.post("/user/signup", registerValidation, UserController.create);
// app.post("/user/signin", loginValidation, UserController.login);
// app.get("/user/find", UserController.findUsers);
// app.get("/user/:id", UserController.show);
// app.delete("/user/:id", UserController.delete);

// app.get("/dialogs", DialogController.index);
// app.delete("/dialogs/:id", DialogController.delete);
// app.post("/dialogs", DialogController.create);

// app.get("/messages", MessageController.index);
// app.post("/messages", MessageController.create);
// app.delete("/messages", MessageController.delete);

// app.post("/files", multer.single("file"), UploadFileController.create);
// app.delete("/files", UploadFileController.delete);

 
// router.post('/registration'
// // body('email').isEmail(),
// // body('password').isLength({min:5,max: 32})
// ,userController.registration); 
// router.post('/login',userController.login);
// router.post('/logout',userController.logout);
// router.post('/dialog/getDialogsAuthor',dialogController.getDialogsAuthor);
// router.post('/dialog/createdialog',dialogController.createDialog);
  

// /* Company Router */
// router.get('/api/company', companyController.list);
// router.get('/api/company/:id', companyController.getById);
// router.post('/api/company', companyController.add);
// router.put('/api/company/:id', companyController.update);
// router.delete('/api/company/:id', companyController.delete);

// /* Branch Router */
// router.get('/api/branch', branchController.list);
// router.get('/api/branch/:id', branchController.getById);
// router.post('/api/branch', branchController.add);
// router.put('/api/branch/:id', branchController.update);
// router.delete('/api/branch/:id', branchController.delete);

// /* Profile Router */
// router.get('/api/profile', profileController.list);
// router.get('/api/profile/:id', profileController.getById);
// router.post('/api/profile', profileController.add);
// router.put('/api/profile/:id', profileController.update);
// router.delete('/api/profile/:id', profileController.delete);


 
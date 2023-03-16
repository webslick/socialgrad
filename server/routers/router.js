const { Router } = require('express');
const { body } = require ('express-validator');
const authMiddleware = require('../middelwares/auth-middleware');
 const { 
  AdminCtrl,
  UserCtrl,  
  ProfileCtrl,
  LocationCtrl, 
  HomeCtrl, 
  RoomCtrl
} = require('../controllers/index');  

const router = Router();

const createRoutes = (app, io) => {

app.use('/api',router);

const AdminController = new AdminCtrl(io);
const UserController = new UserCtrl(io);
const ProfileController = new ProfileCtrl(io); 
const LocationController = new LocationCtrl(io); 
const HomeController = new HomeCtrl(io);  
const RoomsController = new RoomCtrl(io);  
 
/* Users Router */
 
router.get("/user/me", authMiddleware, UserController.getMe);  
router.get("/users/home", authMiddleware, UserController.getUsersFromHome);  
router.post('/login', authMiddleware, UserController.login);
router.post('/logout', authMiddleware, UserController.logout); 
router.get('/refresh', authMiddleware, UserController.refresh); 
 
/* Profile Router */
 
router.get('/profiles/:id', ProfileController.getProfile); // Получить профиль конкретного пользователя  
router.put('/update_profile/:id', ProfileController.updateProfile); // Обновить данные профиля пользователя  
router.post('/create_role', ProfileController.addRole); // Создать роль 
router.post('/create_roles_user', ProfileController.addUsersRole); // Присвоить роль для пользователя 
router.get('/roles', ProfileController.listRoles); // Получить существующие роли   
router.get('/roles/:role', ProfileController.getRole); // Получить всех пользователей с конкретной ролью 
router.put('/update_user_roles/:id', ProfileController.updateRole); // Обновить роль у пользователя 
router.delete('/delete_role/:id', ProfileController.deleteRole); // Удалить роль  
router.delete('/delete_roles_user/:id/:userId', ProfileController.deleteUsersRole); // Удалить роль у конкретного пользователя 

/* Homes Router */

router.post('/create_home', HomeController.addHome); // Создать дом 
router.get('/homes', HomeController.listHomes); // Получить все подключеные дома
router.get('/home/:id', HomeController.getHome); // Получить конкретный подключеный дом
router.put('/update_home/:id', HomeController.updateHome); // Обновить данные конкретного дома
router.delete('/delete_home/:id', HomeController.deleteHome); // Удалить диалог пользователя 
router.post('/create_flat', HomeController.addFlat); // Создать квартиру 
router.get('/flats', HomeController.listFlats); // Получить все квартиры
router.get('/flat/:id', HomeController.getFlat); // Получить конкретнeую квартиру
router.put('/update_flat/:id', HomeController.updateFlat); // Обновить данные квартиры
router.delete('/delete_flat/:id', HomeController.deleteFlat); // Удалить квартиру
 
/* Location Router */

router.post('/create_region', LocationController.addRegion); // Создать область 
router.get('/regions', LocationController.listRegion); // Получить всех созданые области
router.get('/region/:id', LocationController.getRegion); // Получить конкретную область
router.put('/update_region/:id', LocationController.updateRegion); // Обновить данные области
router.delete('/delete_region/:id', LocationController.deleteRegion); // Удалить область  
router.post('/create_city', LocationController.addCity); // Создать город 
router.get('/citys', LocationController.listCitys); // Получить всех созданые города
router.get('/city/:id', LocationController.getCity); // Получить конкретный город
router.put('/update_city/:id', LocationController.updateCity); // Обновить данные конкретного города
router.delete('/delete_city/:id', LocationController.deleteCity); // Удалить город 
router.post('/create_district', LocationController.addDistrict); // Создать район
router.get('/districts', LocationController.listDistrict); // Получить всех созданые районы
router.get('/district/:id', LocationController.getDistrict); // Получить конкретный район
router.put('/update_district/:id', LocationController.updateDistrict); // Обновить данные конкретного района
router.delete('/delete_district/:id', LocationController.deleteDistrict); // Удалить район 
router.post('/create_street', LocationController.addStreet); // Создать улицу 
router.get('/streets', LocationController.listStreet); // Получить всех созданые улицы
router.get('/street/:id', LocationController.getStreet); // Получить конкретную улицу
router.put('/update_street/:id', LocationController.updateStreet); // Обновить данные конкретной улицы
router.delete('/delete_street/:id', LocationController.deleteStreet); // Удалить улицу
 
/* Admin Router */

router.post('/registration',AdminController.registration); 
router.post('/create_user', AdminController.addUser);  // Создание пользователя
router.get('/users', AdminController.listUsers); // Получить всех пользователей
router.get('/user/:id', AdminController.getUser);  // Получить пользователя по id
router.put('/update_user/:id', AdminController.updateUser); // Обновить данные пользователя
router.delete('/delete_user/:id', AdminController.deleteUser); // Удалить пользователя
router.get('/authinfo/:id', AdminController.getAuthinfo); // Получить аутентификационные данные пользователя
router.put('/update_authinfo/:id', AdminController.updateAuthinfo); // Обновить аутентификационные данные пользователя 
router.put('/update_referalinfo/:id', AdminController.updateReferalinfo); // Обновить реферальные данные пользователя 
router.get('/subscribes/:id', AdminController.getSubscribe); // Получить данные о подписке пользователя
router.put('/update_subscribes/:id', AdminController.updateSubscribe); // Обновить данные о подписке пользователя 
router.get('/wallet/:id', AdminController.getWallet); // Получить данные о кошельке пользователя
router.put('/update_wallet/:id', AdminController.updateWallet); // Обновить данные о кошельке пользователя
  
/* Rooms Router */

router.post('/create_room', RoomsController.addRoom); // Создать комнату 
router.get('/rooms', RoomsController.listRooms); // Получить все комнаты
router.get('/room/:id', RoomsController.getRoom); // Получить конкретную комнату 
router.put('/update_room/:id', RoomsController.updateRoom); // Обновить данные о комнате
router.delete('/delete_room/:id', RoomsController.deleteRoom); // Удалить комнату 
router.post('/create_dialog', RoomsController.addDialog); // Создать диалог для комнаты 
router.get('/dialogs', RoomsController.listDiologs); // Получить все диалоги конкретной комнаты
router.get('/dialog/:id', RoomsController.getDialog); // Получить конкретной диалог комнаты
router.put('/update_dialog/:id', RoomsController.updateDialog); // Обновить конкретной диалог комнаты
router.delete('/delete_dialog/:id', RoomsController.deleteDialog); // Удалить конкретной диалог комнаты
router.post('/create_message', RoomsController.addMessage); // Создать сообщение в диологе
router.get('/messages_dialog/:dialogId', RoomsController.listMessages); // Получить все сообщения в диалоге 
router.get('/message/:id', RoomsController.getMessage); // Получить конкретное сообщение в диалоге
router.put('/update_message/:id', RoomsController.updateMessage); // Обновить конкретное сообщение в диалоге
router.delete('/delete_message/:id', RoomsController.deleteMessage); // Удалить конкретное сообщение в диалоге
 
};

module.exports = createRoutes;
 

 
// app.post("/user/signup", registerValidation, UserController.create);
// app.post("/user/signin", loginValidation, UserController.login);
 
// app.post("/files", multer.single("file"), UploadFileController.create);
// app.delete("/files", UploadFileController.delete);

  
 
const express = require("express");
const router = express.Router();
let UserController=require("../controllers/userController")

router.get('/user', UserController.getUser);
router.post('/login', UserController.login);
router.post('/user', UserController.register);
router.delete('/user/:id', UserController.deleteUser);
router.put('/user/:id', UserController.updateUser);

module.exports = router;

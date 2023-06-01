import express from 'express'
import usersController from '../controller/userController.js'


const router = express.Router();

router
    .get("/user", usersController.userList)
    .get("/user/:id", usersController.listUserById)
    .post("/user" , usersController.addUser)
    .post("/auth/checked", usersController.checkUserExsistsByEmail)
    .put("/user/:id", usersController.userUpdate)
    .delete("/user/:id", usersController.userDelete)
    
export default router;
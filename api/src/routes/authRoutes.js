import express from 'express';
import authController from '../controller/authController.js'

const router = express.Router();


router
    .post("/auth/login/user",authController.login)


export default router
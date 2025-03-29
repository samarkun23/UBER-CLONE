import express from 'express'
const router = express.Router()
import { body } from 'express-validator'
import { userController } from '../controllers/user.controller.js' //all logic goes here

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    //fullname is come like object 
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be 3 digit long'),
    body('password').isLength({min:6}).withMessage('Password must be 6 charater long')

],
    userController.registerUser
)







export default router
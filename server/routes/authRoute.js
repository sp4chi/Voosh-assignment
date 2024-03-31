import express from 'express';
import { addUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

//create a user
router.post('/add-user', addUser);

//sign in
router.post('/login-user', loginUser);

export default router;

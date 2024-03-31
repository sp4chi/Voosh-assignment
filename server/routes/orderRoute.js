import express from 'express';
import { addOrder, getOrder } from '../controllers/orderController.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/add-order', verifyToken, addOrder);
router.get('/get-order/:id', verifyToken, getOrder);

export default router;

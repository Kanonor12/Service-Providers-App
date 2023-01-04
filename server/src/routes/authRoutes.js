import express from 'express';
// Internal imports
import { loginUser, registerService, registerUser } from '../controllers/authControllers.js';

const router = express.Router()

router.post("/register-user", registerUser)
router.post("/register-service", registerService)
router.post('/login', loginUser)

export default router
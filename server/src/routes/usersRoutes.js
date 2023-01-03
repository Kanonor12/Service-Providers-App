import express from 'express';
import { deleteUser, getUserById, getUsers, updateUser } from '../controllers/serviceProvidersControllers.js';

const router = express.Router();


router.get("/", getUsers)
router.get("/:id", getUserById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router;

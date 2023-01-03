import express from 'express';
import { deleteServiceProvider, getServiceProviderById, getServiceProviders, updateServiceProvider } from '../controllers/usersController.js';

const router = express.Router();


router.get("/", getServiceProviders)
router.get("/:id", getServiceProviderById)
router.put("/:id", updateServiceProvider)
router.delete("/:id", deleteServiceProvider)

export default router;

import express from 'express';
import { deleteServiceProvider, getServiceProviderById, getServiceProviders, updateServiceProvider } from '../controllers/serviceProvidersControllers.js';
import { verifyAdmin, verifyToken, verifyServiceProvider, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();


router.get("/", getServiceProviders)
router.get("/:id", getServiceProviderById)
router.put("/:id", verifyServiceProvider, updateServiceProvider)
router.delete("/:id", verifyServiceProvider, deleteServiceProvider)

export default router;

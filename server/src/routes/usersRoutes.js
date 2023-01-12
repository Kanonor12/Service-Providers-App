import express from 'express';
import { deleteUser, getUserById, getUsers, updateUser } from '../controllers/usersController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.put('/:id', verifyUser, updateUser);
router.delete('/:id', verifyUser, deleteUser);

router.get('/get-users', verifyAdmin, getUsers);
router.get('/:id', verifyUser, getUserById);

/* router.get("/checkauthentication",verifyToken, (req,res,next)=>{
    res.send("hello user, you are logged in")
  })
router.get("/checkuser/:id", verifyUser,(req,res,next)=>{
   res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
   res.send("hello admin, you are logged in and you can delete all accounts")
}) */

export default router;

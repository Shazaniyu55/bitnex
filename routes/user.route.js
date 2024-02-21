import express from 'express';
import {
    updateUser,
    deleteUser,
    signout,
    test,
    getUser,
    getUsers
} from '../controller/user.controller.js';

import { verifyToken } from '../util/verifyUser.js';
const router = express.Router()

router.get('/test', test)
router.post('/signout', signout);
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);

export default router;
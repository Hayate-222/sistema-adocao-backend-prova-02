const express = require('express');
const { authenticateToken, authorizeRole, selfAuthorize } = require('../middlewares/auth.middleware');
const { getAllUsers, findUserById, updateUserData, deleteUser } = require('../controllers/userController');


const router = express.Router();

router.get('/', authenticateToken, authorizeRole('admin'), getAllUsers);

router.get('/:id', authenticateToken, selfAuthorize('admin'), findUserById);

router.put('/:id', authenticateToken, selfAuthorize('admin'), updateUserData);

router.delete('/:id', authenticateToken, authorizeRole('admin'), deleteUser);

export default router;

const express = require('express');
const { authenticateToken, authorizeRole, selfAuthorize } = require('../middlewares/auth.middleware');
const { getAllUsers, findUserById, updateUserData, deleteUser, registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/', registerUser);

router.post('/login', loginUser);

router.get('/', authenticateToken, authorizeRole('admin'), getAllUsers);

router.get('/:id', authenticateToken, selfAuthorize('admin'), findUserById);

router.put('/:id', authenticateToken, selfAuthorize('admin'), updateUserData);

router.delete('/:id', authenticateToken, authorizeRole('admin'), deleteUser);

module.exports = router;

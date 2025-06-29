const express = require('express');
const { authenticateToken, authorizeRole } = require('../middlewares/auth.middleware');
const { getAllPets, getPetData, addNewPet, updatePet, deletePet } = require('../controllers/petsController');
const router = express.Router();


router.get('/', authenticateToken, getAllPets);


router.get('/:id', authenticateToken, getPetData);


router.post('/', authenticateToken, authorizeRole('admin'), addNewPet);


router.put('/:id', authenticateToken, authorizeRole('admin'), updatePet);


router.delete('/:id', authenticateToken, authorizeRole('admin'), deletePet);

export default router;

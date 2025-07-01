const express = require('express');
const { authenticateToken, authorizeRole } = require('../middlewares/auth.middleware');
const router = express.Router();
const { getAllAdoptions, makeAdoption } = require('../controllers/adoptionController');

router.get('/', authenticateToken, authorizeRole('admin'), getAllAdoptions);

router.post('/', authenticateToken, authorizeRole('adopter'), makeAdoption);

module.exports = router;

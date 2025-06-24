const express = require('express');
const { authenticateToken, authorizeRole } = require('../middlewares/auth.middleware');
const router = express.Router();


router.get(
    '/',
    authenticateToken,
    authorizeRole('admin'),
    async (req, res) => {
        try {
            const adoptions = await AdoptionModel.showAll();
            res.json(adoptions);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar adoções' });
        }
    }
);


router.post(
    '/',
    authenticateToken,
    authorizeRole('adopter'),
    async (req, res) => {
        try {
            const user_id = req.user.id;
            const { pet_id, adoption_date } = req.body;

            const adoption = await AdoptionModel.makeAdoption({
                user_id,
                pet_id,
                adoption_date
            });

            res.status(201).json(adoption);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
);

export default router;

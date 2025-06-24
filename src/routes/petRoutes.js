const express = require('express');
const { authenticateToken, authorizeRole } = require('../middlewares/auth.middleware');

const router = express.Router();


router.get(
    '/',
    authenticateToken,
    async (req, res) => {
        try {
            const pets = await PetModel.showAll();
            res.json(pets);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar pets' });
        }
    }
);


router.get(
    '/:id',
    authenticateToken,
    async (req, res) => {
        try {
            const pet = await PetModel.findById(parseInt(req.params.id));
            if (!pet) return res.status(404).json({ error: 'Pet não encontrado' });
            res.json(pet);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar pet' });
        }
    }
);


router.post(
    '/',
    authenticateToken,
    authorizeRole('admin'),
    async (req, res) => {
        try {
            const newPet = await PetModel.addPet(req.body);
            res.status(201).json(newPet);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao adicionar pet' });
        }
    }
);


router.put(
    '/:id',
    authenticateToken,
    authorizeRole('admin'),
    async (req, res) => {
        try {
            const petId = parseInt(req.params.id);
            await PetModel.updatePet(petId, req.body);
            res.json({ message: 'Pet atualizado com sucesso' });
        } catch (err) {
            res.status(500).json({ error: 'Erro ao atualizar pet' });
        }
    }
);


router.delete(
    '/:id',
    authenticateToken,
    authorizeRole('admin'),
    async (req, res) => {
        try {
            const petId = parseInt(req.params.id);
            const isAvailable = await petService.petIsAvailable(petId);

            if (!isAvailable) {
                return res.status(403).json({ message: 'Pet não está disponível para exclusão' });
            }

            await PetModel.deletePet(petId);
            res.json({ message: 'Pet deletado com sucesso' });
        } catch (err) {
            res.status(500).json({ error: 'Erro ao deletar pet' });
        }
    }
);

export default router;

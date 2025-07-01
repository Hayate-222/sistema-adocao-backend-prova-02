const PetModel = require('../models/petModel');
const petService = require('../services/petService');

const getAllPets = async (req, res) => {
      try {
            const pets = await PetModel.showAll();
            res.json(pets);
      } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar pets' });
      }
};

const getPetData = async (req, res) => {
      try {
            const pet = await PetModel.findById(parseInt(req.params.id));
            if (!pet) return res.status(404).json({ error: 'Pet não encontrado' });
            res.json(pet);
      } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar pet' });
      }
};

const addNewPet = async (req, res) => {
      try {
            const newPet = await PetModel.addPet(req.body);
            res.status(201).json(newPet);
      } catch (err) {
            res.status(500).json({ error: 'Erro ao adicionar pet' });
      }
};

const updatePet = async (req, res) => {
      try {
            const petId = parseInt(req.params.id);
            if (isNaN(petId)) {
                  return res.status(400).json({ error: 'ID do pet inválido' });
            }

            console.log('Updating pet with ID:', petId, 'Data:', req.body);
            await PetModel.updatePet(petId, req.body);
            res.json({ message: 'Pet atualizado com sucesso' });
      } catch (err) {
            console.error('[ERROR updating pet]:', err);
            res.status(500).json({ error: 'Erro ao atualizar pet', details: err.message });
      }
};

const deletePet = async (req, res) => {
      try {
            const petId = parseInt(req.params.id);

            const hasAdoptions = await petService.petHasAdoptions(petId);
            if (hasAdoptions) {
                  return res.status(403).json({ message: 'Não é possível deletar um pet que já foi adotado.' });
            }

            const isAvailable = await petService.petIsAvailable(petId);
            if (!isAvailable) {
                  return res.status(403).json({ message: 'Pets adotados não podem ser deletados.' });
            }

            await PetModel.deletePet(petId);
            res.json({ message: 'Pet deletado com sucesso' });
      } catch (err) {
            res.status(500).json({ error: 'Erro ao deletar pet', details: err.message });
      }
};

module.exports = { getAllPets, getPetData, addNewPet, updatePet, deletePet };

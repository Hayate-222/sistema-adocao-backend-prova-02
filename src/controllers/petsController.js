const PetModel = require('../models/petModel');

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
            await PetModel.updatePet(petId, req.body);
            res.json({ message: 'Pet atualizado com sucesso' });
      } catch (err) {
            res.status(500).json({ error: 'Erro ao atualizar pet' });
      }
};

const deletePet = async (req, res) => {
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
};

module.exports = { getAllPets, getPetData, addNewPet, updatePet, deletePet };

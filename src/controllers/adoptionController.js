const AdoptionModel = require('../models/adoptionModel');
const userService = require('../services/userService');
const petService = require('../services/petService');

const getAllAdoptions = async (req, res) => {
      try {
            const adoptions = await AdoptionModel.showAll();
            res.json(adoptions);
      } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar adoções' });
      }
};

const makeAdoption = async (req, res) => {
      try {
            const user_id = req.user.id;
            const { pet_id, adoption_date } = req.body;

            const isAdopter = await userService.userIsAdopter(user_id);
            if (!isAdopter) {
                  return res.status(403).json({ error: 'Apenas usuários com o perfil de adotante podem realizar adoções.' });
            }

            const isAvailable = await petService.petIsAvailable(pet_id);
            if (!isAvailable) {
                  return res.status(400).json({ error: 'Este pet não está disponível para adoção.' });
            }

            const alreadyAdopted = await AdoptionModel.userAlreadyAdoptedPet(user_id, pet_id);
            if (alreadyAdopted) {
                  return res.status(400).json({ error: 'Esse pet já foi adotado.' });
            }

            const adoption = await AdoptionModel.makeAdoption({ user_id, pet_id, adoption_date });
            res.status(201).json(adoption);
      } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro interno ao processar a adoção.' });
      }
};

module.exports = { getAllAdoptions, makeAdoption };

const AdoptionModel = require('../models/adoptionModel');

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

            const adoption = await AdoptionModel.makeAdoption({ user_id, pet_id, adoption_date });

            res.status(201).json(adoption);
      } catch (err) {
            res.status(400).json({ error: err.message });
      }
};

module.exports = { getAllAdoptions, makeAdoption };

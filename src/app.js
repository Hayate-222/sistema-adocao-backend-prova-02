const express = require('express');

const userRoutes = require('./routes/userRoutes.js');
const petRoutes = require('./routes/petRoutes.js');
const adoptionRoutes = require('./routes/adoptionRoutes.js');

// const SqlExecutar = require('./services/sqlRun');
// SqlExecutar();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/pets', petRoutes);
app.use('/adoptions', adoptionRoutes);

app.use(express.json());

module.exports = app;

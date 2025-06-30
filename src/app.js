const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/userRoutes.js');
const petRoutes = require('./routes/petRoutes.js');
const adoptionRoutes = require('./routes/adoptionRoutes.js');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/pets', petRoutes);
app.use('/adoptions', adoptionRoutes);

app.use(express.json());
app.use(errorMiddleware);

module.exports = app;

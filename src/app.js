const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
import userRoutes from './routes/userRoutes.js';
import petRoutes from './routes/petRoutes.js';
import adoptionRoutes from './routes/adoptionRoutes.js';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/pets', petRoutes);
app.use('/adoptions', adotionRoutes);


app.use(express.json());
app.use(errorMiddleware);

module.exports = app;

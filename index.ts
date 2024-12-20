import express from 'express';

import restaurantsRouter from './routes/restaurants.js';
import cuisinesRouter from './routes/cuisines.js';
import { ErrorHandler } from './middlewares/errorHandler.js';

const PORT = process.env.PORT || 3000;

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use('/restaurants', restaurantsRouter);
app.use('/cuisines', cuisinesRouter);

app.use(ErrorHandler);

app.listen(PORT, () => console.log(`Application running on port ${PORT}`)).on('error', (error) => {
	throw new Error(error.message);
});

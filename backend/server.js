const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoute');
const dataRoute = require('./routes/dataRoute');
const { connectDB } = require('./connection');

app.use(express.json());
app.use(
	cors({
		origin: ['http://localhost:5173'],
		credentials: true,
	})
);
app.use(cookieParser());

app.use('/user', userRoute);
app.use('/data', dataRoute);

connectDB();
app.listen(5000, () => console.log('connecting to port 5000'));

// cors to open to frontedn
// cookies to save the jwt and access token, define route, open connection and port

const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();

const Data = require('./models/dataModel');

const datas = JSON.parse(fs.readFileSync(`${__dirname}/datas.json`, 'utf-8'));

const loadData = async () => {
	try {
		await Data.create(datas);
		console.log('successfully created');
	} catch (err) {
		console.log(err);
	}
};

mongoose.connect(process.env.MONGODB, {
	useNewUrlParser: true,
});

loadData();
// push data to database, i could use connectDB that i made `forget`

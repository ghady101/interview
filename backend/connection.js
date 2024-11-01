const mongoose = require('mongoose');

const strCnx = process.env.MONGODB;

// create db connection
const connectDB = async () => {
	try {
		const connect = await mongoose.connect(strCnx);
		console.log(
			'database connected:',
			connect.connection.host,
			connect.connection.name
		);
	} catch (err) {
		console.log(err);
	}
};

module.exports = { connectDB };

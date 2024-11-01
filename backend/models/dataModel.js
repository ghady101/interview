const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const dataSchema = new Schema({
	firstName: {
		type: String,
		required: [true, 'required'],
	},
	lastName: {
		type: String,
		required: [true, 'required'],
	},
	email: {
		type: String,
		required: [true, 'required'],
		// unique: [true, 'must be unique'],
	},
	country: {
		type: String,
		required: [true, 'required'],
	},
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;

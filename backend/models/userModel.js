
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// simple we can add validation for email and pass 
const userSchema = new Schema({
	name: {
		type: String,
		required: [true, 'required'],
	},
	email: {
		type: String,
		required: [true, 'required'],
		unique: [true, 'must be unique'],
	},
	password: {
		type: String,
		required: [true, 'required'],
		minlength: [8, 'minimum length is 8 characters'],
		maxLength: [16, 'maximum length is 16 characters'],
	},

	liked: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Data',
		},
	],
});

const User = mongoose.model('User', userSchema);

module.exports = User;

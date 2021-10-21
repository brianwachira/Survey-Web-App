const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const adminSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},

},{ timestamps: true });

adminSchema.plugin(uniqueValidator);
const Admin = mongoose.model('Admin', adminSchema );

module.exports = Admin;
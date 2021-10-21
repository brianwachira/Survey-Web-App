const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const surveySchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	admin: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Admin'
	}
},{ timeStamps: true });

surveySchema.plugin(uniqueValidator);
const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const submissionsSchema = mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	survey: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Survey'
	}
},{ timeStamps: true });

submissionsSchema.plugin(uniqueValidator);
const Submissions = mongoose.model('Submissions', submissionsSchema);

module.exports = Submissions;
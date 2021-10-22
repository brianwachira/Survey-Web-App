const mongoose = require('mongoose');

const responsesSchema =  mongoose.Schema({
	submission: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Submissions'
	},
	response: [
		{
			question: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'QandA',
				required: true
			},
			choice: {
				type: String,
				required: true

			}
		}
	]
}, { timeStamps: true });

const Responses = mongoose.model('Responses', responsesSchema);

module.exports = Responses;
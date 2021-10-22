const mongoose = require('mongoose');

const qandaSchema = mongoose.Schema({
	passage: {
		type : String,
		required: true
	},
	options: [
		{
			choice:{
				type: String,
				required: true
			},
			value:{
				type: String,
				required: true
			}

		}
	],
	survey: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Survey'
	}
}, { timeStamps: true });

const QandA = mongoose.model('QandA', qandaSchema);

module.exports = QandA ;
const jwt = require('jsonwebtoken');
const QandA = require('../models/QandA');
const Survey = require('../models/Survey');
const surveyRouter = require('express').Router();
//const getTokenFrom  = require('../utils/customFunctions');

const getTokenFrom = (request) => {
	const authorization = request.get('authorization');
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		return authorization.substring(7);
	}
	return null;
};

surveyRouter.post('/', async (request, response) => {
	const body = request.body;
	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}

	// create new Survey object
	const survey = new Survey({
		title: body.title,
		admin: body.admin
	});

	//save the survey
	const savedSurvey = await survey.save();

	//create an array for storing new array of saved questions and answers
	let savedQandAList = [];

	// loop throw array of questions and push them
	body.questions.forEach(async question => {
		//console.log(question);
		const questionAndAnswers = {
			passage: question.passage,
			options: question.options,
			survey: savedSurvey._id
		};
		//const savedQandA = await questionAndAnswers.save;
		savedQandAList.push(questionAndAnswers);
	});
	//bulk insert into QandA
	const saved = await QandA.insertMany(savedQandAList);

	const fullSurvey = {
		title: savedSurvey.title,
		questions: saved
	};
	response.json(fullSurvey);
});

// public route
surveyRouter.get('/all', async (request, response) => {
	//fetch surveys
	const surveys = await Survey.find({});

	//fetch Questions and create an array with survey info and questions
	const surveyWithQuestions = await Promise.all(
		surveys.map(async survey => {
			let questions = await QandA.find({ survey: survey._id });
			return {
				survey,
				questions
			};
		})
	);
	response.json(surveyWithQuestions);

});

//protected route for admins only
surveyRouter.get('/protected/all', async (request, response) => {
	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}
	//fetch surveys
	const surveys = await Survey.find({}).populate('admin', { _id: 1, username: 1 });

	//fetch Questions and create an array with survey info and questions
	const surveyWithQuestions = await Promise.all(
		surveys.map(async survey => {
			let questions = await QandA.find({ survey: survey._id });
			return {
				survey,
				questions
			};
		})
	);
	response.json(surveyWithQuestions);

});

//get survey by id
surveyRouter.get('/:id', async (request, response) => {
	//fetch surveys
	const survey = await Survey.findById(request.params.id);
	//fetch q/a too
	const qandA = await QandA.find({ survey: survey._id });

	response.json({
		survey,
		qandA
	});
});

//get surveys by adminID
surveyRouter.get('/admin/:id', async (request, response) => {
	//fetch surveys
	const surveys = await Survey.findById({ admin: request.params.id });
	//fetch Questions and create an array with survey info and questions
	const surveyWithQuestions = await Promise.all(
		surveys.map(async survey => {
			let questions = await QandA.find({ survey: survey._id });
			return {
				survey,
				questions
			};
		})
	);
	response.json(surveyWithQuestions);
});

surveyRouter.delete('/:id', async (request, response) => {
	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}
	await Survey.deleteOne({ _id: request.params.id });
	await QandA.deleteMany({ survey: request.params.id });

	response.status(204).end();
});

module.exports = surveyRouter;

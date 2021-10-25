const jwt = require('jsonwebtoken');
const Submission = require('../models/Submissions');
const Response = require('../models/Responses');
const Submissions = require('../models/Submissions');
const Responses = require('../models/Responses');

const submissionsRouter = require('express').Router();

const getTokenFrom = (request) => {
	const authorization = request.get('authorization');
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		return authorization.substring(7);
	}
	return null;
};

submissionsRouter.post('/', async (request, response) => {
	const body = request.body;
	//Create a new Submissions object
	const submission = new Submission({
		firstname: body.firstName,
		lastname: body.lastName,
		email: body.email,
		phone:body.phone,
		survey: body.surveyId
	});

	//Save the submission
	const savedSubmission = await submission.save();

	// Create an new object for responses
	const newResponseObject = new Response({
		submission: savedSubmission._id,
		response: body.response
	});

	// save the Response
	const savedResponse = await newResponseObject.save();

	response.json(
		{
			savedSubmission,
			savedResponse
		}
	);

});

submissionsRouter.get('/all', async (request, response ) => {

	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}

	//fetch submissions
	const submissons = await Submissions.find({}).populate('survey', { _id: 1, title: 1 });

	//fetch Questions and create an array with response info and questions
	const submissionWithResponses = await Promise.all(
		submissons.map( async submission => {
			let response = await Responses.find({ submission : submission._id }).populate('response.question',{ id:1, passage:1, options: 1 });
			return {
				submission,
				response
			};
		})
	);
	response.json(submissionWithResponses);
});

submissionsRouter.get('/:id', async ( request, response ) => {

	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}
	//fetch submission and responses
	const submission = await (await Submissions.findById(request.params.id)).populate('survey', { _id: 1, title: 1 });
	const responses = await Responses.find({ submission : submission._id }).populate('response.question',{ id:1, passage:1, options: 1 });

	response.json({
		submission,
		responses
	});
});

//get submissions by phone number
submissionsRouter.get('/phone/:phone', async ( request, response ) => {
	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}

	//fetch submissions and responses
	const submissons = await Submissions.find({ phone: request.params.phone }).populate('survey', { _id: 1, title: 1 });

	//fetch Questions and create an array with response info and questions
	const submissionWithResponses = await Promise.all(
		submissons.map( async submission => {
			let response = await Responses.find({ submission : submission._id }).populate('response.question',{ id:1, passage:1, options: 1 });
			return {
				submission,
				response
			};
		})
	);
	response.json(submissionWithResponses);
});

//get submissions by survey id
submissionsRouter.get('/survey/:id', async (request, response) => {
	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}

	//fetch submissions and responses
	const submissons = await Submissions.find({ survey: request.params.id });

	//fetch Questions and create an array with response info and questions
	const submissionWithResponses = await Promise.all(
		submissons.map( async submission => {
			let response = await Responses.find({ submission : submission._id });
			return {
				submission,
				response: response[0].response
			};
		})
	);
	response.json(submissionWithResponses);

});

module.exports = submissionsRouter;

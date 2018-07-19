'use strict';
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const commentsRoute = require('./routes/comments-route');

//Using dot env to laod environment variables
dotenv.load();

const app = express();
app.use(bodyParser.json());
//location for static content
app.use(express.static(__dirname + '/../client'));

//COMMENTSTORE_MLAB_URL - MongoDb url from Mlab
const MONGODB_URL = process.env.COMMENTSTORE_MLAB_URL || 'mongodb://localhost/commentstore';
const PORT = process.env.PORT || 5050;

mongoose.connect(MONGODB_URL, () => {
	console.log('Connected to MongoDB :)');
});

app.get('/', function (req, res) {
	res.send('go to /api/comments');
});

app.use('/api/comment', commentsRoute);

app.use((req, res) => {
	res.status(404).json({
		errors: {
			global: "Still working on it.. please try again later"
		}
	})
})

app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
	console.log('Visit http://localhost:' + PORT);
});
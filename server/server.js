'use strict';
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const commentsRoute = require('./routes/comments-route');

//Using dot env to laod environment variables
dotenv.load();

const app = express();

//BOOKSTORE_MLAB_URL - MongoDb url from Mlab
const MONGODB_URL = process.env.BOOKSTORE_MLAB_URL || 'mongodb://localhost/commentStore';
const PORT = process.env.PORT || 5050;

mongoose.connect(MONGODB_URL, () => {
	console.log('Connected to MongoDB :)');
});

app.get('/', function (req, res) {
	res.send('go to /api/comments');
});

app.use('/api/comments', commentsRoute);

app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});
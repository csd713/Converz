'use strict';
const router = require('express').Router();
const Comment = require('../models/comment');

//////////////////// Comment API ////////////////////////

// To get all the comments from the database
router.get('/', function (req, res) {
	Comment.getComments(function (err, comments) {
		if (err) {
			throw err;
		}
		res.json(comments);
	});

});

//To get a comment details using it's id
router.get('/:_id', function (req, res) {
	Comment.getCommentById(req.params._id, function (err, comment) {
		if (err) {
			throw err;
		}
		res.json(comment);
	});
});

// validate incoming data
function validateData(data) {

	let errors = {};
	if (data.text === '') errors.title = "Ohh! Comment can't be empty!!";
	const isValid = Object.keys(errors).length === 0;
	return { errors, isValid };
}

//To add a new comment to the database
router.post('/', function (req, res) {
	var comment = req.body;
	Comment.addComment(comment, function (err, comment) {
		if (err) {
			throw err;
		}
		res.json(comment);
	});
});

//To update a comment details by its id
router.put('/:_id', function (req, res) {
	var id = req.params._id;
	var comment = req.body;
	Comment.updateComment(id, comment, {}, function (err, comment) {
		if (err) {
			throw err;
		}
		res.json(comment);
	});
});

//To delete a comment using its id
router.delete('/:_id', function (req, res) {
	var id = req.params._id;
	Comment.deleteComment(id, function (err, comment) {
		if (err) {
			throw err;
		}
		res.json(comment);
	});
});

module.exports = router;

'use strict';
const router = require('express').Router();
const Comment = require('../models/comment');
const Time = require('../utils/getRelativeTime');

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

// To get all the comments from the database
router.get('/page/:page_no', function (req, res) {
	let page = {};
	page.number = parseInt(req.params.page_no);

	// keep the size of the page to 10 comments per page by default
	page.size = 10;

	if (page.number < 0 || page.number === 0) {
		return res.json({
			message: "Error",
			error: "Invalid page number. Try positive page number!"
		});
	}

	Comment.getCommentsByPage(page, function (err, comments) {
		if (err) {
			return res.json({
				message: "Error en aplicacion",
				error: err
			});
		}

		let tempComments = [];
		comments.forEach(element => {
			// console.log(element.posted_date);
			let obj = {};
			obj._id = element._id;
			obj.text = element.text;
			obj.author = element.author;
			obj.posted_date = Time.getRelativeTime(element.posted_date);
			tempComments.push(obj);
		});

		res.json(tempComments);
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

// validate incoming data - TODO
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

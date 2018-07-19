const moment = require('moment-timezone');
const DefaultSet = require('./setRelativeTimeDefaults');
// Adding this functionality increases the app size from 280kb to 685kb
module.exports.getRelativeTime = function (dateString) {
	DefaultSet.setRelativeTimeDefaults();
	const dateTime = moment(dateString).unix();
	return moment(dateTime * 1000).fromNow();
};

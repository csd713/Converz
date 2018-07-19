const moment = require('moment-timezone');

module.exports.setRelativeTimeDefaults = function () {
	moment.relativeTimeThreshold('d', 100000);

	moment.updateLocale('en', {
		relativeTime: {
			future: 'IN %s',
			past: '%s AGO',
			s: '%dS',
			ss: '%dS',
			m: '%dMIN',
			mm: '%dMIN',
			h: '%dHR',
			hh: '%dHR',
			d: '%dD',
			dd: '%dD',
			M: '%dM',
			MM: '%dM',
			y: '%dYR',
			yy: '%dYR',
		},
	});
};

// Express
const express = require('express');
const app = express();

// Root Level

app.get('/', (req, res) => {
	res.json({
		Greetings: 'Hello my friend',
		instructions: 'You can go to /api/timestamp/date to watch the timestamp',
		example: 'Try with: /api/timestamp/2020-12-06',
	});
});

//First Timestamp Endpoint
app.get('/api/timestamp', (req, res) => {
	res.json({
		unix: new Date().getTime(),
		utc: new Date().toUTCString(),
	});
});

//Second Timestamp Endpoint
app.get('/api/timestamp/:date', (req, res) => {
	let dateParam = req.params.date;
	let dateConverted = new Date(dateParam);
	let unixRegex = /\d{5,}/;

	if (unixRegex.test(dateParam)) {
		res.json({
			unix: parseInt(dateParam),
			utc: new Date(parseInt(dateParam)).toUTCString(),
		});
	}

	if (dateConverted.toString() === 'Invalid Date') {
		res.json({
			error: 'Invalid Date',
		});
	} else {
		res.json({
			unix: dateConverted.getTime(),
			utc: dateConverted.toUTCString(),
		});
	}
});

// Port and listen
const port = 3000;
app.listen(port, () => console.log('Listening on port: ' + port));

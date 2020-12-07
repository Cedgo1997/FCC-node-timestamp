// Express
const express = require('express');
const app = express();

app.get('/api/timestamp', (req, res) => {
	res.json({
		unix: new Date().getTime(),
		utc: new Date().toUTCString(),
	});
});

// Port and listen
const port = 3000;
app.listen(port, () => console.log('Listening on port: ' + port));

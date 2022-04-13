const Express = require('express');
const app = Express();
const port = process.env.PORT || 5222;


app.listen(port, () =>
	console.log(
		`Server is running on port ${port}` || `http://localhost:5222`
));

app.get('/backend', (req, res) => {
	res.send({
		express: `Connection est bein`
	});
});

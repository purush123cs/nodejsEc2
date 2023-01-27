const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const axios = require('axios');
const port = 9001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/service1', async (req, res) => {	
	let response;
	
  try {
	response = await axios.get('https://telstra-rfp-poc.s3.ap-northeast-1.amazonaws.com/data.json');	
  } catch (error) {
	console.error(error);
  }

	res.status(200).json(response.data);
})



/*
app.post('/service1', (req, res) => {
	
const mockResponse = {
  "data": "success response"
};

res.status(200).json(mockResponse);
})
*/

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
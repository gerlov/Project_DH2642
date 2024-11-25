const express = require('express');
const cors = require('cors');
const https = require('https');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5001;
const API_KEY = 'ed333efd0dmsh4f75fec2bb380adp1f341cjsn32effe6bb205';

app.get('/api/exercises', (req, res) => {
  const options = {
    method: 'GET',
    hostname: 'exercisedb.p.rapidapi.com',
    port: null,
    path: '/exercises?limit=10&offset=0',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    },
  };

  const request = https.request(options, function (response) {
    const chunks = [];

    response.on('data', function (chunk) {
      chunks.push(chunk);
    });

    response.on('end', function () {
      const body = Buffer.concat(chunks);
      res.status(response.statusCode).send(body.toString());
    });
  });

  request.on('error', (error) => {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
  });

  request.end();
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const fs = require('fs');
const csvParser = require('csv-parser');
const cors = require('cors'); 

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

app.get('/api/data', (req, res) => {
  const results = [];

  fs.createReadStream('startup_funding.csv')
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 8000;

const Ajv2020 = require('ajv/dist/2020');
const schema = require('./replyer.json');

const ajv = new Ajv2020();
const isValid = ajv.compile(schema);

app.post('/welcome', (request, response) => {
  if (!isValid(request.body)) {
    response
      .status(400)
      .send(isValid.errors
        .map(({ instancePath, message }) => `${instancePath} ${message}`)
        .join('\n'));
    return;
  }
  const {
    forename,
    surname,
    location,
    username,
  } = request.body;
  response.send(`Hello ${forename} ${surname}! Welcome at our office in ${location}! You may log in with ${username}.`);
});

app.listen(port, () => {
  console.log(`Express app is listening at http://localhost:${port}`);
});

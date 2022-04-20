const express = require('express');

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

app.get('/launchx', (_req, res) => {
  res.send('Bienvenidos a launchx');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('ok')
});

app.get('/square/:n', (req, res) => {

  const n = parseInt(req.params.n);
  res.send(`Le carré de ${n} est ${n*n}`);
})

app.listen(port, () => {
  console.log('Server listening port ' + port);
})
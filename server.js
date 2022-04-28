const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('ok')
});

app.listen(port, () => {
  console.log('Server listening port ' + port);
})
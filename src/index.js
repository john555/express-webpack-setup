import express from 'express';

import api from './api';

const { PORT = 3000 } = process.env;
const app = express();

app.use('/log', (req, res, next) => {
  console.log('req.baseUrl');
  next();
});
app.use('/api/1.0', api);

app.listen(PORT, () => {
  console.log('http://localhost:'+PORT)
})

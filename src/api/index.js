import express from 'express';

const api = express();

api.get('/', (req, res) => {
  res.json({
    message: 'Welcome'
  });
});

export default api;

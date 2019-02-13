import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.send('Hello world');
});

const PORT = 8080;
app.listen(PORT);

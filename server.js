import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello from back-End!');
});

app.listen(port, () => {
  console.log(`Server is listening on the port ${port}`);
});

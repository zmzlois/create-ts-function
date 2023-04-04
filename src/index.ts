import express from 'express';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.post('/hello', (req, res) => {
  res.sendStatus(200).send({ message: 'Hello World!' });
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));

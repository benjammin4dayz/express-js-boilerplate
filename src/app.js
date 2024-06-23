import express from 'express';
import cors from 'cors';
import { PORT } from './env.config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));

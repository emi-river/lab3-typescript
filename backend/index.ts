import express, { Request, Response } from 'express';
import path from 'path';
import { Client } from 'pg';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.get('/movies', async (_request: Request, response: Response) => {
  try {
    const { rows } = await client.query('SELECT * FROM movies');
    response.send(rows);
  } catch (error) {
    console.error('Error fetching movies:', error);
    response.status(500).send('Internal Server Error');
  }
});

app.post('/movies', async (request: Request, response: Response) => {
  try {
    const { name, genre, img, rating, description } = request.body;
    console.log(name);
    await client.query(
      'INSERT INTO movies(name, genre, img, rating, description) VALUES ($1, $2, $3, $4, $5);',
      [name, genre, img, rating, description]
    );

    const { rows } = await client.query('SELECT * FROM movies');
    response.status(500).send(rows);
  } catch (error) {
    console.error('Error inserting movie:', error);
    response.status(500).send('Internal Server Error');
  }
});

app.use(express.static(path.join(path.resolve(), 'public')));

app.listen(port, () => {
  console.log(`http://localhost:${port} is live!`);
});

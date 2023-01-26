// const express = require("express");
import express from 'express';
// import data from './data.json' assert {type:'json'};
const app = express();
import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv';
import cors from 'cors';
import moviesRouter from './routes/movies.route.js';
dotenv.config();

app.use(cors())
// const MONGO_URL = 'mongodb://127.0.0.1';
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

const client = new MongoClient(MONGO_URL);  //dial a number.
await client.connect(); //call  //previous handshake is happening
console.log("mongo is connected !!!");



app.get("/", function (request, response) {
  response.send('Welcome !!!');
});

app.use('/movies',moviesRouter)

app.listen(PORT, () => console.log(`The server started ✨✨`));

export {client};

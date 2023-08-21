import express from 'express';

import http from 'http';

import bodyParser from 'body-parser';

import cookieParser from 'cookie-parser';

import compression from 'compression';

import dotenv from 'dotenv';

import mongoose from 'mongoose';

import cors from 'cors';

import router from './router';

// Environment variables Config
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// MongoDB URL
const MONGO_URL = process.env.MONGO_URL;


app.use(cors({
    credentials: true,
}));

app.use(compression());

app.use(cookieParser());

app.use(bodyParser.json());

// So we can use form to create/update data
app.use(express.urlencoded({extended: true}));

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}/`);
});

mongoose.Promise = Promise;

mongoose.connect(MONGO_URL);

mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());
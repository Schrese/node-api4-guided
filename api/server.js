const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');
const db = require('../data/db.js')

const server = express();

server.use(helmet());
server.use(express.json());

// server.get('/', async (req, res) => {
//     try {
//         const shouts = await db('shouts');
//         res.status(200).json({messageOfTheDay: process.env.MOTD, shouts })
//     } catch (error) {
//         console.error('\nERROR', error);
//         res.status(500).json({ error: 'Cannot retrieve the shouts' })
//     }
// })


server.use('/api', apiRouter);

module.exports = server;

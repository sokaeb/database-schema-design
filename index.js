const express = require('express');
// helmet provides simple security defaults
const helmet= require('helmet');

const server = express();

server.use(helmet());
// middleware built into express that will allow express to read the json body and format it into js
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ hello: 'and welcome'});
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on port ${PORT}`))


'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = 80;
const host = '127.0.0.1';
app.listen(port, host);

console.log(`Running on http://${host}:${port}`);
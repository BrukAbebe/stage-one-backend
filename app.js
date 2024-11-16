const express = require('express');
const indexRoute = require('./routes/indexRoute');
const nameRoute = require('./routes/nameRoute');
const hobbyRoute = require('./routes/hobbyRoute');
const dreamRoute = require('./routes/dreamRoute');

const app = express();
const PORT = 3000;

app.use('/', indexRoute);
app.use('/name', nameRoute);
app.use('/hobby', hobbyRoute);
app.use('/dream', dreamRoute);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });

module.exports = app;

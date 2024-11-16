const express = require('express');
const nameRoute = require('./routes/name');

const app = express();
const PORT = 3000;

app.use('/name', nameRoute);


app.listen(PORT, () => {
    console.log(`Server is running on :${PORT}`);
});

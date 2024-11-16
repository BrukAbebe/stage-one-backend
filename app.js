const express = require('express');
const nameRoute = require('./routes/nameRoute');
const hobbyRoute = require('./routes/hobbyRoute');
const dreamRoute = require('./routes/dreamRoute');

const app = express();
const PORT = 3000;

app.use('/name', nameRoute);
app.use('/hobby', hobbyRoute);
app.use('/dream', dreamRoute);


app.listen(PORT, () => {
    console.log(`Server is running on :${PORT}`);
});

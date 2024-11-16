const express = require('express');
const app = express();
const PORT = 3000;

app.get('/name', (req, res) => {
    res.status(200).send('Biruk Abebe');
});


app.listen(PORT, () => {
    console.log(`Server is running on :${PORT}`);
});

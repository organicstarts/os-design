const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

const cors = require('cors'); 
app.use(cors());

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.use('/dist', express.static(`${__dirname}/dist/`));

app.get('*', (req, res) => {
    res.status(500).send()
});

app.listen(port);
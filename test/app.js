const express = require('express');
const os = require('os');
const app = express();


app.get('/hello', (req, res) => {
    const name = req.query.name;
    const greeting = name ? `Hello, ${name}` : "Hello, World!";
    res.json({ greeting });
});

app.get('/info', (req, res) => {
    const headers = {};
    Object.keys(req.headers).forEach(key => {
        headers[key] = req.headers[key];
    });

    const response = {
        time: new Date().toISOString(),
        client_address: req.ip,
        host_name: os.hostname(),
        headers,
    };

    res.json(response);
});


module.exports = app;

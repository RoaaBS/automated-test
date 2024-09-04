const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

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
        headers
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

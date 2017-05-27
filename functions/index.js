const app = require('express')();
const functions = require('firebase-functions');

app.get('/upcoming', (req, res) => {
  res.send('Hello, World!');
});

exports.api = functions.https.onRequest(app);

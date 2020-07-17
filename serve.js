/*
create the client certificates

openssl genrsa -out key.pem 2048
openssl req -new -key key.pem -out client.csr
openssl x509 -req -in client.csr -signkey key.pem -out cert.pem

running this script will expose:
https://localhost:3000
*/

const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();
app.use(express.static('.' || 'dist'));
app.get('/', function(req, res) {
  return res.end('<p>This server serves up static files.</p>');
});

const options = {
  key: fs.readFileSync('key.pem', 'utf8'),
  cert: fs.readFileSync('cert.pem', 'utf8'),
  passphrase: process.env.HTTPS_PASSPHRASE || 'password'
};
const server = https.createServer(options, app);

server.listen(3000 || 8443);
// node serve.js
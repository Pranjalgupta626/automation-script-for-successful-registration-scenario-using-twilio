const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var otpMessage = '';

app.post('/sms', (req, res) => {
    console.log("received " + req.body.Body)
    otpMessage = req.body.Body
});

app.get('/getOTP', (req, res) => {
    res.send(otpMessage)
})

http.createServer(app).listen(1442, () => {
    console.log('Express server listening on port 1442');
});

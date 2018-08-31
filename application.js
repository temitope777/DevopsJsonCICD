'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


/* const probe = require('probe-mon')
const express = require('express')
const {
  getipsdata,
} = require('./micros/ips/ips')

const {
  getipspps
} = require('./micros/ips/ips-pps')

const {
  gettoken,
  validaterequest,
  encrypt
} = require('./middlewares/auth')

const app = express()

app.use(probe())

//app.all('/api/ips/*', [validaterequest])

app.get('/api/ips/pps/:refineryid', getipspps)

app.get('/api/ips/cps/:refineryid', getipsdata)
app.get('/ipstoken', gettoken)


app.get('/', (req, res, next) => {
  res.send('Service is active')
})

app.use((req, res, next) => {
  res.send({
    status: 404,
    errormessage: 'Not Found',
    data: []
  })
})

const server = app.listen(8081, function () {
  var port = server.address().port;
  console.log('Starting server at port %s', port)
})

module.exports = Object.assign({}, {
  server,
  getipsdata,
  getipspps,
  gettoken,
  app
}) */
var express = require('express');
var app = express();

app.use(require('body-parser').json());

var api = require('./api');
app.use('/api', api);


app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000);

const express = require('express'),
app = express(),
path = require('path');

app.use('/scripts', express.static(path.join(__dirname, '../scripts')))
app.use('/audio', express.static(path.join(__dirname, '../audio')))
app.use('/jquery', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/tone', express.static(path.join(__dirname, '../node_modules/tone/build/')))

// app.use(express.static(path.join(__dirname, '..', 'scripts')));
app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(express.static(path.join(__dirname, '..', 'audio')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(500).send(err);
});

app.listen(3000, () => console.log('server listening on Port 3000'));

module.exports = app;

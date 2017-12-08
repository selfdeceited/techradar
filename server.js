var express = require('express'),
http = require('http'),
path = require('path')

var app = module.exports = express();

app.engine('html', require('ejs').renderFile);

app.set('port', process.env.PORT || 2018);

app.get('/', function(req, res){
  res.render('../index.html');
});

app.use(express.static(path.join(__dirname, './')));

app.use('/scripts', express.static(path.join(__dirname, '/node_modules/')));

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

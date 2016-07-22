var express = require('express');
var path  = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('hogan-express'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.route('/').get(function(req, res, next){
	// res.send('<h1>Hello World</h1>');
	res.render('index', {})
})
app.listen(3000, function(){
	console.log('ChatCAT working on Port 3000');
})
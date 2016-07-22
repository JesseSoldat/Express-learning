module.exports = function(express, app){
	var router = express.Router();

	router.get('/', function(req, res,next){
		res.render('index', {title: 'My Node Express'})
	})

	router.get('/photos', function(req, res, next){
		res.render('photos', {title: 'Photos'});
	})

	app.use('/', router);
}
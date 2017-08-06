// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
//var mongoose    = require('mongoose');
var crypto 		= require('crypto');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file

    
// =======================
// configuration =========
// =======================
var port = process.env.PORT || 5000; // used to create, sign, and verify tokens
//mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));
app.use(express.static('public'));
// app.get('/setup', function(req, res) {

//   // create a sample user
//   var pw = "w4s0nl1n3";
	
//   var nick = new User({ 
//     name: 'facuxt', 
//     password: crypto.createHash('md5').update(pw).digest("hex"),
//     admin: true 
//   });

//   // save the sample user
//   nick.save(function(err) {
//     if (err) throw err;

//     console.log('User saved successfully');
//     res.json({ success: true });
//   });
// });

// =======================
// routes ================
// =======================
// basic route
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// API ROUTES -------------------

// get an instance of the router for api routes
var apiRoutes = express.Router(); 

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
/*apiRoutes.post('/authenticate', function(req, res) {
	console.log("req: "+ JSON.stringify(req.body));
  // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Usuario inválido, reintente.' });
    } else if (user) {

      // check if password matches
      if (user.password != crypto.createHash('md5').update(req.body.password).digest("hex")) {
        res.json({ success: false, message: 'Contraseña inválida, reintente.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: "1d" // expires in one day
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   

    }

  });
});

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});

// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});   

apiRoutes.route('/clients')
	.get(function(req, res) {
		var token = req.body.token || req.query.token || req.headers['x-access-token'];
		var referer = jwt.decode(token);

        Client.find({
        	master : referer.name
        }, function(err, clients) {
            if (err)
                res.send(err);

            res.json({success: true, response: clients});
        });
    })
	.post(function(req, res) { 
		if(!req.body.firstName || !req.body.lastName || !req.body.dni || !req.body.gender){
			return res.json({ message: 'Debe enviar primer nombre, apellido, genero y dni para continuar', success: false });
		}
		if(req.body.gender != "M" && req.body.gender != "F"){
			return res.json({ message: 'Genero debe ser F o M unicamente', success: false });
		}
		var token = req.body.token || req.query.token || req.headers['x-access-token'];
		var referer = jwt.decode(token);
	    var client = new Client();

	    client.firstName = req.body.firstName; 
	    client.lastName = req.body.lastName; 
	    client.dni = req.body.dni;
	    client.gender = req.body.gender;
	    client.master = referer.name; 
	    client.ultFechaPago = req.body.ultFechaPago;
	    client.active = true;

	   	Client.findOne({
		    dni: req.body.dni,
		    gender: req.body.gender,
		    master: referer.name
		}, function(err, foundClient) {
			if (err) throw err;

		    if (!foundClient) {
	      	    client.save(function(err) {
			        if (err)
			            res.send(err);

			        res.json({ message: 'Alumno creado satisfactoriamente', success: true });
		    	});
		    } else if(foundClient && !req.body._id){
					res.json({ message: 'El Alumno ya se encuentra registrado', success: false });
		    } else if (foundClient) {
    		    foundClient.firstName = req.body.firstName; 
			    foundClient.lastName = req.body.lastName; 
			    foundClient.dni = req.body.dni;
			    foundClient.gender = req.body.gender;
				foundClient.ultFechaPago = req.body.ultFechaPago;

	      	    foundClient.save(function(err) {
			        if (err)
			            res.send(err);

			        res.json({ message: 'Alumno actualizado correctamente', success: true });
		    	});
				
		    }
		});
      
});
apiRoutes.route('/clients/:client_id')
	.get(function(req, res) {
        Client.findById(req.params.client_id, function(err, client) {
            if (err)
                res.send(err);
            res.json({success: true, response: client});
        });
    })
    .delete(function(req, res) {
        Client.remove({
            _id: req.params.client_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Alumno eliminado correctamente', success: true });
        });
    });
// apply the routes to our application with the prefix /api*/
app.use('/api', apiRoutes); 

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
var express = require('express');
var app = express();

var solarSystem = require('./models/solar_system.js');
var planetRouter = require('./controllers/planetRouter');

var expressLayouts = require('express-ejs-layouts');

// Application settings
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use('/planets', planetRouter);
app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res) {
//   res.send("Hello world");
// });

app.get('/', function(req, res) {
  res.render('index', {welcome: "Welcome to the Solar System"});
});

// DON'T NEED THESE NOW THAT WE HAVE SET UP planetRouter

// app.get('/planets', function(req, res) {
//   res.send(solarSystem.planets);
// });

// app.get('/planets/:id', function(req, res) {
//   var planetId = req.params.id;
//   res.send(solarSystem.planets[planetId -1]);
// });

app.listen('3000', function() {
  console.log("Running on port 3000");
});


var express = require('express');
var planetRouter = express.Router();
var solarSystem = require('../models/solar_system');

var bodyParser = require('body-parser');
planetRouter.use(bodyParser.urlencoded({ extended: false}));

planetRouter.get('/', function(req, res){
  // INDEX
  res.render('planets/index', {solarSystem: solarSystem})
})

planetRouter.get('/new', function(req, res) {
  // NEW
  res.render("planets/new");
  // res.send("NEW planet route");
});

planetRouter.post('/', function(req, res) {
  // CREATE
  var newPlanet = {};
  newPlanet.name = req.body.name;
  newPlanet.size = parseInt(req.body.size);
  solarSystem.planets.push(newPlanet);
  res.redirect('/');
  // res.send("CREATE planet route");
});

planetRouter.get('/:id', function(req, res){
  // SHOW
  res.render('planets/show', {planet: solarSystem.planets[req.params.id-1]});
})

planetRouter.get('/:id/edit', function(req, res) {
  // EDIT
  res.send("EDIT planet route " + solarSystem.planets[req.params.id-1].name);
});

planetRouter.post('/:id', function(req, res) {
  // UPDATE
  res.send("UPDATE planet route " + solarSystem.planets[req.params.id-1].name);
});

planetRouter.post('/:id', function(req, res) {
  // DELETE
  res.send("DELETE planet " + solarSystem.planets[req.params.id-1].name);
});

module.exports = planetRouter;

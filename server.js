const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require("./models/index.js");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Project3";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//app.post('/login', function(req, res){
 // console.log("hello")
 // console.log(req)
 // res.end();
//})
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.post("/Signup", function (req, res) {
  var token = "t " + Math.random();

  if (req.file) {
      // console.log(req.file)
  }
  db.User.create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      token: token
  })
      .then(function (data) {
        console.log("data", data)
          //console.log(data.dataValues)
          res.cookie("token", token, { maxAge: 9999 })
          // req.session.user = data.dataValues;
          console.log("hello user");
          res.json(data);
          
      }).catch(function (err) {
        console.log("err", err)
          // console.log(err.errors[0].message)
          // var error = {error: err.errors[0].message} 
          //res.send(err.errors[0].message);
       
        
      })

});


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

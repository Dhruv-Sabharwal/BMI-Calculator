const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/bmiCalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight/Math.pow(height,2);
  res.send("Your BMI is: " + bmi.toFixed(2));  // output bmi rounded off to 2 decimal places
})

app.listen("3000", function(){
  console.log("Server is running on port 3000");
})

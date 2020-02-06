const express =require("express");
const path = require('path');

var app = express();

//Handles data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static folder
app.use(express.static(__dirname + '/public'));


//API and HTML routs
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);



// Sets initial port
var PORT = process.env.PORT || 5000;



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  

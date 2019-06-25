//npkeeper

//dependencies
var express = require("express");
var mongoose = require("mongoose");
var seedDB = require("./seed");

//var bodyParser = require("bodyParser");
// var passport = require("passport");
// var localStrategy = require("passport-local");
// var methodOverride = require("method-override");

//variables
const app = express();
const port = 3000;


//routes
var indexRoutes = require("./routes/index");

app.use("/", indexRoutes);


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(methodOverride("_method"));


//mongoose
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("connected to db");
// });


mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {

   if (err) throw err;

   console.log('Successfully connected');

});
//seedDB
//seedDB();

app.get("*", (req, res)=>{
  res.send("Hello world");
})

app.listen(port, ()=>{
    console.log("Server has started");
});

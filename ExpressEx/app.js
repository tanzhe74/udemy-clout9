var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig:"Oink",
        cow:"Moo",
        dog:"Woof Woof!"
    }
    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The "+animal+" says "+sound);
});

app.get("/repeat/:string/:num", function(req, res) {
    var str = req.params.string;
    var n = req.params.num;
    var s = "";
    for(var i = 0; i<n; i++){
        s += str+" ";
    }
    res.send(s);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});
app.listen(process.env.PORT, process.env.IP);
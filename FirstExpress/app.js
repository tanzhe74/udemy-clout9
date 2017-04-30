var express = require("express");
var app = express();

// "/" "HI there"
app.get("/", function(req, res) {
    res.send("Hi there!");
});
// "/bye" "GoodBye!"

app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});
// "/dog" "Wang!"
app.get("/dog", function(req, res){
    res.send("Wang!");
}) ;

app.get("*", function(req, res) {
    res.send("YOU ARE A STAR");
})
//listen
app.listen(process.env.PORT, process.env.IP);
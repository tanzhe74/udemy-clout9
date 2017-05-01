var express = require("express");
var app = express();
var request = require("request");
// app.set("view engine", "ejs");
app.get("/", function(req, res) {
    res.render("search.ejs");
})
app.get("/results", function(req, res) {
    var temp = req.query.search;
    var url = "http://www.omdbapi.com/?s="+temp;
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results.ejs", {data: data});
            //res.send(results["Search"][0]);
            
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie App has started!!!");
});
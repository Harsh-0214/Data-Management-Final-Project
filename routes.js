//Routing
var express = require("express");

var router = express.Router();

var fs = require('fs');
var myCss = {
    style : fs.readFileSync('css/style.css','utf8')
};

router.get("/", function (req,res){
    console.log("hello im on start page");
    res.render("index.ejs");
    title: 'AODB'
    myCss: myCss;

});

module.exports = router; 
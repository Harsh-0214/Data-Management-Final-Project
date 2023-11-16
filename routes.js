//Routing
var express = require("express");

var router = express.Router();

router.get("/", function (req,res){
    console.log("hello im on start page");
    res.render("index");

});

module.exports = router; 
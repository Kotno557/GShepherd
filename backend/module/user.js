var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('respond with a resource');
});
router.get('/login', function(req, res) {
    res.send("login page.");
});
module.exports= router;
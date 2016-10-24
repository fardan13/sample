var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysqlHandler = require('../mysqlHandler');



router.get('/posts/api', function(req, res) {

  mysqlHandler.getPosts(function(err, data) {
    if (err) {
      // Show error Page with errorData
      res.render('error');
    } else {
      // Render posts
      res.json(data);
    }
  });
});


router.get('/posts', function(req, res) {
      // Render posts
      res.render('posts');
});


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended : false }));

router.post('/posts/api', function(req, res) {

  mysqlHandler.addPost(req.body, function(err, data) {});
  mysqlHandler.getPosts(function(err, data) {
    if (err) {
      // Show error Page with errorData
      res.render('error');
    } else {
      // Render posts
      res.json(data);
    }
  });


});


module.exports = router;

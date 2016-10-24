var express = require('express');
var reload = require('reload');

var app = express();

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', 'main/views');

// Folder with static resources
app.use(express.static('main/public'));

// Routes
app.use(require('./routes/index'))
app.use(require('./routes/posts'))

// Start listening on port
var server = app.listen(3000, function() {
  console.log("Listensing on port 3000.");
});

// Reload mechanism
reload(server, app);

var express = require('express');
var todoController = require('./controllers/todoController.js');
var app = express();
var port = 3000;

// setting template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

//fire controllers
todoController(app);

//listing to port
app.listen(port);
console.log(`you are listing to port ${port}`);

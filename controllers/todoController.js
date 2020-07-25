const { render } = require("ejs");

module.exports = function(app) {
    app.get('/',function(req, res){
        res.render('home');
    });
    
    app.post('/',function(req, res){
        res.render('home');
    });

    app.get('/todo', function(req, res){
        res.render('todo');
    });

    app.post('/todo', function(req, res){
        res.render('todo');
    });
    
    app.delete('/todo', function(req, res){
        res.render('todo');;
    });

    app.get('/contact',function(req, res){
        res.render('contact');
    });

    app.post('/contact',function(req, res){
        res.render('contact');
    });

    app.get('/about',function(req, res){
        render();
    });

};


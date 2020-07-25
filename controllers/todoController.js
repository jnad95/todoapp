const { render } = require("ejs");

module.exports = function(app) {
    app.get('/',function(req, res){
        render();
    });
    
    app.post('/',function(req, res){
        render();
    });

    app.get('/todo', function(req, res){
        render();
    });

    app.post('/todo', function(req, res){
        render();
    });
    
    app.delete('/todo', function(req, res){
        render();
    });

    app.get('/contact',function(req, res){
        render();
    });

    app.post('/contact',function(req, res){
        render();
    });

    app.get('/about',function(req, res){
        render();
    });

};


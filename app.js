require('dotenv').config();

var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var nunjucks = require('nunjucks');
var Test = require('./components/dist/test.js').default;
var TagForm = require('./components/dist/TagForm.js').default;
var orm = require('orm');
var modts = require('orm-timestamps');

var app = express();

app.use(express.static('components/dist'));

var db_config = {
    database: process.env.DB_NAME,
    protocol: 'mysql',
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};

orm.connect(db_config, function(err, db) {
    if (err) {
        throw err;
    };

    db.use(modts, {
        createdProperty: 'created_at',
        modifiedProperty: 'modified_at',
        expireProperty: false,
        dbtype: { type: 'date', time: true, required: true },
        now: function() { return new Date(); },
        expire: function() { var d = new Date(); return d.setMinutes(d.getMinutes() + 60); },
        persist: true
    });

    db.load('./models/index.js', function(err) {
        if(err) {
            throw err;
        }
    });

    db.sync(function(err) {
        if(err) {
            throw err;
        };
    });

    var Image = db.models.Image;
    var Tag = db.models.Tag;
})

nunjucks.configure('views', {
    autoescape: false,
    express: app
});

app.get('/', function(req, res) {
    res.send('hello');
});

app.get('/test', function(req, res) {
    var react_data = ReactDOMServer.renderToString(React.createElement(Test));
    res.render('base.html', {
        react_data: react_data
    });
});

app.get('/formtest', function(req, res) {
    var tag_form = ReactDOMServer.renderToString(React.createElement(TagForm));
    res.render('base.html', {
        react_data: tag_form
    });
});

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});

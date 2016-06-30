// takes all models listed in var models and loads them
// each model must be in /models

module.exports = function(db, cb) {
    var models = [
        'Image',
        'Tag'
    ];

    models.forEach(function(m) {
        db.load('./' + m, function(err) {
            if(err) {
                return cb(err)
            }
            return cb();
        });
    });
};

module.exports = function(db, cb) {
    db.define('image', {
        title: { type: 'text', required: true },
        description: { type: 'text', required: true },
        s3_name: { type: 'text', required: true}
    }, {
        timestamp: true
    });
}

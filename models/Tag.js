module.exports = function(db, cb) {
    db.define('tag', {
        name: { type: 'text', required: true },
    }, {
        timestamp: true
    })
}

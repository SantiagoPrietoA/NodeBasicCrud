const mongoose = require('mongoose');

let db;

module.exports = function Connection() {
    if (!db) {
        db = mongoose.connect('mongodb://localhost/crud-example', { useUnifiedTopology: true, useNewUrlParser: true });
    }

    return db;
}
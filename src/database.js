var mongoose = require('mongoose')

var URI = 'mongodb://localhost/proyecto1-telematica'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose
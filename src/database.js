const mongoose = require('mongoose')

const URI = 'mongodb://mongo-server/proyecto1-telematica'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose
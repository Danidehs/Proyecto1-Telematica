const mongoose = require('mongoose')

// const URI = 'mongodb://mongo-server/proyecto1-telematica'

var URI = {
test: {
        baseUrl: "/",
        root: rootPath,
        app: {
          name: 'comentarios'
        },
        port: process.env.PORT || 3000,
        db: 'mongodb://mongo-server/comentarios-test'
      },
}

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

//module.exports = mongoose
module.exports = URI[env]
const express = require('express')
const morgan = require('morgan')
const path = require('path')

const { Mongoose } = require('./database')

const app = express()

// Configuracion
app.set('port', process.env.PORT || 3000 )

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/tasks' ,require('./routes/tasks.routes'))

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

// Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
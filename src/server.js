const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

// Inicializations
const app = express()


//Settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
const hbs = exphbs.create({
    partialsDir: ['views/partials/layouts']
})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')


//Middlewares
app.use(express.urlencoded({extended: false}))

//Global Variables
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))
// Static files

module.exports = app;
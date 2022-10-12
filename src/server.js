const express = require('express')
const path = require('path')

const exphbs = require('express-handlebars')

const morgan = require('morgan')

const  methodOverride = require('method-override')

// Inicializations
const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')



//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Global Variables
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))
// Static files

module.exports = app;
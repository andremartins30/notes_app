const express = require('express')
const path = require('path')
const _handlebars = require('handlebars');
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const morgan = require('morgan')

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
// app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))

//Global Variables
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))
// Static files

module.exports = app;
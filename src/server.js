const express = require('express')
const {init: initHandlebars} = require('./helpers/handlebars')
const path = require('path')
const morgan = require('morgan')
const  methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')


// Inicializations
const app = express()
initHandlebars(app)

app.set('port', process.env.PORT || 4000);



//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(
    session({
        secret: 'secret',
        resave: true, 
        saveUninitialized: true,
    })
)
app.use(flash())

//Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    next()
})

//Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))
// Static files
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app;
const express = require('express')
const {init: initHandlebars} = require('./helpers/handlebars')
const path = require('path')
const morgan = require('morgan')
const  methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')

const passport =  require('passport')


// Inicializations
const app = express()
require('./config/passport')
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
app.use(passport.initialize())
app.use(passport.session())

//Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})

//Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))
app.use(require('./routes/user.routes'))
// Static files
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app;
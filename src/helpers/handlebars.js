const exphbs = require('express-handlebars')
const path = require('path')

const hbs = exphbs.create({
    partialsDir:['../views/partials'],
})
exports.init = function (app) {
    app.engine('handlebars', hbs.engine)
    app.set("view engine", "handlebars");
    app.set('views', path.join(__dirname, '../views'))
};
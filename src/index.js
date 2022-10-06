require('dotenv').config()
const app = require('./server')
require('./database')

app.listen(app.get('port'), () =>{
    console.log('Servidor conectado no http://localhost:4000')

})
    
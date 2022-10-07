require('dotenv').config();

const app = require('./server');
require('./database');


app.listen(app.get('port'), () => {
    console.log('Conectado no http://localhost:'+app.get('port'))
})
require('dotenv').config();

const app = require('./src/server');
require('./src/database');


app.listen(app.get('port'), () => {
    console.log('Conectado no http://localhost:'+app.get('port'))
})
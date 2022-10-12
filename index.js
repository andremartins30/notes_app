require('dotenv').config();

const app = require('./src/server');
require('./src/database');

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Conectado no http://localhost:${port}`)
})
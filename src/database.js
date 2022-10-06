const mongoose = require('mongoose')

const MONGO_URI =  'mongodb+srv://andremartins30:Kabana12@cluster0.7qd9cly.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Mongoose conectado...'))
.catch((err => console.log(err)))

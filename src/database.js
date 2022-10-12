const mongoose = require('mongoose')

const MONGO_URI =  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.7qd9cly.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Mongoose conectado...'))
.catch((err => console.log(err)))

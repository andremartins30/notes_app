const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/User')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done)=>{

    //verificar se o email esta no banco
    const user = await User.findOne({email})
    if(!user){
        return(null, false, {message: 'User not found.'})
    } else {
    // verificar se a senha esta correta
        const match = await user.matchPassword(password)
        if(match){
            return done(null, user) // encontrou o usuario e senha
        } else {
            return done(null, false, {message: 'incorrect password.'})
        }

    }

}))

//guardar a session no servidor

passport.serializeUser((user, done) => {
    done(null, user.id)
})

// Quando está logado verifica se tem auorização

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})
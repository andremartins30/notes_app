const usersCtrl = {}
const bcrypt = require('bcrypt')
const User = require('../models/User')

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup')
}

usersCtrl.signup = async (req, res) => {
    const errors = []
    const {name, email, password, passwordCheck} = req.body
    if(password != passwordCheck){
        errors.push({text: 'Passwords do not match'})
    }
    if(password.length < 4){
        errors.push({text: 'Passwords must be least 4 characters'})
    }
    if(errors.length != 0){
        res.render('users/signup', {errors})
    } else {
        const emailUser = await User.findOne({email})
        if(emailUser){
            req.flash('error_msg', 'E-mail is already in use.')
            res.redirect('/users/signup')
        } else {
            const newUser = new User({name, email, password})
            // newUser.password = await newUser.hashPassword(password)
            await newUser.save()
            req.flash('success_msg', 'You are registered')
            res.redirect('/users/login')
        }
        
    }
}

usersCtrl.renderLogInForm = (req, res) => {
    res.render('users/login')
}

usersCtrl.login = (req, res) => {
    res.send('login')
}

usersCtrl.logout = (req, res) => {
    res.send('logout')
}
module.exports = usersCtrl;
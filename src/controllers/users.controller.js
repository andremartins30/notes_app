const usersCtrl = {}

const passport = require('passport')
const logout = require('express-passport-logout');
const User = require('../models/User');
const { nextTick } = require('process');

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
        res.render('users/signup', {errors, name, email})
    } else {
        const emailUser = await User.findOne({email})
        if(emailUser){
            req.flash('error_msg', 'E-mail is already in use.')
            res.redirect('/users/signup')
        } else {
            const newUser = new User({name, email, password})
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save()
            req.flash('success_msg', 'You are registered')
            res.redirect('/users/login')
        }
    }
}

usersCtrl.renderLogInForm = (req, res) => {
    res.render('users/login')
}

// usersCtrl.login = (req, res) => {
//     res.send('login')
// }

usersCtrl.login = passport.authenticate('local', {
    failureRedirect: '/users/login',
    successRedirect: '/notes',
    failureFlash: true
})

usersCtrl.logout = (req, res, next) => {
    // res.send('logout')
    req.logout(function(err){
        if(err){
            return next(err)
        }
        req.flash('success_msg', 'You are logged out now.')
        res.redirect('/users/login')
    })
}
module.exports = usersCtrl;
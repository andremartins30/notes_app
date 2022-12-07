const usersCtrl = {}

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup')
}

usersCtrl.signup = (req, res) => {
    const errors = []
    const {name, email, password, passwordCheck} = req.body
    if(password != passwordCheck){
        errors.push({text: 'Passwords do not match'})
    }
    if(password.length < 4){
        errors.push({text: 'Passwords must be least 4 characters'})
    }
    if(errors.length != 0){
        res.render('users/signup', {msg: 'Tem erro'})
    } else {
        res.redirect('/users/login')
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
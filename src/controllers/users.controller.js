const usersCtrl = {}

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup')
}

usersCtrl.signup = (req, res) => {
    res.send('signup')
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
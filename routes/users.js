const express = require('express');
const router = express.Router();
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user');

router.get('/register', (req, res) => {
    res.render('users/register')
});

router.post('/register', catchAsync(async (req, res) => {
    try{
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            res.redirect('/campgrounds');
        })
    }
    catch(e){
        res.redirect('register')
    }
}));

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
    const redirectUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
})

router.get('/logout', (req, res) =>{
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/campgrounds');
    });
})

module.exports = router;
const modelsmsg = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Registration page
const signupController = (req, res) => {
    res.render('signup');
}

// Handle registration form
const postSignupController = async (req, res) => {
    if (req.body.password === req.body.confirmPassword) {
        const hash = await bcrypt.hash(req.body.password, saltRounds);
        const userData = {
            fname: req.body.fname,
            email: req.body.email,
            password: hash
        }
        const newUser = new modelsmsg(userData);
        await newUser.save();
        
        res.cookie('userId', newUser._id, { httpOnly: true });
        res.redirect('/login');
    } else {
        res.send('Passwords do not match');
    }
}

// Login page
const loginController = (req, res) => {
    res.render('login');
}

// Handle login form
const postLoginController = async (req, res) => {
    const user = await modelsmsg.findOne({ email: req.body.email });
    if (user) {
        const match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
            res.cookie('userId', user._id, { httpOnly: true });
            res.redirect('/dashboard');
        } else {
            res.send('Incorrect password');
        }
    } else {
        res.send('User not found');
    }
}

// Dashboard page after login
const dashboardController = async (req, res) => {
    const userId = req.cookies.userId;
    if (!userId) {
        res.redirect('/login');
    } else {
        const user = await modelsmsg.findById(userId);
        res.render('dashboard', { user });
    }
}

// Profile page
const profileController = async (req, res) => {
    const userId = req.cookies.userId;
    if (!userId) {
        res.redirect('/login');
    } else {
        const user = await modelsmsg.findById(userId);
        res.render('profile', { user });
    }
}

module.exports = {
    signupController,
    postSignupController,
    loginController,
    postLoginController,
    dashboardController,
    profileController
};

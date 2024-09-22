const express = require('express');
const controlToRoute = require('../controllers/userController');
const routes = express.Router();

// Authentication routes
routes.get('/signup', controlToRoute.signupController);
routes.post('/signup', controlToRoute.postSignupController);
routes.get('/login', controlToRoute.loginController);
routes.post('/login', controlToRoute.postLoginController);

// Dashboard and profile routes
routes.get('/dashboard', controlToRoute.dashboardController);
routes.get('/profile', controlToRoute.profileController);

module.exports = routes;

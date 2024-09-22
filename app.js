const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('./config/db');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Routes
app.use('/', userRoutes);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

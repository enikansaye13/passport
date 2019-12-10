const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


const app = express();
//DB config
const db = require('./config/keys').mongoURI;
//connect to mongo
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('mongoDB Connected...'))
    .catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//bodyparser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', require('./routes/index.js'));

app.use('/users', require('./routes/users.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server start on port ${PORT}`));
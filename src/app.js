const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index.js')

const app = express();

// settings

// whatever is in the environment variable PORT, or 3000 if there's nothing there.
app.set('port', process.env.PORT || 3000);

// initialize ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


// middlewares
// logs in the console
app.use(logger('dev'));
// POST request analytics
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/', indexRoutes);


app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'))
})
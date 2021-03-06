const express = require('express');
const indexRoutes = require('./routes');
const apiRoutes = require('./routes/api');
const loginRoutes = require('./routes/login');
const storeRoutes = require('./routes/store');
const productRoutes = require('./routes/product');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const app = express();

// All environments
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoutes);
app.use('/api', apiRoutes);
app.use('/login', loginRoutes);
app.use('/store', storeRoutes);
app.use('/product', productRoutes);

//Dev environment
if(app.get('env') === 'development') {
  app.use(errorHandler());
}

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}...`);
});

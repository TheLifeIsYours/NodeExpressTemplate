const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//Set path to the route that handeles requsts from clients uri ending
/*------------------------------------------------------------*/
/* An example of a route would be for                         */
/* https://yourWebsite.com/home                               */
/* the route for this uri ending; "/home", would be located   */
/* in the file; './routes/home.js'                            */
/* const home = require('./routes/home');                     */
/*------------------------------------------------------------*/
/* Later down in this file, you'll have to direct which uri   */
/* ending goes to which route                                 */
/* app.use(urlEnding, routePath);                             */
/*------------------------------------------------------------*/
const home = require('./routes/home');

/*------------------------------------------------------------*/

const app = express();

app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//Point URI endings to routes
/*------------------------------------------------------------*/
/* This is where you set the uri ending to the rotes path     */
/* You can see from the example below that we have set uri    */
/* ending "/" and "/home" to point to the home route we set   */
/* earlier in the file                                        */
/*------------------------------------------------------------*/
app.use('/', home);
app.use('/home', home);

/*------------------------------------------------------------*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

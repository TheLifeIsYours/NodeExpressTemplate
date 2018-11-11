const express = require('express');
const router = express.Router();

/*Routing
-------------------------------------------------------*/
/*Get request*/
router.get('/', async (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.render('home', {title:  'Your page title - Home'});
});

/*Post request*/
router.post('/action', async (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  if(your post succeeded){
    res.redirect(`/mySuccessPage`);
  }else{
    res.redirect(`/error?error=${err}`);
  }
});

module.exports = router;

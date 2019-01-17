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
  //your post succeeded, would normally make a file that gets
  //a callback telling the post has been successfull
  if(true){
    res.redirect(`/mySuccessPage`);
  }else{s
    res.redirect(`/error?error=${err}`);
  }
});

module.exports = router;

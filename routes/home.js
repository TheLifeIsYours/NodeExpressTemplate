const Firestore = require('@google-cloud/firestore');
const express = require('express');
const router = express.Router();

/*Database setup
-------------------------------------------------------*/
const firestore = new Firestore({
  projectId: 'fetishlife-1851c',
  keyFilename: './bin/firebase.credentials.json',
  timestampsInSnapshots: true
});

const collection = firestore.collection('profiles');

/*Routing
-------------------------------------------------------*/
router.get('/', async (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.render('home', {title:  'FetishLife'});
});

module.exports = router;
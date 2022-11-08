var express = require('express');
var router = express.Router();
var display_product = require('../models/product_table');
var crud = require('../models/crud');
var session;

/* GET users listing. */
//GET method to apply to the function of listing users, as well as to perform the search function
router.get('/', async function(req, res, next) {
  session = req.session;
  if(session.user_id){
    let username = session.user_id;
    let shop_id = session.shop_id;
    let table = await display_product(shop_id,session);
    res.render('users', { title: 'welcome to user', 
                          name: username, 
                          table_string: table})
  }
  else{
    res.redirect('/login');
  }
});
//a method to send data from the client and add to the server's data to perform the function of creating a new user
router.post('/crud', async function(req, res, next) {
  console.log(req.body);
  let results = await crud(req.body,session);
  //refresh the page
  let table = await display_product(session.shop_id,session);
  console.log(table);
  res.render('users', { title: 'welcome to ATN', 
                        name: session.user_id, 
                        table_string: table})
});

module.exports = router;
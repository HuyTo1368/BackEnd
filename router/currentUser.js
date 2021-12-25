
const express = require("express");
const jwt = require('jsonwebtoken')
const router = express.Router();
const verifyMW = require('./verifyMW');
const res = require("express/lib/response")
const { checkLogin } = require("../xuli/login");

router.get('/',verifyMW, async (req, res) =>{
    jwt.verify(req.cookies.token, 'secretkey', (err, authData) => {
        if (err) {
          res.sendStatus(403);
        }
        else {
          res.json(authData.user);
        }
      });

})

module.exports = router;
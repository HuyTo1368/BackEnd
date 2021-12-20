const express = require('express')
const showlist = require('./showlist')
const selectAddress = require('./select')

const router = express.Router();

router.use('/show', showlist);
router.use('/select', selectAddress)

module.exports = router;
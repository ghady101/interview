const express = require('express');
const router = express.Router();
const { getData, getDatas } = require('../controllers/dataController');
const { authenticated } = require('../controllers/userController');

router.get('/datas', authenticated, getDatas);
router.get('/:firstName', authenticated, getData);

module.exports = router;

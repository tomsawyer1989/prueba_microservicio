const express = require('express');
const router = express.Router();
const services = require('../services/func_def');

/* GET sum of two numbers */

router.get('/',services.cal_func);

module.exports = router;


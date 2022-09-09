const express = require('express');
const router = express.Router();
const awsController = require('../controllers/awsController');


router.get('/aws', awsController.getSum)


module.exports = router;
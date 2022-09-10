const express = require('express');
const router = express.Router();
const recommendationRoute = require('../controllers/recommendationControllers');
const userData = require('../controllers/profilesController')

router.get('/recommendation', recommendationRoute.getRecommendations)



module.exports = router;
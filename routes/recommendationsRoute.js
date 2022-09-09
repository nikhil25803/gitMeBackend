const express = require('express');
const router = express.Router();
const recommendationRoute = require('../controllers/recommendationControllers');
const userData = require('../controllers/userDataController')

router.get('/repoRecommendation', recommendationRoute.getRecommendations)



module.exports = router;
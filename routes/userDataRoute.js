
const express = require('express')
const router = express.Router()
const profile = require('../controllers/userDataController')

router.get('/profileData', profile.profileData)

module.exports = router
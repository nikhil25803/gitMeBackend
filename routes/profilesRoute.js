
const express = require('express')
const router = express.Router()
const profile = require('../controllers/profilesController')

router.get('/profileData', profile.profileData)

module.exports = router
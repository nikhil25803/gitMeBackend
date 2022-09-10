require('dotenv').config()
const axios = require('axios')
const url = require('url')

exports.profileData = (req, res, next) => {
    const urlData = url.parse(req.url, true).query
    const userName = urlData['profile']
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.GITHUB_ACCESS_KEY
        }
    }

    try {
        axios
            .get(`https://api.github.com/users/${userName}`, config)
            .then(result => {
                const data = result
                res.send(data['data'])
            })
            .catch(err => console.log(err))
    } catch {
        console.log("Error : Limit Reached")
    }

}
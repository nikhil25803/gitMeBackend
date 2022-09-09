const axios = require('axios')
const url = require('url')

exports.profileData = (req, res, next) => {
    const urlData = url.parse(req.url, true).query
    const userName = urlData['profile']
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }
    axios
        .get(`https://api.github.com/users/${userName}`)
        .then(result => {
            const data = result
            res.send(data['data'])
        })
        .catch(err => console.log(err))
}
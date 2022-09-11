const axios = require('axios');
// const { data } = require('cheerio/lib/api/attributes');
const url = require('url');


exports.getRecommendations = (req, res, next) => {
    const urlData = url.parse(req.url, true).query
    const a = urlData['language']
    const b = urlData['sortby']
    console.log(a)
    console.log(b)

    axios
        .get(`https://f1p3gk74yh.execute-api.us-west-2.amazonaws.com/recommend?language=${a}&sortby=${b}`)
        .then(result => {

            console.log(result.data)
            res.json(result.data)
        })
        .catch(err => {
            console.log(err)
        })

}

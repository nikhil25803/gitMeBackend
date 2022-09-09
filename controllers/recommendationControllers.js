const axios = require('axios')
const url = require('url');


exports.getRecommendations = (req, res, next) => {
    const urlData = url.parse(req.url, true).query
    const a = parseInt(urlData['num1'])
    const b = parseInt(urlData['num2'])

    axios
        .get(`https://phdnuottbj.execute-api.us-west-2.amazonaws.com/v1/calculator?num1=${a}&num2=${b}`)
        .then(result => {
            const r = result['data']['ans']
            res.send({
                "Answer": r,
            })
        })
        .catch(err => {
            console.log(err)
        })

}

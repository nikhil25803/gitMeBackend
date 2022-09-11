
# Backend of the project GitMe 
## A GitHub repository recommendation system.

---
### Tech Stack 🖥️
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

### About
This repository is the backend of the project [GitMe](https://github.com/Kingshuk3006/Gitme), which is GitHub repository recommendation system based on the concept of content based filtering.


Collected *18,000+* repsoitories, filtered the repo which do have at least one open issue, and **Pandas** to create dataframe, sort it according to the language entered by the user and filter out them on different parameters like star count, issues open, pull requests and contributors.


Deployed the script on **AWS Lambda**, add required python packages as a layer and triggered it using **API Gateway** by AWS.


Tested the deployed link usng Node and **ExpressJS**, passing different query parameters to get desired output.

---

## Want to access? 🧐

**GET** : `https://f1p3gk74yh.execute-api.us-west-2.amazonaws.com/recommend?language={}&sortby={}`



The invoke URL accepts two query parameters , the first is `language=`, which ask you the language of which you wants to get the repositories of and the second is `sortby=` which sort the result accordingly.

Example :

**GET** / `https://f1p3gk74yh.execute-api.us-west-2.amazonaws.com/recommend?language=Rust&sortby=stars_count`

Output : 
```js
[
    {
        "repositories": "ralexstokes/ethereum-consensus",
        "stars_count": "41",
        "forks_count": "11",
        "issues_count": "21",
        "pull_requests": "0",
        "contributors": "7"
    },
    {
        "repositories": "defuse/DAWr",
        "stars_count": "19",
        "forks_count": "0",
        "issues_count": "10",
        "pull_requests": "0",
        "contributors": "0"
    },

    ...
]
```

This will return you the data of repositories with `Python` as the most language used and the output will be sorted by the `stars_count`

---

### AWS Architecture 💫
[![image](https://www.linkpicture.com/q/awslambda.png)](https://www.linkpicture.com/view.php?img=LPic631dbf4c0917a1884256241)


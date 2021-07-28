const authDao = require('../orm/daos/authdao');

//Get Universities API
exports.getUniversities = function (req, res) {
    try {
        authDao.getUniversities(req).then(data => {
            res.json(data);
        }).catch(err => {
            console.log(err);
            res.json(err);
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Failed to process request" });
    }
}
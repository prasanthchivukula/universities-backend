const authService = require('../services/authservices');

exports.routes = function (app) {
    app.post('/getuniversities', authService.getUniversities); //Get Universities API
}
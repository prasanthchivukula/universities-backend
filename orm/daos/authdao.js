const modelDefinitions = require('../../app');
const Sequelize = require('sequelize');
const op = Sequelize.Op;

//Get Universities API
exports.getUniversities = function(req) {
    return new Promise(function(resolve,reject) {
        try {
            let data = req.body;
            const Universities = modelDefinitions.model('universities');
            const Courses = modelDefinitions.model('courses');
            let queryWhere = {};
            let courseWhere = {};
            // queryWhere['country'] = {[op.like]:'%' + data.country + '%'};
            queryWhere['country'] = {[op.in]:data.country};
            queryWhere['minimum_gpa'] = {[op.lte] : parseFloat(data.gpa)};
            queryWhere['minimum_gre_score'] = {[op.lte] : parseInt(data.gre)};
            Universities.hasMany(Courses,{foreignKey:'university_id'});
            if(data.course){
                courseWhere['course_name'] = {[op.like]:'%' + data.course + '%'};
            }
            return Universities.findAndCountAll({where:queryWhere,
                include :[
                    {model:Courses , required:true , where : courseWhere , on:{'$universities.university_id$':{[op.col]:'courses.university_id'}}}    
                ]
            }).then(universityData => {
                let finalArray = [];
                universityData.rows.forEach(element => {
                    element = element.get({plain:true});
                    for(let i = 0 ; i < element.courses.length ; i++) {
                        let obj = {};
                        obj['university'] = element.name;
                        obj['description'] = element.description;
                        obj['country'] = element.country;
                        obj['course'] = element.courses[i].course_name;
                        obj['teacher'] = element.courses[i].teacher_name;
                        finalArray.push(obj);
                    }
                })
                return resolve({success:true , results:finalArray});
            }).catch(err => {
                console.log(err);
                return reject({success:false , message:"Something went wrong"});
            })
        }
        catch(error) {
            console.log(error);
            return reject({ success: false, message: "Something went wrong" });
        }
    })
} 
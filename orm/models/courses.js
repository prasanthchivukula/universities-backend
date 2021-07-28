/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('courses', {
    course_id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    course_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    university_id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      references: {
        model: 'universities',
        key: 'university_id'
      }
    },
    teacher_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'courses',
    timestamps:false
  });
};

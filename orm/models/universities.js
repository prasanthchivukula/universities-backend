/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('universities', {
    university_id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    minimum_gpa: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    minimum_gre_score: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    tableName: 'universities',
    timestamps:false
  });
};

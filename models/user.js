const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init({
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Username: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING(100),
    allowNull: true
    ,
    unique: true,
  },
  Password: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  Address: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  FirstName: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  LastName: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  City: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  Province: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  EmailVerified: {
    type: DataTypes.BOOLEAN,
  }
},
  {
    sequelize,
    freezeTableName: true,
    modelName: 'users',

});

module.exports = User;


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init({
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  FirstName: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  City: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Province: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  EmailVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
},
  {
    sequelize,
    freezeTableName: true,
    modelName: 'users',

});

module.exports = User;


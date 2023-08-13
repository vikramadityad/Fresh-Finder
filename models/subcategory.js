const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subcategory extends Model { }

Subcategory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
 
        name: {
            type: DataTypes.STRING(150),
            allowNull: false,

        },

        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id',
            },
        },

    },


    {
        sequelize,
        freezeTableName: true,
        modelName: 'subcategories',

    }
);


module.exports = Subcategory;
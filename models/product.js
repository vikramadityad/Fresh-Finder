const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model { }

Product.init(
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

        image_url: {
            type: DataTypes.STRING(1024),
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },

        metric: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },

        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

        organic: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        stock_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },

        reviews: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },

        store_name: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },

        store_location: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },

        subcategory_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'subcategories',
                key: 'id',
            },
        },
    },
    
    {
        sequelize,
        freezeTableName: true,
        modelName: 'products',

    }
);

module.exports = Product;
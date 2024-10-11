"use strict";

import { DataTypes, Model } from 'sequelize';
import Sequelize from 'sequelize';

import sequelize from '../config/connectDB.js';
import price from './price.js';

class Product extends Model { }

Product.sequelize = sequelize;
Product.Sequelize = Sequelize;


Product.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
    },
    Product_Category: {
        type: DataTypes.STRING
    },
    Description: {
        type: DataTypes.STRING
    },
    Price: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Price', 
            key: 'Product_Id' 
        }
    }
}, {
    sequelize,
    modelName: 'Product',
    tableName: 'Product',
    timestamps: false 
});

// Product.associate = (models) => {
//     Product.hasMany(models.Price, {
//         as: "Prices",
//         foreignKey: 'Product_Id',
//         sourceKey: 'Id',
//     })
// }

export default Product;
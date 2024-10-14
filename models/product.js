"use strict";

import { DataTypes, Model } from 'sequelize';
import Sequelize from 'sequelize';

import sequelize from '../config/connectDB.js';

class Product extends Model {}

Product.sequelize = sequelize;
Product.Sequelize = Sequelize;


Product.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
}, {
    sequelize,
    modelName: 'Product',
    tableName: 'Product',
    timestamps: false 
});

Product.associate = async (models) => {
    var Price = await import('./price.js');
    Product.hasMany(Price.default, {
        as: "Prices",
        foreignKey: 'Product_Id',
        sourceKey: 'Id',
    })
}

export default Product;
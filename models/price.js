"use strict";

import { DataTypes, Model } from 'sequelize';
import Sequelize from 'sequelize';

import sequelize from '../config/connectDB.js';

class Price extends Model {}

Price.sequelize = sequelize;
Price.Sequelize = Sequelize;

Price.init({
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
  Product_Id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Product',
      key: 'Id'
    }
  },
  Unit: {
    type: DataTypes.STRING
  },
}, {
  sequelize,
  modelName: 'Price',
  tableName: 'Price',
  timestamps: false
});

Price.associate = async (models) => {
  var Product = await import('./product.js');
  var PriceDetail = await import('./pricedetail.js');

  Price.belongsTo(Product.default, {
    as: "Product",
    foreignKey: 'Product_Id',
    sourceKey: 'Id',
  })
  Price.hasMany(PriceDetail.default, {
      as: "PriceDetails",
      foreignKey: 'Price_Id',
      sourceKey: 'Id',
  })
}


export default Price;
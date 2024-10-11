"use strict";

import { DataTypes, Model } from 'sequelize';
import Sequelize from 'sequelize';

import sequelize from '../config/connectDB.js';
import Product from './product.js';

class Price extends Model { }

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

// price.belongsTo(Product, {
//   foreignKey: 'Product_Id',
//   sourceKey: 'Id',
// })

// Price.associate = (models) => {
//   Price.belongsTo(models.Product, {
//       // as: "Prices",
//       foreignKey: 'Product_Id',
//       sourceKey: 'Id',
//   })
// }


export default Price;
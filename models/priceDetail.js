"use strict";

import { DataTypes, Model } from 'sequelize';
import Sequelize from 'sequelize';

import sequelize from '../config/connectDB.js';

class PriceDetail extends Model { }

PriceDetail.sequelize = sequelize;
PriceDetail.Sequelize = Sequelize;

PriceDetail.init({
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Price_Id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Price',
      key: 'Id'
    }
  },
  Tier: {
    type: DataTypes.STRING
  },
  Price: {
    type: DataTypes.STRING
  },
}, {
  sequelize,
  modelName: 'PriceDetail',
  tableName: 'PriceDetail',
  timestamps: false
});

PriceDetail.associate = async (models) => {
  var Price = await import('./price.js');

  PriceDetail.belongsTo(Price.default, {
    as: "PriceData",
    foreignKey: 'Price_Id',
    sourceKey: 'Id',
  })
}

export default PriceDetail;
"use strict";

import { DataTypes, Model } from 'sequelize';
import Sequelize from 'sequelize';

import sequelize from '../config/connectDB.js';

class pricedetail extends Model { }

pricedetail.sequelize = sequelize;
pricedetail.Sequelize = Sequelize;

pricedetail.init({
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Price_Id: {
    type: DataTypes.INTEGER,
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

export default pricedetail;
import sequelize from '../config/connectDB.js';
import Product from '../models/product.js';
import Price from '../models/price.js';

const models = {
    Product,
    Price
};

// Product.associate(models);
// Price.associate(models); 

Product.hasMany(Price, {
    as: "Prices",
    foreignKey: 'Product_Id',
    sourceKey: 'Id',
})

Price.belongsTo(Product, {
    // as: "Prices",
    foreignKey: 'Product_Id',
    sourceKey: 'Id',
})

sequelize.sync({ force: true }).then(() => {
    console.log('Database synchronized');
}).catch(err => {
    console.error('Error syncing database:', err);
});

export default models;
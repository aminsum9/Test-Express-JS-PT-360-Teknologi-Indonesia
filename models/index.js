import Product from './product.js';
import Price from './price.js';
import PriceDetail from './pricedetail.js';

Product.associate({ Price });
Price.associate({ Product, PriceDetail });

PriceDetail.associate({ Price });

export { Product, Price, PriceDetail };
import Price from '../models/price.js';
import Product from '../models/product.js';

class ProductController {

    getProducts = (req, res) => {
        Product
            .findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                    include: [
                        'Id',
                        'Name',
                        'Product_Category',
                        'Description',
                    ],
                },
                // include: [
                //     {
                //         model: Price, 
                //         as: 'price',
                //     }
                // ]
            })
            .then(async data => {
                if (data) {
                    res.send({
                        success: true,
                        message: 'Berhasil mengambil data produk.',
                        data: data
                    });
                } else {
                    res.status(500).json({
                        success: false,
                        message: 'Gagal mengambil data produk.',
                        data: data
                    });
                }
            });
    };

    getById = (req, res) => {

        var id = req.query.id;

        Product
            .findOne({
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                    include: [
                        'Id',
                        'Name',
                        'Product_Category',
                        'Description',
                    ],
                },
                where: {
                    Id: id
                },
                // include: [
                //     {
                //         model: Price, 
                //         as: 'Prices',
                //     }
                // ]
            })
            .then(async data => {
                if (data) {
                    res.send({
                        success: true,
                        message: 'Berhasil mengambil data produk.',
                        data: data
                    });
                } else {
                    res.status(500).json({
                        success: false,
                        message: 'Gagal mengambil data produk.',
                        data: data
                    });
                }
            });
    };

    add = (req, res) => {

        var name = req.body.Name;
        var category = req.body.Product_Category;
        var desc = req.body.Description;

        var product = new Product();

        product.Name = name;
        product.Product_Category = category;
        product.Description = desc;

        if (product.save()) {
            res.send({
                success: true,
                message: 'Berhasil menambah data produk.',
                data: product
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'Gagal menambah data produk.',
                data: product
            });
        }
    };

    update = async (req, res) => {

        var id = req.body.Id;
        var name = req.body.Name;
        var category = req.body.Product_Category;
        var desc = req.body.Description;

        if (!id) {
            return res.send({
                success: true,
                message: 'Id tidak boleh kosong!',
                data: {}
            });
        }

        var findProduct = await Product
            .findOne({
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                    include: [
                        'Id',
                        'Name',
                        'Product_Category',
                        'Description',
                    ],
                },
                where: {
                    Id: id
                }
            })

        if(!findProduct)
        {
            return res.send({
                success: false,
                message: 'Produk tidak ditemukan!',
                data: {}
            });
        }

        Product.update({ Name: name, Product_Category: category, Description: desc }, { where: { Id: id } });

        res.send({
            success: true,
            message: 'Berhasil mengubah data produk.',
            data: {}
        });
    };

    delete = async (req, res) => {
        var id = req.body.Id;

        if (!id) {
            return res.send({
                success: true,
                message: 'Id tidak boleh kosong!',
                data: {}
            });
        }

        var findProduct = await Product
            .findOne({
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                    include: [
                        'Id',
                        'Name',
                        'Product_Category',
                        'Description',
                    ],
                },
                where: {
                    Id: id
                }
            })

        if(!findProduct)
        {
            return res.send({
                success: false,
                message: 'Produk tidak ditemukan!',
                data: {}
            });
        }

        Product.destroy({ where: { Id: id } });

        res.send({
            success: true,
            message: 'Berhasil menghapus data produk.',
            data: {}
        });
    };

}

export default ProductController;


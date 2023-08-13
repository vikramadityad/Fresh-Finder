const router = require('express').Router();
const moment = require('moment/moment');
const { Subcategory, Category, Product } = require('../models');
const {Op} = require('sequelize');
const lodash = require('lodash');

// router.get('/', async (req, res) => {
//     try {
//         const productData = await Product.findAll();
//         res.status(200).json(productData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


//filter the last 2 days stock.
router.get('/', async(req,res) => {
    const freshestProducts = (await Product.findAll({
        order: [['stock_date', 'DESC']],
        include: {
            model: Subcategory,
            include: Category
        },
        where: {
            stock_date: {
                [Op.gte]: moment().subtract(2, 'days').toDate()
            }
        }
    })).map((p) => p.get({plain: true}))
    
    // group the filtered stock by category
    const freshest = lodash.groupBy(freshestProducts, (p) => p.subcategory.category.name);
    res.render('freshest', {freshest :freshest});

  
});

// router.get('/freshest/optimize', async(req,res) => {
//     const freshestProducts = (await Product.findAll({
//         order: [['stock_date', 'DESC']],
//         include: {
//             model: Subcategory,
//             include: Category
//         },
//         where: {
//             stock_date: {
//                 [Op.gte]: moment().subtract(2, 'days').toDate()
//             }
//         }
//     })).map((p) => p.get({plain: true}))
    
//     // group the filtered stock by category
//     const freshest = lodash.groupBy(freshestProducts, (p) => p.subcategory.category.name);
//     console.log(freshest)
//     res.render('Freshest', {products, categories: freshest});
  
// });




// router.get('/:id', async (req, res) => {
//     try {
//         const productData = await Product.findByPk(req.params.id);
//         //const product = productData.get({ plain: true });

//         if (!productData) {
//             res.status(404).json({ message: 'No product found with this id'});
//             return;
//         }
//         res.status(200).json(productData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


module.exports = router;
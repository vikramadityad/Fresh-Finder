const router = require('express').Router();
const moment = require('moment/moment')
const {Product, Subcategory, Category} = require('../models')

router.get('/', async (req, res) => {
    try {
        
        const products = (await Product.findAll({
            include: {
                model: Subcategory,
                include: Category
            }
        })).map((rec) => rec.get({plain: true}));
        products.forEach((p) => {
            p.stock_date_text = moment(p.stock_date).fromNow()
        })
        const categories = (await Category.findAll()).map((rec) => rec.get({plain: true}));
        const categoriesWithProducts = categories.map((c) => {
            return {...c, products: products.filter((p) => p.subcategory.category_id == c.id)}
        })
        // const subCategories = await Subcategory.findAll().map((rec) => rec.get({plain: true}));
        res.render('Home', {products, categories: categoriesWithProducts, currentUserEmail: req.currentUser && req.currentUser.Email, isLoggedIn: !!req.currentUser});
    } catch (err) {
        console.log(err)    
        res.status(500).json(err);
    }
});

module.exports = router;
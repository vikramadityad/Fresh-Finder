const router = require('express').Router();
const { Product } = require('../models')

//View product detail by ID when you click on the product

router.post('/:id', async (req, res) => {
    try {
        const productbyid = await Product.findByPk(req.params.id);
        //const viewdetail = productbyid.get({ plain: true });

        if (!productbyid) {
            res.status(404).json({ message: 'No product found with this id' });
            return;
        }
        res.json(productbyid)
            
        //res.render('Viewdetail', viewdetail);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
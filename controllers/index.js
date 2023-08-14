const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const categoryRoutes = require('./categoryRoutes');
const subcategoryRoutes = require('./subcategoryRoutes');
const productRoutes = require('./productRoutes');
const collectionRoutes = require('./collectionRoutes');
const viewproduct = require('./viewdetailRoutes');
const loginRoute = require('./loginRoute');
const registerRoute = require('./registerRoute');

router.use('/categories', categoryRoutes);
router.use('/subcategories', subcategoryRoutes);
// router.use('/products', productRoutes);
router.use('/freshest', productRoutes);
router.use('/collections', collectionRoutes);
router.use('/', homeRoutes);
router.use('/product', viewproduct)
router.use('/', loginRoute)
router.use('/', registerRoute)

module.exports = router;
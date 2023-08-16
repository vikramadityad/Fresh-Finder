const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const categoryRoutes = require('./categoryRoutes');
const subcategoryRoutes = require('./subcategoryRoutes');
const productRoutes = require('./productRoutes');
const collectionRoutes = require('./collectionRoutes');
const viewproduct = require('./viewdetailRoutes');
const loginRoute = require('./loginRoute');
const userRoutes = require('./userRoutes');
const { User } = require('../models');

const setCurrentUser = async (req, res, next) => {
    console.log('middleware current user id', req.currentUserId)
    if(req.session.currentUserId) {
        const user = await User.findOne({
            where: {
                ID: req.session.currentUserId
            }
        })
        console.log('middleware user', user)
        if(user) {
            console.log('setting current user ')
            req.currentUser = user
        }
    }
    next()
}

router.use('/categories', categoryRoutes);
router.use('/subcategories', subcategoryRoutes);
// router.use('/products', productRoutes);
router.use('/freshest', productRoutes);
router.use('/collections', collectionRoutes);
router.use('/', setCurrentUser, homeRoutes);
router.use('/product', viewproduct)
router.use('/', loginRoute)
router.use('/register', userRoutes);

module.exports = router;
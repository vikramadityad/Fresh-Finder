const router = require('express').Router();
const sequelize = require('../config/connection');
const { User} = require('./../models');
const bcrypt = require('bcrypt');



router.get('/login',(req,res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    console.log('credentials ', email, password);
    const user = await User.findOne({
        where: {Email: email}
    })
    if(!user) {
        res.status(401)
        res.send('Username or password is incorrect');
        return;
    }
    const same = await bcrypt.compare(password, user.Password);
    if(!same) {
        res.status(401)
        res.send('Password or username may be wrong');
        return;
    }
    req.session.currentUserId = user.ID
    console.log(req.session)
    req.session.save()
    res.redirect('/');
})
router.post('/api/login',(req,res) => {
    const {username, password} = req.body
    console.log(username,password)
    User.create({username, password})
    res.json({"message":"test"})
});


module.exports = router;
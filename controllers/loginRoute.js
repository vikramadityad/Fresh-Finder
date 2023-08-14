const router = require('express').Router();
const sequelize = require('../config/connection');
const { User} = require('./../models');



router.get('/login',(req,res) => {
    res.render('login');
});


router.post('/api/login',(req,res) => {
    const {username, password} = req.body
    console.log(username,password)
    User.create({username, password})
    res.json({"message":"test"})
});


module.exports = router;
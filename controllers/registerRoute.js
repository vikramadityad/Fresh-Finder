const router = require('express').Router();



router.get('/register',(req,res) => {
    res.render('registration');
});

router.post('/api/register',(req,res) => {
    res.json({"msg":"registered"})
});


module.exports = router;
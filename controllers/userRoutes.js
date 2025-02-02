const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// const userController = require('../controllers/userController');
// const { validationResult } = require('express-validator');
const User = require('../models/user');
// Validation Rules using express-validator
// const {body} = require('express-validator');
// const registrationValidationRules = [
//     body('UserName').notEmpty(),
//     body('Email').isEmail(),
//     body('Password').isLength({ min:6 }),
// ];


// router.post('/create', async (req, res) => {
//     try {
//         const newUser = req.body;
//         const createdUser = await userConstroller.createUser(newUser);
//         res.json(createdUser);
//     } catch (error) {
//         console.error("Error creating user:", error);
//         res.status(500).json({ error: "An error has occurred deleting your account." });
//     }
// });

// router.put('/update/:userId', async (req, res) => {
//     try {
//         const userId = req.params.userId;
//         const updates = req.body;
//         const updatedUser = await userController.updateUser(userId, updates);
//         res.json(updatedUser);
//     } catch (error) {
//         console.error("Error updating your account:", error);
//         res.status(500).json({ error: "Error has occured updating your account." });
//     }
// });

// router.delete('/delete/:userId', async (req, res) => {
//     try {
//         const userId = req.params.userId;
//         const rowsDeleted = await userConstroller.deleteUser(userId);
//         res.json({ rowsDeleted });
//     } catch (error) {
//         console.error("Error deleting account:", error);
//         res.status(500).json({ error: "An Error has occured deleting your account." });
//     }
// });

// router.get('/', (req, res) => {
//     res.send('registration')
// });

router.post('/', async (req, res) => {
  // res.send('testing reg routes')
  try {
    //Validates request
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    console.log('incoming request', req.body)
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt)
    const newUser = {
      Username: req.body.username,
      Email: req.body.email,
      Password: hash,
      Address: req.body.address,
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      City: req.body.city,
      Province: req.body.province,
      EmailVerified: false,
    };

    const user = await User.create(newUser);
    console.log('created user', user)
    res.redirect('/')
    // req.render('registration',{registeredUser: registeredUser});
    // res.json(registeredUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  res.render('registration')
});


// router.post('/', validationResult, async (req, res) => {
//     res.render('testing reg routes')
//     try {
//         //Validates request
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         const newUser = {
//             UserName: req.body.UserName,
//             Email: req.body.Email,
//             Password: req.body.Password, //hash password before entering into DB
//             Address: req.body.Address,
//             FirstName: req.body.FirstName,
//             LastName: req.body.LastName,
//             City: req.body.City,
//             Province: req.body.Province,
//             EmailVerified: false,
//         };

//          await User.register(newUser);
//         // req.render('registration',{registeredUser: registeredUser});
//         // res.json(registeredUser);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

module.exports = router;
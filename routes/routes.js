const express = require('express');
const Model = require('../models/user');
const router = express.Router();

// Add User Data
router.post('/add', async (req, res) => {
  const { phoneNumber, name, email, dob, gender } = req.body;

  const data = new Model({
    phoneNumber,
    name,
    email,
    dob,
    gender,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Find By Phone Number
router.get('/find/:phoneNumber', async (req, res) => {
  try {
    const phoneNumber = req.params.phoneNumber;

    const result = await Model.find({ phoneNumber });

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

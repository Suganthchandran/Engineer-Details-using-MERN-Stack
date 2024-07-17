const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/userSchema');

router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await User.findOne({ email, role });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(500).json({ error: "Wrong credentials!" });
    }
    const hashedPwd = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const Origpassword = hashedPwd.toString(CryptoJS.enc.Utf8);
    if (Origpassword !== req.body.password) {
      return res.status(500).json({ error: "Wrong credentials!" });
    }

    const accessToken = jwt.sign(
      {
        id : user._id,
        isAdmin : user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3m" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;

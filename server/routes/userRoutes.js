const express = require("express");
const router = express.Router();
const {
  signin,
  signup,
  getOtherUsers,
} = require("../controllers/userController.js");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/otherUsers", getOtherUsers);

module.exports = router;

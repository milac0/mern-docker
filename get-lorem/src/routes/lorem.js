const router = require("express").Router();

router.route("/").get((req, res) => {
  res.json({ msg: "Lorem Ipsum!" });
});

module.exports = router;

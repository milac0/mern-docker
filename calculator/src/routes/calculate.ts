const router = require("express").Router();

router.route("/").get((req, res) => {
  res.json({ msg: "Calculate" });
});

module.exports = router;

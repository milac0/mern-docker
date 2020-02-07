import { Request, Response } from 'express';
const stringSimilarity = require('string-similarity');
const router = require("express").Router();

router.route("/").post((req: Request, res: Response) => {
  const {string1, string2} = req.body;
  const similarity = stringSimilarity.compareTwoStrings(string1, string2);
  res.status(200).json({similarity});
});

module.exports = router;

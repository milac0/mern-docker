const router = require("express").Router();
const Lorem = require('../models/lorem.model');
import { Request, Response } from 'express';
import { ILorem } from '../interface/ILorem';
const getRandomNum = require('../../helpers/getRandomNum');

router.route("/").post((req: Request, res: Response) => {
  const {name, n} = req.body
  Lorem.findOne({ name })
    .then((lorem: ILorem) => {
      const words = lorem.words;
      const max = words.length;
      const arr = [];
      for (let i=0; i<n; i++) {
        arr.push(words[getRandomNum(max)])
      }
      const string = arr.join(' ');
      return res.status(200).json({string});
    })
    .catch((e: Error) => res.status(500).json({ msg: e }))
});

module.exports = router;

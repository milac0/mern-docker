const fs = require('fs');
const router = require("express").Router();
const Lorem = require('../models/lorem.model');
import { Request, Response } from 'express';
import { ILorem } from '../interface/ILorem';
const getRandomNum = require('../../helpers/getRandomNum');

router.route("/").post((req: Request, res: Response) => {
  const file = fs.createWriteStream('./text.txt');
  const {name, n} = req.body;

  Lorem.findOne({ name })
    .then((lorem: ILorem) => {
      const words = lorem.words;
      const max = words.length;

      for (let i=0; i<n-1; i++) {
          file.write(`${words[getRandomNum(max)]} `);
      }
      file.write(words[getRandomNum(max)]);

      const readStream = fs.createReadStream('./text.txt')
      res.status(200);
      readStream.pipe(res);
    })
    .catch((e: Error) => res.status(500).json({ msg: e }))
});

module.exports = router;

const fs = require('fs');
const router = require("express").Router();
const Lorem = require('../models/lorem.model');
import { Request, Response } from 'express';
import { ILorem } from '../interface/ILorem';
const getRandomNum = require('../../helpers/getRandomNum');

router.route("/").get((req: Request, res: Response) => {
  const {name, n} = req.query;
  const fileName = `./src/texts/${name}.txt`;
  const file = fs.createWriteStream(fileName);

  Lorem.findOne({ name })
    .then(async (lorem: ILorem) => {
      const words = lorem.words;
      const max = words.length;

      for (let i=0; i<n-1; i++) {
          if(!file.write(`${words[getRandomNum(max)]} `)) {
            await new Promise(resolve => file.once('drain', resolve));
        }          
      }
      file.write(words[getRandomNum(max)]);

      const readStream = fs.createReadStream(fileName)
      res.status(200);
      res.setHeader('Content-Type', 'text/plain');
      readStream.pipe(res);
    })
    .catch((e: Error) => res.status(500).json({ msg: e }))
});

module.exports = router;

const router = require("express").Router();
const Lorem = require('../models/lorem.model');
import { Request, Response } from 'express';
import { ILorem } from '../interface/ILorem';

router.route("/").get((req: Request, res: Response) => {
  Lorem.findOne({ name: "bacon" })
    .then((lorem: ILorem) => res.status(200).json(lorem))
    .catch((e: Error) => res.status(500).json({ msg: e }))
});

module.exports = router;

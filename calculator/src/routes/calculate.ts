import { Router, Request, Response } from "express";
import stringSimilarity from 'string-similarity';

const router = Router();

router.route("/").post((req: Request, res: Response) => {
  const { string1, string2 } = req.body;
  const similarity = stringSimilarity.compareTwoStrings(string1, string2);
  res.status(201).json({ similarity });
});

export default router;


// standard flow should be
  //  1. read & parse inputs
  //  2. validate inputs
  //  3. do action
  //  4. respond

import { Request, Response } from 'express';
import stringSimilarity from 'string-similarity';

export const calculateSimilarity = (req: Request, res: Response) => {
    // 1. read & parse inputs
    const { string1, string2 } = req.body;

    // 2. validate inputs
    if (typeof string1 != "string" || typeof string2 != "string") {
        res.status(415).json({ error: "Wrong data sent." })
    } else {
        // 3. do action
        const similarity = stringSimilarity.compareTwoStrings(string1, string2);

        // 4. respond
        res.status(201).json({ similarity });
    }
}
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const SECRET: Secret = "my-secret-key";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}
export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      throw new Error();
    }
    const decoded = jwt.verify(token, SECRET);
    (req as CustomRequest).token = decoded;
    // req.decoded

    next();
  } catch (err) {
    res.status(401).send("please authenticate");
  }
};

import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todos = Data.todo.getList();
      res.statusCode = 200;
      return res.send(todos);
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.send(err);
    }
  }

  res.statusCode = 405;
  console.log(res.statusCode);
  return res.end();
};

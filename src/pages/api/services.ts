import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // by default get request

  console.log(services)
  res.status(200).json({ services });
}

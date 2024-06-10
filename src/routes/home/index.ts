import { Request, Response } from "express";

function home(_: Request, res: Response) {
  try {
    res.status(200).send("Home page 😊");
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
}

export default home;

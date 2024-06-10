import { Request, Response } from "express";
import { db } from "../../db/db";
import { insertUserValidation, users } from "../../db/schema";

// ----------------------------------------------------------------------------
async function getUsers(_: Request, res: Response) {
  try {
    const allUsers = await db.select().from(users);
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error });
  }
}
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
async function addUser(req: Request, res: Response) {
  try {
    const { fullName, phone } = insertUserValidation.parse(req.body);
    const newUser = await db
      .insert(users)
      .values({ fullName, phone })
      .returning();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error });
  }
}
// ----------------------------------------------------------------------------

export { getUsers, addUser };

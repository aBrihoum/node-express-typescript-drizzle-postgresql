import { Router } from "express";
import home from "./home";
import { addUser, getUsers } from "./users";
const ROUTES = Router();

// home ---------------------------
ROUTES.get("/", home);
// --------------------------------

// users --------------------------
ROUTES.get("/users", getUsers);
ROUTES.post("/users", addUser);
// --------------------------------

export default ROUTES;

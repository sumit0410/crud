import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controller/userController.js";

const route = express.Router();

route.post("/createUser", createUser);
route.get("/getAllUser", getAllUser);
route.put("/updateUser/:id", updateUser);
route.delete("/deleteUser/:id", deleteUser);
route.get("/getSingleUser/:id", getSingleUser);

export default route;

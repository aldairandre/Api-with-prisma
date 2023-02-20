import { Router } from "express";
import { 
  getAllUsers, 
  createUser,
  searchUser,
  editUser,
  deleteUser
} from "../controllers/user-controllers.js";

const router = Router();

router.get("/",getAllUsers);
router.post("/create",createUser);
router.get("/search/:id",searchUser);
router.get("/edit/:id",editUser);
router.get("/delete/:id",deleteUser);


export default router;
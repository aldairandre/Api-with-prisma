import { Router } from "express";
import { 
  getAllUsers, 
  createUser,
  searchUser,
  /* editUser, */
  deleteUser
} from "../controllers/user-controllers.js";

const router = Router();

router.get("/",getAllUsers);
router.post("/create",createUser);
router.get("/search/:id",searchUser);
router.delete("/delete/:id",deleteUser);
// router.get("/edit/:id",editUser);


export default router;
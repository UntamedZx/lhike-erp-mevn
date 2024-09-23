import express from "express";
import { register, login } from "../controllers/authController.js";
import { authenticate } from "../middlewares/authenticate.js";
import { authorize } from "../middlewares/authorize.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/user", authenticate, authorize(["user", "admin"]), (req, res) => {
	res
		.status(200)
		.json({ message: `Welcome ${req.user.name}, you are a ${req.user.role}` });
});

router.get("/admin", authenticate, authorize(["admin"]), (req, res) => {
	res
		.status(200)
		.json({ message: `Welcome ${req.user.name}, you have admin access` });
});

export default router;
import { Router } from "express"

import { login,signup } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", signup);
authRouter.post("/sign-in", login);

export default authRouter;
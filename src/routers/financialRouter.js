import { Router } from "express"

const authRouter = Router();

import {
  transaction,
  getTransactions,
  getTransactionsSum
} from "../controllers/financialController.js";

authRouter.post("/financial-events", transaction);

authRouter.get("/financial-events", getTransactions);

authRouter.get("/financial-events/sum", getTransactionsSum);
import { Router } from "express"
import { cakeMiddleware } from "../middlewares/index.js"
import { cakeController } from "../controllers/index.js"

const cakeRoute = Router()

cakeRoute.post(
  "/cakes",
  cakeMiddleware.validateCake,
  cakeMiddleware.checkNameCake,
  cakeController.newCake
)

export { cakeRoute }
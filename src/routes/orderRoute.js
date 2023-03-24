import { Router } from "express"
import { orderMiddleware } from "../middlewares/index.js"
import { orderController } from "../controllers/index.js"

const orderRoute = Router()

orderRoute.post(
  "/orders",
  orderMiddleware.validateOrder,
  //orderMiddleware.checkNameCake,
  orderController.newOrder
)

export { orderRoute }
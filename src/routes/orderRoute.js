import { Router } from "express"
import { orderMiddleware } from "../middlewares/index.js"
import { orderController } from "../controllers/index.js"

export const orderRoute = Router()

orderRoute.post(
  "/orders",
  orderMiddleware.validateOrder,
  orderController.newOrder
)

orderRoute.get(
  "/orders",
  orderMiddleware.getOrder,
  orderController.showOrder
)

orderRoute.get(
  "/orders/:id",
  orderMiddleware.getOrdersbyId,
  orderController.getOrderbyId
)
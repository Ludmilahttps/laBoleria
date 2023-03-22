import { Router } from "express"
import { clientMiddleware } from "../middlewares/index.js"
import { clientController } from "../controllers/index.js"

const clientRoute = Router()

clientRoute.post(
  "/clients",
  clientMiddleware.validateClient,
  clientController.newClient
)

export { clientRoute }
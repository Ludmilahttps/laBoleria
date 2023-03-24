import { Router } from "express"
import { clientRoute } from "./clientRoute.js"
import { cakeRoute } from "./cakeRoute.js"
import { orderRoute } from "./orderRoute.js"

const router = Router()
router.use([clientRoute, cakeRoute, orderRoute])

export default router
import { Router } from "express"
import { clientRoute } from "./clientRoute.js"
import { cakeRoute } from "./cakeRoute.js"
import { orderRoute } from "./orderRoute.js"
//import { createPostRoute } from "./createPost.js"
//import { hashtagRoute } from "./hashtag.js"

const router = Router()
router.use([clientRoute, cakeRoute, orderRoute])

export default router
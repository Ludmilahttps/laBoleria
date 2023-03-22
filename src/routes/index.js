import { Router } from "express"
import { clientRoute } from "./clientRoute.js"
import { cakeRoute } from "./cakeRoute.js"
//import { timeLineRoute } from "./timeline.js"
//import { createPostRoute } from "./createPost.js"
//import { hashtagRoute } from "./hashtag.js"

const router = Router()
router.use([clientRoute, cakeRoute])
//router.use([authRoute, usersRoute, timeLineRoute, createPostRoute, hashtagRoute])

export default router
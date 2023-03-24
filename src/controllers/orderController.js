import dotenv from "dotenv"
import { orderSchema } from "../schemas/index.js"

dotenv.config()

export const newOrder = async (request, response) => {
  const { clientId, cakeId, quantity, totalPrice, createdAt } = response.locals.newOrder
  const order = {
    clientId,
    cakeId,
    quantity,
    totalPrice,
    createdAt,
  }

  try {
    await orderSchema.insertOrder(order)
    console.log(order)
    return response.status(201).send("Order registered!")
  } catch (error) {
    return response.status(500).send(`Internal system error.`)
  }
}
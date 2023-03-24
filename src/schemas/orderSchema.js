import joi from "joi"
import { connection } from "./index.js"
import { querieOrder } from "../queries/index.js"

export const insertOrder = async (order) => {
  const { clientId, cakeId, quantity, totalPrice, createdAt } = order
  try {
    await connection.query(querieOrder.insertOrder(), [clientId, cakeId, quantity, totalPrice, createdAt])
  } catch (error) {
    console.log(error)
  }
}

export const orderSchema = joi.object({
  clientId: joi.number().required().min(0),
  cakeId: joi.number().required().min(0),
  quantity: joi.number().required(),
  totalPrice: joi.number().required().min(0),
})
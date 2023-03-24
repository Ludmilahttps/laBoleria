import joi from "joi"
import date from "@joi/date"
import { connection } from "./index.js"
import { querieOrder } from "../queries/index.js"

const joiDate = joi.extend(date)

export const insertOrder = async (order) => {
  const { clientId, cakeId, quantity, totalPrice, createdAt } = order
  try {
    await connection.query(querieOrder.insertOrder(), [clientId, cakeId, quantity, totalPrice, createdAt])
  } catch (error) {
    console.log(error)
  }
}

export const showOrder = async => {
  try {
    connection.query(querieOrder.showOrders())
  } catch (error) {
    console.log(error)
  }
}

export const orderSchema = joi.object({
  clientId: joi.number().required().min(0),
  cakeId: joi.number().required().min(0),
  quantity: joi.number().required().min(0).max(5),
  totalPrice: joi.number().required().min(0),
})

export const orderSchemaDate = joi.object({
  date: joiDate.date().format('YYYY-MM-DD').optional()
})
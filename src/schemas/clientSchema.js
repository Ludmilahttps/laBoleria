import joi from "joi"
import { connection } from "./index.js"
import { querieClient } from "../queries/index.js"

export const insertClient = async (user) => {
  const { name, address, phone } = user
  try {
    await connection.query(querieClient.insertClient(), [name, address, phone])
  } catch (error) {
    console.log(error)
  }
}

export const clientSchema = joi.object({
  name: joi.string().required().trim(),
  address: joi.string().required().trim(),
  phone: joi.string().required().min(10).max(11),
})
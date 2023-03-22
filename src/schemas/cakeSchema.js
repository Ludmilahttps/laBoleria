import joi from "joi"
import { connection } from "./index.js"
import { querieCake } from "../queries/index.js"

export const insertCake = async (cake) => {
  const { name, price, image, description } = cake
  try {
    await connection.query(querieCake.insertCake(), [name, price, image, description])
  } catch (error) {
    console.log(error)
  }
}

export const cakeSchema = joi.object({
  name: joi.string().required().trim().min(2),
  price: joi.number().required().min(0),
  image: joi.string().uri().required(),
  description: joi.string().required().trim(),
})
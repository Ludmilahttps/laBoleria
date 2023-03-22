import dotenv from "dotenv"
import { cakeSchema } from "../schemas/index.js"

dotenv.config()

export const newCake = async (request, response) => {
  const { name, price, image, description } = response.locals.newCake
  const cake = {
    name,
    price,
    image,
    description,
  }

  try {
    await cakeSchema.insertCake(cake)
    console.log(cake)
    return response.status(201).send("Cake registered!")
  } catch (error) {
    return response.status(500).send(`Internal system error.`)
  }
}
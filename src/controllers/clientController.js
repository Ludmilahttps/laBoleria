import dotenv from "dotenv"
import { clientSchema } from "../schemas/index.js"

dotenv.config()

export const newClient = async (request, response) => {
  const { name, address, phone } = response.locals.newUser
  const user = {
    name,
    address,
    phone,
  }
  
  try {
    console.log("here")
    await clientSchema.insertClient(user)
    console.log("here")
    console.log(user)
    return response.status(201).send("Customer registered!")
  } catch (error) {
    return response.status(500).send(`Internal system error.`)
  }
}
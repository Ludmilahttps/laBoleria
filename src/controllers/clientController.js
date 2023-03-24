import dotenv from "dotenv"
import { clientSchema } from "../schemas/index.js"

dotenv.config()

export const newClient = async (request, response) => {
  const { name, address, phone } = response.locals.newClient
  const user = {
    name,
    address,
    phone,
  }

  try {
    await clientSchema.insertClient(user)
    console.log(user)
    return response.status(201).send("Customer registered!")
  } catch (error) {
    return response.status(500).send(`Internal system error.`)
  }
}

export async function getClientsOrders(request, response) {
  const {id} = request.params

  try {
  const ordersByClient = await clientSchema.getOrdersByClientId(Number(id))
  response.send(ordersByClient.rows)
  
  } catch (error) {
      console.log(error)
      response.sendStatus(error)
  }
}
import dotenv from "dotenv"
import { request, response } from "express"
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

export const showOrder = async (request, response) => {
  try {
    const { rows: orders } = await orderSchema.showOrder()
    if (orders.length === 0) return response.sendStatus(404)

    const allOrders = orders.map((element) => {
      const order = {
        client: {
          id: element.clientId,
          name: element.clientName,
          address: element.address,
          phone: element.phone,
        },
        cake: {
          id: element.cakeId,
          name: element.cakes,
          price: element.price,
          description: element.description,
          image: element.image,
        },
        orderId: element.ordersId,
        createdAt: element.createdAt,
        quantity: element.quantity,
        totalPrice: element.totalPrice,
      }
      return order
    })
    response.status(200).send(allOrders)
  } catch (error) {
    console.log(error)
    return response.sendStatus(error)
  }
}

export async function getOrderbyId(request, response) {
  const { id } = request.params
  try {
    console.log("here")
    const { rows: order }= await orderSchema.selectOrdersId(id)
    const { rows: client }= await orderSchema.selectClient(id)
    const { rows: cake} = await orderSchema.selectCake(id)
    console.log(order)
    const orders = {
      client: client,
      cake: cake,
      order: order
    }
    return response.status(200).send(orders)

  } catch (error) {
    console.log(error)
    return response.sendStatus(error)
  }
}
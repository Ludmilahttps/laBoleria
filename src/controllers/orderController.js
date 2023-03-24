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

export const showOrder = async (req, res) => {
  try {
    const { rows: orders } = await orderSchema.showOrder()
    if (orders.length === 0) return res.sendStatus(404)

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
    res.status(200).send(allOrders)
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

export async function getOrderbyId(req, res) {
  const { id } = req.params
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
    return res.status(200).send(orders)

  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}
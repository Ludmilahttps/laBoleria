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
    const completeOrders = await orderSchema.showOrder()
    const allCompleteOrders = completeOrders.rows.map((element) => {
      const order= {
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

    if (!completeOrders.rows[0]) {
      return res.status(404).send([])
    }

    res.status(200).send(allCompleteOrders)

  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}
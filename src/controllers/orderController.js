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
    const orders = orderSchema.showOrder()
    if (typeof orders[1] === "undefined") return res.sendStatus(404)

    const allOrders = orders.rows.map((element) => {
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

export async function getOrderbyId(req, res){
  const { id } = req.params
  try{
      const order = orderSchema.selectOrdersId(id)
      const client = orderSchema.selectClient(order)
      const cake = orderSchema.selectCake(order)
      const orders = {
          client: {
              id: client.rows[0].id,
              name: client.rows[0].name,
              address: client.rows[0].address,
              phone: client.rows[0].phone,
          },
          cake: {
              id: cake.rows[0].id,
              name: cake.rows[0].name,
              price: cake.rows[0].price,
              description: cake.rows[0].description,
              image: cake.rows[0].image,
          },
          order: order.rows[0].id,
          createdAt: order.rows[0].createdAt,
          quantity: order.rows[0].quantity,
          totalPrice: order.rows[0].totalPrice
      }

  return res.status(200).send(orders)

  }catch (err) {
      console.log(err)
      return res.sendStatus(500)
  }
}
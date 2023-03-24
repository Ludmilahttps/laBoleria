import { orderSchema } from "../schemas/index.js"
import { connection } from "../schemas/index.js"

export const validateOrder = (request, response, next) => {
  const Body = orderSchema.orderSchema.validate(request.body)
  const today = new Date()

  if (Body.error) return response.status(422).send("Some error with JSON body")
  const newOrder = {
    clientId: Body.value.clientId,
    cakeId: Body.value.cakeId,
    quantity: Body.value.quantity,
    totalPrice: Body.value.totalPrice,
    createdAt: today,
  }
  console.log(newOrder)
  response.locals.newOrder = newOrder
  next()
  return true
}

export const getOrder = async (request, response, next) => {
  const { date } = request.query

  try {
    const isEmpty = await connection.query(`SELECT * FROM orders`)
    if (isEmpty.rows.length === 0) {
      return response.sendStatus(404)
    }

    const validatition = orderSchema.orderSchemaDate.validate({ date })
    if (validatition.error) {
      return res.sendStatus(error)
    }

    next()

  } catch (error) {
    console.log(error)
    return response.status(500).send(error.message)
  }
}

export const getOrdersbyId = async (req, res, next) => {
  const { id } = req.params

  try {
      const order = await connection.query(`SELECT * FROM orders WHERE id_order = ${id}`)
      const cake = await connection.query(`SELECT * FROM cakes WHERE id_cake = ${id}`)
      const client = await connection.query(`SELECT * FROM clients WHERE id_client = ${id}`)
      if(order.rows.length === 0 && cake.rows.length === 0 && client.rows.length === 0 ) {
          return res.status(404).send("Id not found")
      }
      next()

  } catch(err) {
      return res.status(500).send(err.message)
  }
}
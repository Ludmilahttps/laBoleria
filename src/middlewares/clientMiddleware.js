import { clientSchema } from "../schemas/index.js"
import { connection } from "../schemas/index.js"

export const validateClient = (request, response, next) => {
  const Body = clientSchema.clientSchema.validate(request.body)

  if (Body.error) return response.status(422).send("Some error with JSON body")
  const newClient = {
    name: Body.value.name,
    address: Body.value.address,
    phone: Body.value.phone,
  }

  response.locals.newClient = newClient
  next()
  return true
}

export const getOrdersById = async (req, res, next) => {
  const { id } = req.params
  try {
    const { rows: clients } = await connection.query(`SELECT * FROM clients WHERE id_client = $1`, [id])
    if (clients.length === 0) {
      return res.status(404).send("Client id not found")
    }

    const { rows: orders } = await clientSchema.getOrdersByClientId(id)
    if (orders.length === 0) {
      return res.status(404).send("O usuário não fez nenhum pedido")
    }

    next()

  } catch (err) {
    return res.status(500).send(err.message)
  }
}
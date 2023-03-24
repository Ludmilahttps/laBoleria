import { orderSchema } from "../schemas/index.js"

export const validateOrder = (request, response, next) => {
  const Body = orderSchema.orderSchema.validate(request.body)
  const today = new Date()
  
  if (Body.error) return response.status(422).send("Some error with JSON body")
  const newOrder= {
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
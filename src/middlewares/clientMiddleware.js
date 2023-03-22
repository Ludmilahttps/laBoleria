import { clientSchema } from "../schemas/index.js"

export const validateClient = (request, response, next) => {
  const Body = clientSchema.clientSchema.validate(request.body)
  
  if (Body.error) return response.status(422).send("Some error with JSON body")
  const newClient= {
    name: Body.value.name,
    address: Body.value.address,
    phone: Body.value.phone,
  }

  response.locals.newUser = newClient
  next()
  return true
}
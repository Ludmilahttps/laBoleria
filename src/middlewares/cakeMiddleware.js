import { cakeSchema } from "../schemas/index.js"

export const checkNameCake = async (request, response, next) => {
  const { name } = response.locals.newCake

  const nameExists = await cakeSchema.nameExists(name)
  if (nameExists) return response.status(409).send("Conflict")
  next()
  return true
}

export const validateCake = (request, response, next) => {
  const Body = cakeSchema.cakeSchema.validate(request.body)
  
  if (Body.error) return response.status(422).send("Some error with JSON body")
  const newCake= {
    name: Body.value.name,
    price: Body.value.price,
    image: Body.value.image,
    description: Body.value.description,
  }

  response.locals.newCake = newCake
  next()
  return true
}
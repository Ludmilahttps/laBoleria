export const insertOrder = () => {
    const query = `--sql
          INSERT INTO
              orders ("clientId", "cakeId", "quantity", "totalPrice", "createdAt")
              SELECT $1, $2, $3, $4, $5
              WHERE EXISTS (SELECT * FROM clients WHERE id_client = $1)
              AND EXISTS (SELECT * FROM cakes WHERE id_cake = $2);     
      `
    return query
  }

export const showOrders = () => {
  const query = `--sql
      SELECT orders.id_order AS "ordersId", orders."createdAt", orders.quantity, orders."totalPrice",
      cakes.id_cake AS "cakeId", cakes.name AS "cakes", cakes.price, cakes.description, cakes.image,
      clients.id_client AS "clientId", clients.name AS "clientName", clients.address, clients.phone 
      FROM orders
      JOIN clients ON "clientId" = clients.id_client
      JOIN cakes ON "cakeId" = cakes.id_cake
  `
  return query
}

export const showOrdersbyId = () => {
  const query = `--sql
      SELECT * FROM orders WHERE id_order = $1
    `
  return query
}

export const selectClient = () => {
  const query = `--sql
      SELECT * FROM clients WHERE id_client = $1
    `
  return query
}

export const selectCake = () => {
  const query = `--sql
      SELECT * FROM cakes WHERE id_cake = $1
    `
  return query
}
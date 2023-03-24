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
      SELECT orders.id AS "ordersId", orders."createdAt", orders.quantity, orders."totalPrice",
      cakes.id AS "cakeId", cakes.name AS "cakes", cakes.price, cakes.description, cakes.image,
      clients.id AS "clientId", clients.name AS "clientName", clients.address, clients.phone 
      FROM orders
      JOIN clients ON "clientId" = clients.id
      JOIN cakes ON "cakeId" = cakes.id
  `
  return query
}
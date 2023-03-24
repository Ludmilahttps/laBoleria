export const insertOrder = () => {
    const query = `--sql
          INSERT INTO
              orders ("clientId", "cakeId", "quantity", "totalPrice", "createdAt")
          VALUES
              ($1, $2, $3, $4, $5);        
      `
    return query
  }

  export const getNamebyName = () => {
    const query = `--sql
      SELECT
          name
      FROM
          cakes
      WHERE
          name = $1;             
  `
    return query
  }
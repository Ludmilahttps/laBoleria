  export const insertClient = () => {
    
    const query = `--sql
          INSERT INTO
              clients ("name", "address", "phone")
          VALUES
              ($1, $2, $3);        
      `
    return query
  }

  export const getOrdersByClientId = id => {
    
    const query = `--sql
        SELECT * FROM orders WHERE "clientId" = ${id}   
      `
    return query
  }

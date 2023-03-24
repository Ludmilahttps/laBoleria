  export const insertClient = () => {
    
    const query = `--sql
          INSERT INTO
              clients ("name", "address", "phone")
          VALUES
              ($1, $2, $3);        
      `
    return query
  }

  export const getClientsById = () => {
    
    const query = `--sql
        SELECT * FROM clients WHERE id_client = $1      
      `
    return query
  }

  export const getOrdersByClientId = () => {
    
    const query = `--sql
        SELECT * FROM orders WHERE "clientId" = $1      
      `
    return query
  }

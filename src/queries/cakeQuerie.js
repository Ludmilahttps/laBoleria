export const insertCake = () => {
    const query = `--sql
          INSERT INTO
              cakes ("name", "price", "image", "description")
          VALUES
              ($1, $2, $3, $4);        
      `
    return query
  }
import connection from "../database.js";

async function userExist (email){
  return await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email])
}

async function insertUser (email,name,hashedPassword){
    return await connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
  );
  }



export{userExist,insertUser}
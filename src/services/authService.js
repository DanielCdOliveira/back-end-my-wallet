import * as authRepository from "../repositories/authRepository.js"

async function signUp(password,name,email){
    const hashedPassword = bcrypt.hashSync(password, 12);
  
    const creation = authRepository.insertUser(email,name,hashedPassword)
    
}

export {signUp}
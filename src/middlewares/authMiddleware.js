import * as userRepository from "../repositories/authRepository.js";

export async function verifySignup(req, res, next) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(422);
    }

    const existingUsers = await userRepository.userExist(email)

    if (existingUsers.rowCount > 0) {
      return res.sendStatus(409);
    }
    next()
  } catch (error) {
    res.send(error)
  }
}

import { createUser, login } from "./User/Mutation.js"
import { getAllUsers, verifyToken } from "./User/Query.js"

export const Query = {
    getAllUsers,
    verifyToken,
}

export const Mutation = {
    login,
    createUser,
}
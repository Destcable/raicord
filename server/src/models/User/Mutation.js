import { generatePassword } from "../../utils/generatePassword.js";
import jwt from "jsonwebtoken";

export async function login(_, args, context) {
    const { input } = args;

    const user = await context.prisma.user.findUnique({ where: { ...input } })
    if (!user) throw new Error('User not found');

    const token = jwt.sign({ userId: user.id, email: user.email }, "TEST",  { expiresIn: '1m' })

    return { 
        token,
        user
    }
}

export async function createUser(_, args, context) {
    const { input } = args;
    
    input.password = generatePassword()

    return await context.prisma.user.create({
        data: {  ...input }
    })
}

export async function deleteEmployee(_, args, context) {
    const { id } = args;
    return await context.prisma.employee.delete({
        where: { id }
    })
}
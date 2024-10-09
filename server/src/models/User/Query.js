import jwt from "jsonwebtoken";

export async function getAllUsers(_, args, context) {
    return await context.prisma.user.findMany();
}

export async function verifyToken(_, args, context) {
    const { input } = args;
    
    try {
        jwt.verify(input.token, "TEST");
        return { status: true }
    } catch (error) {
        return { status: false }
    }
}

export async function _allEmployeesMeta(_, args, context) {
    return { count: await context.prisma.employee.count({ }) }
}
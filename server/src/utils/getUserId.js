import jwt from "jsonwebtoken";

/**
 * Проверка токена
 * @param {string} token - JWT токен
 * @returns {boolean} - возвращает true, если токен правильный, иначе null
 */
export const getUserId = (token) => {
    if (!token) return null;
    
    try {
        const decoded = jwt.verify(token, 'TEST');
        return decoded.userId
    } catch (error) {
        return false;
    }
};
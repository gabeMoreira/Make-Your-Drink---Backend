import { json } from 'express'
import jwt from 'jsonwebtoken'

export const authMiddleware = async (req, res, next) => {

    if (req.path === '/login' || '/users') return next()

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) return res.status(401).json({ message: "Requisição não autorizada." })

    try {
        jwt.verify(token, process.env.TOKEN_SECRET)
        return next()
    } catch (err) {
        return res.status(401).json({ message: "Requisição não autorizada." })
    }
}

export default authMiddleware
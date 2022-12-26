import express from 'express'
const Router = express.Router()
import jwt from 'jsonwebtoken'
import userModel from '../entities/user/userModel.js'
import bcrypt from 'bcrypt'

Router.route('/').post( async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) return res.status(401).json({ error: 'Invalid Login' })
    const findUsers = await userModel.findOne({ email })

    if (!findUsers) {
        return res.status(401).json({ error: 'Invalid Login' })
    }

    const passwordCheck = await bcrypt.compare(password, findUsers.password)

    if (!passwordCheck) {
        return res.status(401).json({ error: 'Invalid Login' })
    }
    const token = jwt.sign({
        id: findUsers.id,
        email: findUsers.email
    }, process.env.TOKEN_SECRET)

    return res.status(200).json({
        message: "Login efetuado com sucesso.",
        token: token
    })

})

export default Router
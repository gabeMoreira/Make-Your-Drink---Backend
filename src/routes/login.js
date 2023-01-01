import express from 'express'
const Router = express.Router()
import jwt from 'jsonwebtoken'
import userModel from '../entities/user/userModel.js'
import bcrypt from 'bcrypt'

Router.route('/').post( async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) return res.status(401).json({ error: 'Preencha os campos corretamente' })
    const findUsers = await userModel.findOne({ email })

    if (!findUsers) {
        return res.status(401).json({ error: 'E-mail ou senha inválida' })
    }

    const passwordCheck = await bcrypt.compare(password, findUsers.password)

    if (!passwordCheck) {
        return res.status(401).json({ error: 'E-mail ou senha inválida' })
    }
    const token = jwt.sign({
        id: findUsers.id,
        email: findUsers.email
    }, process.env.TOKEN_SECRET)

    res.cookie("jwt", token, {
        withCredentials: true,
        httpOnly: false,
        maxAge: 1000 * 60 * 15, // would expire after 15 minutes
    })

    return res.status(200).json({
        message: "Login efetuado com sucesso.",
        token: token
    })

})

export default Router
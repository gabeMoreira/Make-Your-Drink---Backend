import userModel from './userModel.js'
import bcrypt from 'bcrypt'

export const getUsers = async (req, res) => {
    const findUsers = await userModel.find({})
    return findUsers
}

export const createUsers = async (req, res) => {
    console.log('CHEGOUU')
    const { name, email, password} = req.body

    const hashPassowrd = await bcrypt.hash(password, 10)

    const user = new userModel({
        name: name,
        email: email,
        password: hashPassowrd
    })
    const insertUser = await userModel.create(user)
    console.log(insertUser)
    return insertUser
}



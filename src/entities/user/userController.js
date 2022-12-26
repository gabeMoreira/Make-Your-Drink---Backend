import userModel from './userModel.js'
import bcrypt from 'bcrypt'

export const getUsers = async (req, res) => {
    const findUsers = await userModel.find({})
    return findUsers
}

export const findById = async (req, res) => {
    try {
        const { id } = req.params
        const findUsers = await userModel.findById({ _id: id })
        return findUsers
    } catch (error) {
        return
    }
}

export const createUsers = async (req, res) => {
    const errors = []
    const { name, email, password } = req.body
    if (!name) {
        errors.push({ message: 'Nome precisa ser preenchido' })
    }
    if (!email) {
        errors.push({ message: 'Email precisa ser preenchido' })
    }
    if (!password) {
        errors.push({ message: 'Senha precisa ser preenchido' })
    }

    if (errors.length === 0) {
        const hashPassowrd = await bcrypt.hash(password, 10)
        const user = new userModel({
            name: name,
            email: email,
            password: hashPassowrd
        })
        const insertUser = await userModel.create(user)
        return {
            status: true,
            data: insertUser
        }
    }
    else {
        return {
            status: false,
            data: errors
        }
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params
    const { name, email } = req.body

    const user = {
        name,
        email
    }
    try {
        const updatedUser = await userModel.findByIdAndUpdate({ _id: id }, user)
        return updatedUser
    } catch (err) {
        return
    }

}



import userModel from './userModel.js'

export const getUsers = async (req, res) => {
    console.log('chegou 3')
    const findUsers = await userModel.find({})
    if(findUsers === 0) return false
    else findUsers
}

export const createUsers = async (req, res) => {
    return true
}



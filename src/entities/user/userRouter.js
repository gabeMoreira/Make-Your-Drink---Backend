import express from 'express'
const userRouter = express.Router()
import * as userController from './userController.js'



userRouter.route('/')
    .get((req, res) => {
        userController.getUsers(req, res)
        .then((data) => {
            if (data.length > 0) res.status(200).send({data: data})
            else res.status(200).send({message: 'Nenhum dado encontrado'})
        })
        .catch((error) => {
            res.status(200).send({error: error})
        })
        
    })
    .post((req, res) => {
        userController.createUsers(req, res)
        .then((data) => {
            res.status(201).send({message: 'User created', data: data})
        })
        .catch((error) => {
            res.send({message: error})
        })
    })
    .put((req, res) => {
        res.status(200).send({message: 'Rota de PUT criada com sucesso'})
    })
    .delete((req, res) => {
        res.status(200).send({message: 'Rota de DELETE criada com sucesso'})
    })

export default userRouter
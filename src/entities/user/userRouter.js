import express from 'express'
const userRouter = express.Router()
import * as userController from './userController.js'



userRouter.route('/')
    .get((req, res) => {
        userController.getUsers(req, res)
        .then((data) => {
            if (data) res.status(200).send({message: data})
            res.status(200).send({message: 'Nenhum dado encontrado'})
        })
        .catch((error) => {
            res.status(200).send({error: error})
        })
        
    })
    .post((req, res) => {
        res.status(200).send({message: 'Rota de POST criada com sucesso'})
    })
    .put((req, res) => {
        res.status(200).send({message: 'Rota de PUT criada com sucesso'})
    })
    .delete((req, res) => {
        res.status(200).send({message: 'Rota de DELETE criada com sucesso'})
    })

export default userRouter
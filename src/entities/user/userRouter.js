import express from 'express'
const userRouter = express.Router()
import * as userController from './userController.js'

userRouter.route('/').get((req, res) => {
    userController.getUsers(req, res)
        .then((data) => {
            if (data.length > 0) res.status(200).send({ data: data })
            else res.status(200).send({ message: 'Nenhum dado encontrado' })
        })
        .catch((error) => {
            res.status(200).send({ error: error })
        })

})

userRouter.route('/:id').get((req, res) => {
    userController.findById(req, res)
        .then((data) => {
            if (data) res.status(200).send({ data: data })
            else res.status(200).send({ message: 'Nenhum dado encontrado' })
        })
        .catch((error) => {
            res.status(200).send({ error: error })
        })

})

userRouter.route('/').post((req, res) => {
    userController.createUsers(req, res)
        .then((data) => {
            if (data.status) res.status(201).send({ message: 'Usuário criado', data: data.data })
            else res.status(400).send({ message: 'ERROR_FORM', data: data.data })
        })
        .catch((error) => {
            res.send({ message: error })
        })
})

userRouter.route('/:id').put((req, res) => {
    userController.updateUser(req, res)
        .then((data) => {
            if (data) res.status(200).send({ message: 'Usuário atualizado', data: data })
            else res.status(400).send({ message: 'Usuário não encontrado' })
        })
})

userRouter.route('/:id').delete((req, res) => {
    userController.deleteUsers(req, res)
        .then((data) => {
            if (data && data != undefined) {
                if (data.deletedCount == 1) res.status(200).send({ message: 'Usuário deletado com sucesso' })
                else res.status(400).send({ message: 'Usuário não encontrado' }) 
            } 
            else res.status(400).send({ message: 'Usuário não encontrado' })
        })
})

export default userRouter
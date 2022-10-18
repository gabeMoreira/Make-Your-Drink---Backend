import express from 'express'
const userRouter = express.Router()

userRouter.route('/')
    .get((req, res) => {
        res.status(200).send({message: 'Rota de GET criada com sucesso'})
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
import express from 'express'
const recipeRouter = express.Router()
import * as recipeController from './recipeController.js'

recipeRouter.route('/').get((req, res) => {
    recipeController.getRecipes(req, res)
        .then((data) => {
            if (data.length > 0) res.status(200).send({ data: data })
            else res.status(200).send({ message: 'Nenhum dado encontrado' })
        })
        .catch((error) => {
            res.status(200).send({ error: error })
        })

})

recipeRouter.route('/:id').get((req, res) => {
    recipeController.findById(req, res)
        .then((data) => {
            if (data) res.status(200).send({ data: data })
            else res.status(200).send({ message: 'Nenhum dado encontrado' })
        })
        .catch((error) => {
            res.status(200).send({ error: error })
        })

})

recipeRouter.route('/').post((req, res) => {
    recipeController.createRecipes(req, res)
        .then((data) => {
            if (data.status) res.status(201).send({ message: 'Produto criado', data: data.data })
            else res.status(400).send({ message: 'ERROR_FORM', data: data.data })
        })
        .catch((error) => {
            res.send({ message: error })
        })
})

recipeRouter.route('/:id').put((req, res) => {
    recipeController.updateRecipe(req, res)
        .then((data) => {
            console.log(data)
            if (data) res.status(200).send({ message: 'Produto atualizado', data: data })
            else res.status(400).send({ message: 'Produto não encontrado' })
        })
})

recipeRouter.route('/:id').delete((req, res) => {
    recipeController.deleteRecipe(req, res)
        .then((data) => {
            if (data && data != undefined) {
                if (data.deletedCount == 1) res.status(200).send({ message: 'Receita deletada com sucesso' })
                else res.status(400).send({ message: 'Receita não encontrada' })
            }
            else res.status(400).send({ message: 'Receita não encontrada' })
        })
})

export default recipeRouter
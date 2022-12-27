import express from 'express'
const productRouter = express.Router()
import * as productController from './productController.js'

productRouter.route('/').get((req, res) => {
    productController.getProducts(req, res)
        .then((data) => {
            if (data.length > 0) res.status(200).send({ data: data })
            else res.status(200).send({ message: 'Nenhum dado encontrado' })
        })
        .catch((error) => {
            res.status(200).send({ error: error })
        })

})

productRouter.route('/:id').get((req, res) => {
    productController.findById(req, res)
        .then((data) => {
            if (data) res.status(200).send({ data: data })
            else res.status(200).send({ message: 'Nenhum dado encontrado' })
        })
        .catch((error) => {
            res.status(200).send({ error: error })
        })

})

productRouter.route('/').post((req, res) => {
    productController.createProducts(req, res)
        .then((data) => {
            if (data.status) res.status(201).send({ message: 'Produto criado', data: data.data })
            else res.status(400).send({ message: 'ERROR_FORM', data: data.data })
        })
        .catch((error) => {
            res.send({ message: error })
        })
})

productRouter.route('/:id').put((req, res) => {
    productController.updateProduct(req, res)
        .then((data) => {
            if (data) res.status(200).send({ message: 'Produto atualizado', data: data })
            else res.status(400).send({ message: 'Produto não encontrado' })
        })
})

productRouter.route('/:id').delete((req, res) => {
    productController.deleteProduct(req, res)
        .then((data) => {
            if (data && data != undefined) {
                if (data.deletedCount == 1) res.status(200).send({ message: 'Produto deletado com sucesso' })
                else res.status(400).send({ message: 'Produto não encontrado' })
            }
            else res.status(400).send({ message: 'Produto não encontrado' })
        })
})

export default productRouter
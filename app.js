import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from './src/entities/user/userRouter.js'
import productRouter from './src/entities/product/productRouter.js'
import loginRouter from './src/routes/login.js'
import middleware from './src/middlewares/authentication.js'
const app = express()

//Application config
dotenv.config()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(middleware)

app.get('/', (req, res) => {
    res.status(200).send({ message: 'default route' })
})

//Application routes
app.use('/users', userRouter)
app.use('/login', loginRouter)
app.use('/products', productRouter)

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_STRING}`)
    .then(() => {
        console.log('Mongo connection started...')
        app.listen(process.env.PORT, () => {
            console.log(`Server on at port ${process.env.PORT}`)
        })
    })
    .catch(() => {
        console.log('Server não foi iniciado devido a um erro no mongo')
    })
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

const app = express()

dotenv.config()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({message: 'Rota criada com sucesso'})
})

mongoose
.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gwpmc.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Mongo connection started...')
    app.listen(process.env.PORT, () => {
        console.log(`Server on at port ${process.env.PORT}`)
    })
})
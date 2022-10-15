import dotenv from 'dotenv'
import express from 'express'

const app = express()

dotenv.config()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({message: 'Rota criada com sucesso'})
})


app.listen(process.env.PORT, () => {
    console.log('Rodando na porta 3000....')
})
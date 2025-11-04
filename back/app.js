const express = require('express')
const cors = require('cors')
const banco = require('./banco.js')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/buscar/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const receita = banco.ExportarReceita(id)
    res.send(receita)
})

app.listen(3000)
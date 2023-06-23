import express from 'express'
import routes from './routes.js'
import cors from 'cors'


const app = express()

// Indicar para o express ler body com json
app.use(express.json())

app.use(cors())

// Usar o Router
app.use(routes)

export default app;
import express from 'express'

import routes from './routes/index.mjs'

const app = express()

app.use(express.json())
app.use(routes)



app.listen(3000, () => { console.log('Online...')})
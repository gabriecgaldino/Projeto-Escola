import express from 'express'

import users from './users/users.mjs'

const routes = express()

routes.use(users)

routes.get('/', (request, response)=>{
    response.status(200).json({message: 'Bem vindo!'})
})

export default routes
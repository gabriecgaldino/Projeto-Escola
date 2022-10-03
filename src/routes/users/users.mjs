import express from 'express'

const users = express()

const Users = []

users.get('/users', (request, response)=> {
    response.json(Users)
    response.status(200).json({ message: 
        'Para cadastrar um novo usuário utilize a rota: /signupnewuser'
    })
})

users.post('/signupnewuser', (request, response)=> {
    const { name, email, office } = request.body

    // Cadastra novo usuário temporáriamente.

    try {
        var newUser = {
            name,
            email,
            office
        }
        Users.push(newUser)

        response.status(202).json({ message: 'Usuário cadastrado!'})
    } catch (error) { response.json({ message: 'Faltam dados, verifique o corpo da requisição e tente novamente!'})}
})



export default users
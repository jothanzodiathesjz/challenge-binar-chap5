const { Router } = require('express')
const express = require('express')
const Routes = express.Router()

let dataUser = { username: "naruto", password: "123123", token: "adafcanfannas" };


Routes.get('/', function (request, response) {
    response.render('index')
})
Routes.get('/games', function (request, response) {
    response.render('games')
})


Routes.get('/login', (req, res) => {
     res.render('login')
})
 
Routes.post('/login', (req, res) => {
    let requestData = req.body
    if (requestData.username === dataUser.username) {
        if (requestData.password === dataUser.password) {
            res.send({
                message: 'login successfull',
                resultData: dataUser,
                statusCode: 200
            })
        } else {
            res.send({message: 'login failed, wrong password'})
        }
    } else {
        res.send({ message: 'login failed, wrong username' })
    }
})


module.exports = Routes
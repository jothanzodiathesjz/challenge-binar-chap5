const express = require('express')
const app = express()
const port = 7000
const morgan = require('morgan')


// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use('/public',express.static('public')); 
app.set('view engine', 'ejs')
app.listen(port, function () {
    console.log(`server is running in port: ${port}`)
})

// errhandler
app.use(function (err, req, res, next) {
    console.log(err)
    res.sendStatus(500).json({
        status: fail,
        errors: err.massage
    })
})

const Routes = require('./routes/route')
app.use(Routes)
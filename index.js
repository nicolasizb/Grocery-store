const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')
const connection = require('./config/db.js')

const app = express();

function serverInit() {
    try {
        connection.sync({ force: false })        
    } catch(error) {
        console.log(error.message)
        // Stop development
        return
    }

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(router)

    app.listen(3400)
    console.log("Server on line Cloud")
}

serverInit()
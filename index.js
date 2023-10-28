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

    const port = process.env.PORT || 3000;
    app.listen(port, "0.0.0.0", function () {
      // ...
    });
    console.log("Server on line Cloud")
}

serverInit()
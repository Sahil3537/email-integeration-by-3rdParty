const express = require('express')
const app = express()
const port = 3000
const db= require('./db/db')
const emailRoutes = require('./routes/routes');


db()

app.use(express.urlencoded({ extended: true }));

app.use(express.json())


app.use(`/api`, emailRoutes)






app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})
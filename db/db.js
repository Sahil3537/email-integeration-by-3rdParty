const mongoose = require('mongoose')
require(`dotenv`).config()



const connection = ()=>{
    const connections = mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
}).then(()=>{
    console.log(`db connnection running perfect ` )
})
.catch((err)=>{
    console.log(`error while connecting with server `, err.message)
})
}

module.exports = connection;
const axios = require('axios');
const { model } = require('mongoose');
require('dotenv').config();

const emailClient = axios.create({
    baseURL:`https://api.elasticemail.com/v2/`,
    params:{
        apiKey:process.env.API_KEY
    }
})

module.exports =  emailClient;
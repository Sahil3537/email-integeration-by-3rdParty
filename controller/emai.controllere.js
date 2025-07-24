const { response } = require('express');
const elasticClient = require('../utils/utils');
require('dotenv').config();

exports.sendEmail = async (req, res)=>{
    try{
        const {to, subject , body}= req.body;
         
if (!to || !subject || !body) {
    return res.status(400).json({ message: 'Missing fields: to, subject, or body' });
  }

  const response = await elasticClient.get(`email/send`, {
    params:{
        apiKey:process.env.API_KEY,
        from:process.env.EMAIL,
        fromName:`naxtre`, 
    to, 
    subject,
     body
    }
  })

         

  if(response.data.success ){
       res.status(200).json({ message: '✅ Email sent successfully' , result:response.data});
    } else {
      res.status(500).json({ message: '❌ Email failed', details: response.data.error });
    
  }
    }
    catch(Err){
        return res.status(500).json({message:`Internal server error`, error:Err.message})
    }
}


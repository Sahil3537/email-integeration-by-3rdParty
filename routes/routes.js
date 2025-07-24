const express = require('express');
const sendEmail = require('../controller/emai.controllere');
const router = express.Router();
const handleWebHook = require('../controller/webhooks');

router.post('/send', sendEmail.sendEmail);

router.post('/test', handleWebHook.handleElasticWebhook);

module.exports = router;

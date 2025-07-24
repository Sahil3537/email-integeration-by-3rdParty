const express = require('express');
const sendEmail = require('../controller/emai.controllere');
const router = express.Router();
const handleWebHook = require('../controller/webhooks');

router.post('/send', sendEmail.sendEmail);


// 👇 Accept GET and POST for Elastic's test
router.route('/test')
  .get((req, res) => res.status(200).send('✅ GET Webhook Test OK'))
  .post(handleWebHook.handleElasticWebhook);

module.exports = router;

module.exports = router;

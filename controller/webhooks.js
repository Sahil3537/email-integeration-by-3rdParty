const handleElasticWebhook = (req, res) => {
  const event = req.body;

  console.log('📩 Webhook received:', JSON.stringify(event, null, 2));

  // TODO: Save event in MongoDB or handle automation

  res.status(200).send('Webhook received');
};

module.exports = { handleElasticWebhook };

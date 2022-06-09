const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const onInboundCall = (request, response) => {
    const ncco = [{
    action: 'connect',
      from: 18571235555, // Replace with CLI you'd want to display on VBC
  
      endpoint: [{
        type: 'vbc',
        extension: 914889 // Replace with extension in VBC
        
      }]
    }]
  
    response.json(ncco)
    console.log(ncco);
  }
  
  app.get('/webhooks/answer', onInboundCall)
  app.post('/webhooks/events', (req, res) => {
    console.log(req.body);
  });
  
  app.listen(3000)
  

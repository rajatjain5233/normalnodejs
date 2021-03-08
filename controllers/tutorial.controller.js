const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;


const request = require('request')
var plivo = require('plivo');
var PhloClient = plivo.PhloClient;

var authId = 'MAMJFHYWRINZRMZTE5NZ';
var authToken = 'NzQzOGMzNjU1MTlkNDg4MDZhYTQzYTNhOGU5MWUy';
var phloId = '07203f26-71b8-47f0-ad22-715a49288cde';
var phloClient = phlo = null;



phloClient = new PhloClient(authId, authToken);


exports.createCall = (req, res) => {
  // console.log("reqreqreqreqreq",req.body)
  let from=req.body.from;
  let to=req.body.to;
  var payload = {
  };
  payload.from=from;
  payload.to=to;
  console.log(payload);


 
  phloClient.phlo(phloId).run(payload).then(function (result) {
      console.log('Phlo run result', result);
      let data={
      };
      data.result=result;
      res.send(data);
  }).catch(function (err) {
      console.error('Phlo run failed', err);
  });
};

exports.dropCall = (req, res) => {
    // console.log("reqreqreqreqreq",req.body)

    // let url="https://api.plivo.com/v1/Account/";
    // url=url+"MAMJFHYWRINZRMZTE5NZ";
    // url=url+"/Call/";
    // url=url+req.body.call_uuid;
    // // const username = 'username',
    // //     password = 'password',
    // //     url = 'http://' + username + ':' + password + '@some.server.com';
    // const options = {
    //   url: 'https://api.plivo.com/v1/Account/MAMJFHYWRINZRMZTE5NZ/Call/'+req.body.call_uuid,
    //   user:'MAMJFHYWRINZRMZTE5NZ:NzQzOGMzNjU1MTlkNDg4MDZhYTQzYTNhOGU5MWUy',
    //   // Content-Type: 'application/json'
    // };

    // request.delete(options,(response)=>{
    //   console.log(response);

    // })



    // const options = {
    //   path: url,
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }

    // const req = https.request(options, (res) => {
    //   console.log(`statusCode: ${res.statusCode}`)

    //   res.on('data', (d) => {
    //     process.stdout.write(d)
    //   })
    // })

    var options = { 
      method: 'DELETE',
      url: 'https://api.plivo.com/v1/Account/MAMJFHYWRINZRMZTE5NZ/Call/'+req.body.call_uuid,
      qs: 
        {  
          authId: 'MAMJFHYWRINZRMZTE5NZ',
          authToken: 'NzQzOGMzNjU1MTlkNDg4MDZhYTQzYTNhOGU5MWUy' 
        },
        headers: 
        { 'cache-control': 'no-cache',
           Connection: 'keep-alive',
           'Content-Length': '0',
           'Accept-Encoding': 'gzip, deflate',
           Host: 'api.plivo.com',
           'Postman-Token': 'd3521a93-dbeb-40ee-8687-38248c1489a4,8daa1989-7cc1-4119-ac51-3fd74d4add85',
           'Cache-Control': 'no-cache',
           Accept: '*/*',
           'User-Agent': 'PostmanRuntime/7.18.0',
           Authorization: 'Basic TUFNSkZIWVdSSU5aUk1aVEU1Tlo6TnpRek9HTXpOalUxTVRsa05EZzRNRFpoWVRRellUTmhPR1U1TVdVeQ==',
           'Content-Type': 'application/json' 
        } 
     };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

         console.log(response,body);
         let data={
         };
         data.statusCode=response.statusCode;
         res.send(data);
    });
  

};



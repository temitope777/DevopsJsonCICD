
const client = {   
    url: '',
    password: '',
    username: '',
    wsdlparam: '',
    domain: '',
   // params: {},
    callmicro: function () {
        var xmlSource = require('./ipsXml')
        console.log('got xml',xmlSource.xml)
        let xml = xmlSource.xml
       
        var options = {
            url: 'http://ws.interfax.net/dfs.asmx?wsdl',
            method: 'POST',
            body: xml,
            host:'ws.interfax.net',
            headers: {
              'Content-Type':'text/xml;charset=utf-8',   
              'Content-Length':xml.length,
              'SOAPAction':"http://www.interfax.cc/GetAllErrorCodes"
            }
          };
        return new Promise((resolve, reject) => {
            //console.log('Request is made with these params:', JSON.stringify(params));
            const request = require('request');
           
            let callback = (error, response, body) => {
                console.log('cps came back from call'); 
                if (error) {
                    console.log('Error due to authentication configuration--->' + err)
                    reject({
                        status: 403,
                        message: "Error due to authentication configuration!" + "|Error Details:" + err,
                        data: []
                    })
                }
                else
                {
                    const fs = require('fs')

                    if (error === null && (response !== null || response !== undefined)) {
                        console.log('processing data returned', body);
                        var xml2js = require('xml2js');
                        var parser = new xml2js.Parser({explicitArray: false, trim: true});
                        parser.parseString(body, (err, result) => {
                          const util = require('util')
                          let output = util.inspect(result, false, null)
                          //let pp =result.soap:Envelope.soap:Body']['GetAllErrorCodesResponse']['GetAllErrorCodesResult']  
                          let parsedOutput =result['soap:Envelope']['soap:Body']
                          var json = JSON.stringify(parsedOutput)
                          var parsed = JSON.parse(json)
                          console.log('json output',parsed.GetAllErrorCodesResponse.GetAllErrorCodesResult )

                          resolve({
                            status: 200,
                            message: "Ok",
                            data: parsed.GetAllErrorCodesResponse.GetAllErrorCodesResult
                        })
                        });
                       
                    } else {
                        reject({
                            status: 500,
                            message: "No data returned from IPS web service, may not be active" + "|Error Details:" + err,
                            data: []
                        })
                    }

                } 
                
                console.log('E', response.statusCode, response.statusMessage);  
                console.log('------End of cps process-----');  
              };
              request(options, callback);
       
        }).catch((error) => {
            return {
                status: error.status,
                message: error.message,
                data: error.data
            }
        })

    }   
}

module.exports = {
    client: client
}
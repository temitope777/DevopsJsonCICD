var ipsXml = {}
    
ipsXml.xml= `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
<soap:Body>
  <GetAllErrorCodes xmlns="http://www.interfax.cc" />
</soap:Body>
</soap:Envelope>`


module.exports = ipsXml;
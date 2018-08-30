var ppsXml = {}
    
ppsXml.xml= `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
<soap:Body>
  <GetPortalSearchInfo xmlns="http://microsoft.com/webservices/OfficeServer/QueryService" />
</soap:Body>
</soap:Envelope>`
ppsXml.host = 'webapps.worldbank.org'
module.exports = ppsXml;
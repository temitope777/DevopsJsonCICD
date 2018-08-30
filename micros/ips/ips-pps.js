const ppsclient = require('../../lib/pps-client').ppsclient
function isempty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false
  }
  return true
}
function getipspps(req, res, next) {

  





  let clients = {}
  let params = {}
  // clients.url = process.env.PPS_URL
  // clients.password = process.env.PPS_PASSWORD
  // clients.username = process.env.PPS_USER
  // clients.wsdlparam = 'ips'
  // clients.domain = 'BP1'
  // params.refinery = req.params.refineryid
  // clients.params = params
  ppsclient.callmicro.call(clients).then((response) => {
    let data = []
    let finaloutput = {
      assetdetails: [],
      status: response.status,
      errormessage: response.message,
    }
    if (response.status === 200 && response.data !== undefined ) {
      data = response.data.PPS_x0020_Asset_x0020_Details.map((item) => {
       return {
       
        ProductName: !isempty( item.ProductName) && item.ProductName !== undefined && item.ProductName !== null && item.ProductName !== '' ? item.ProductName : '',
      /*   MarkerName: !isempty( item.MarkerName) && item.MarkerName !== undefined && item.MarkerName !== null && item.MarkerName !== '' ? item.MarkerName : '',
        UOM: !isempty( item.UOM) && item.UOM !== undefined && item.UOM !== null && item.UOM !== '' ? item.UOM : '',
        MarkerPriceM1: !isempty(item.MarkerPriceM1) && item.MarkerPriceM1 !== undefined && item.MarkerPriceM1 !== null && item.MarkerPriceM1 !== '' ? item.MarkerPriceM1 : '',
        MarkerPriceM2: !isempty(item.MarkerPriceM2) && item.MarkerPriceM2 !== undefined && item.MarkerPriceM2 !== null && item.MarkerPriceM2 !== '' ? item.MarkerPriceM2 : '',
        MarkerPriceM3: !isempty(item.MarkerPriceM3) && item.MarkerPriceM3 !== undefined && item.MarkerPriceM3 !== null && item.MarkerPriceM3 !== '' ? item.MarkerPriceM3 : '',
        MarkerPriceM4: !isempty(item.MarkerPriceM4) && item.MarkerPriceM4 !== undefined && item.MarkerPriceM4 !== null && item.MarkerPriceM4 !== '' ? item.MarkerPriceM4 : '',
        DiffM1: !isempty(item.DiffM1) && item.DiffM1 !== undefined && item.DiffM1 !== null && item.DiffM1 !== '' ? item.DiffM1 : '',
        DiffM2: !isempty(item.DiffM2) && item.DiffM2 !== undefined && item.DiffM2 !== null && item.DiffM2 !== '' ? item.DiffM2 : '',
        DiffM3: !isempty(item.DiffM3) && item.DiffM3 !== undefined && item.DiffM3 !== null && item.DiffM3 !== '' ? item.DiffM3 : '',
        DiffM4: !isempty(item.DiffM4) && item.DiffM4 !== undefined && item.DiffM4 !== null && item.DiffM4 !== '' ? item.DiffM4 : '',
        WorkingCapitalCostSellM1: !isempty(item.WorkingCapitalCostSellM1) && item.WorkingCapitalCostSellM1 !== undefined && item.WorkingCapitalCostSellM1 !== null && item.WorkingCapitalCostSellM1 !== '' ? item.WorkingCapitalCostSellM1 : '',
        WorkingCapitalCostSellM2: !isempty(item.WorkingCapitalCostSellM2) && item.WorkingCapitalCostSellM2 !== undefined && item.WorkingCapitalCostSellM2 !== null && item.WorkingCapitalCostSellM2 !== '' ? item.WorkingCapitalCostSellM2 : '',
        WorkingCapitalCostSellM3: !isempty(item.WorkingCapitalCostSellM3) && item.WorkingCapitalCostSellM3 !== undefined && item.WorkingCapitalCostSellM3 !== null && item.WorkingCapitalCostSellM3 !== '' ? item.WorkingCapitalCostSellM3 : '',
        WorkingCapitalCostSellM4: !isempty(item.WorkingCapitalCostSellM4) && item.WorkingCapitalCostSellM4 !== undefined && item.WorkingCapitalCostSellM4 !== null && item.WorkingCapitalCostSellM4 !== '' ? item.WorkingCapitalCostSellM4 : '',
        WorkingCapitalCostBuyM1: !isempty(item.WorkingCapitalCostBuyM1) && item.WorkingCapitalCostBuyM1 !== undefined && item.WorkingCapitalCostBuyM1 !== null && item.WorkingCapitalCostBuyM1 !== '' ? item.WorkingCapitalCostBuyM1 : '',
        WorkingCapitalCostBuyM2: !isempty(item.WorkingCapitalCostBuyM2) && item.WorkingCapitalCostBuyM2 !== undefined && item.WorkingCapitalCostBuyM2 !== null && item.WorkingCapitalCostBuyM2 !== '' ? item.WorkingCapitalCostBuyM2 : '',
        WorkingCapitalCostBuyM3: !isempty(item.WorkingCapitalCostBuyM3) && item.WorkingCapitalCostBuyM3 !== undefined && item.WorkingCapitalCostBuyM3 !== null && item.WorkingCapitalCostBuyM3 !== '' ? item.WorkingCapitalCostBuyM3 : '',
        WorkingCapitalCostBuyM4: !isempty(item.WorkingCapitalCostBuyM4) && item.WorkingCapitalCostBuyM4 !== undefined && item.WorkingCapitalCostBuyM4 !== null && item.WorkingCapitalCostBuyM4 !== '' ? item.WorkingCapitalCostBuyM4 : '',
        FreightBuyM1: !isempty(item.FreightBuyM1) && item.FreightBuyM1 !== undefined && item.FreightBuyM1 !== null && item.FreightBuyM1 !== '' ? item.FreightBuyM1 : '',
        FreightBuyM2: !isempty(item.FreightBuyM2) && item.FreightBuyM2 !== undefined && item.FreightBuyM2 !== null && item.FreightBuyM2 !== '' ? item.FreightBuyM2 : '',
        FreightBuyM3: !isempty(item.FreightBuyM3) && item.FreightBuyM3 !== undefined && item.FreightBuyM3 !== null && item.FreightBuyM3 !== '' ? item.FreightBuyM3 : '',
        FreightBuyM4: !isempty(item.FreightBuyM4) && item.FreightBuyM4 !== undefined && item.FreightBuyM4 !== null && item.FreightBuyM4 !== '' ? item.FreightBuyM4 : '',
        FreightSellM1: !isempty(item.FreightSellM1) && item.FreightSellM1 !== undefined && item.FreightSellM1 !== null && item.FreightBuyM1 !== '' ? item.FreightSellM1 : '',
        FreightSellM2: !isempty(item.FreightSellM2) && item.FreightSellM2 !== undefined && item.FreightSellM2 !== null && item.FreightSellM2 !== '' ? item.FreightSellM2 : '',
        FreightSellM3: !isempty(item.FreightSellM3) && item.FreightSellM3 !== undefined && item.FreightSellM3 !== null && item.FreightBuyM3 !== '' ? item.FreightSellM3 : '',
        FreightSellM4: !isempty(item.FreightSellM4) && item.FreightSellM4 !== undefined && item.FreightSellM4 !== null && item.FreightSellM4 !== '' ? item.FreightSellM4 : '',
        PipelineBuy: !isempty(item.PipelineBuy) && item.PipelineBuy !== undefined && item.PipelineBuy !== null && item.PipelineBuy !== '' ? item.PipelineBuy : '',
        PipelineSell: !isempty(item.PipelineSell) && item.PipelineSell !== undefined && item.PipelineSell !== null && item.PipelineSell !== '' ? item.PipelineSell : '',
        PipelineSellCPG: !isempty(item.PipelineSellCPG) && item.PipelineSellCPG !== undefined && item.PipelineSellCPG !== null && item.PipelineSellCPG !== '' ? item.PipelineSellCPG : '',
        PipelineBuyCPG: !isempty(item.PipelineBuyCPG) && item.PipelineBuyCPG !== undefined && item.PipelineBuyCPG !== null && item.PipelineBuyCPG !== '' ? item.PipelineBuyCPG : '',
        TransBuyM1: !isempty(item.TransBuyM1) && item.TransBuyM1 !== undefined && item.TransBuyM1 !== null && item.TransBuyM1 !== '' ? item.TransBuyM1 : '',
        TransBuyM2: !isempty(item.TransBuyM2) && item.TransBuyM2 !== undefined && item.TransBuyM2 !== null && item.TransBuyM2 !== '' ? item.TransBuyM2 : '',
        TransBuyM3: !isempty(item.TransBuyM3) && item.TransBuyM3 !== undefined && item.TransBuyM3 !== null && item.TransBuyM3 !== '' ? item.TransBuyM3 : '',
        TransBuyM4: !isempty(item.TransBuyM4) && item.TransBuyM4 !== undefined && item.TransBuyM4 !== null && item.TransBuyM4 !== '' ? item.TransBuyM4 : '',
        TransSellM1: !isempty(item.TransSellM1) && item.TransSellM1 !== undefined && item.TransSellM1 !== null && item.TransSellM1 !== '' ? item.TransSellM1 : '',
        TransSellM2: !isempty(item.TransSellM2) && item.TransSellM2 !== undefined && item.TransSellM2 !== null && item.TransSellM2 !== '' ? item.TransSellM2 : '',
        TransSellM3: !isempty(item.TransSellM3) && item.TransSellM3 !== undefined && item.TransSellM3 !== null && item.TransSellM3 !== '' ? item.TransSellM3 : '',
        TransSellM4: !isempty(item.TransSellM4) && item.TransSellM4 !== undefined && item.TransSellM4 !== null && item.TransSellM4 !== '' ? item.TransSellM4 : '',
        RVOM1: !isempty(item.RVOM1) && item.RVOM1 !== undefined && item.RVOM1 !== null && item.RVOM1 !== '' ? item.RVOM1 : '',
        RVOM2: !isempty(item.RVOM2) && item.RVOM2 !== undefined && item.RVOM2 !== null && item.RVOM2 !== '' ? item.RVOM2 : '',
        RVOM3: !isempty(item.RVOM3) && item.RVOM3 !== undefined && item.RVOM3 !== null && item.RVOM3 !== '' ? item.RVOM3 : '',
        RVOM4: !isempty(item.RVOM4) && item.RVOM4 !== undefined && item.RVOM4 !== null && item.RVOM4 !== '' ? item.RVOM4 : '',
        TotalBuyLPFeesM1: !isempty(item.TotalBuyLPFeesM1) && item.TotalBuyLPFeesM1 !== undefined && item.TotalBuyLPFeesM1 !== null && item.TotalBuyLPFeesM1 !== '' ? item.TotalBuyLPFeesM1 : '',
        TotalBuyLPFeesM2: !isempty(item.TotalBuyLPFeesM2) && item.TotalBuyLPFeesM2 !== undefined && item.TotalBuyLPFeesM2 !== null && item.TotalBuyLPFeesM2 !== '' ? item.TotalBuyLPFeesM2 : '',
        TotalBuyLPFeesM3: !isempty(item.TotalBuyLPFeesM3) && item.TotalBuyLPFeesM3 !== undefined && item.TotalBuyLPFeesM3 !== null && item.TotalBuyLPFeesM3 !== '' ? item.TotalBuyLPFeesM3 : '',
        TotalBuyLPFeesM4: !isempty(item.TotalBuyLPFeesM4) && item.TotalBuyLPFeesM4 !== undefined && item.TotalBuyLPFeesM4 !== null && item.TotalBuyLPFeesM4 !== '' ? item.TotalBuyLPFeesM4 : '',
        TotalSellLPFeesM1: !isempty(item.TotalSellLPFeesM1) && item.TotalSellLPFeesM1 !== undefined && item.TotalSellLPFeesM1 !== null && item.TotalSellLPFeesM1 !== '' ? item.TotalSellLPFeesM1 : '',
        TotalSellLPFeesM2: !isempty(item.TotalSellLPFeesM2) && item.TotalSellLPFeesM2 !== undefined && item.TotalSellLPFeesM2 !== null && item.TotalSellLPFeesM2 !== '' ? item.TotalSellLPFeesM2 : '',
        TotalSellLPFeesM3: !isempty(item.TotalSellLPFeesM3) && item.TotalSellLPFeesM3 !== undefined && item.TotalSellLPFeesM3 !== null && item.TotalSellLPFeesM3 !== '' ? item.TotalSellLPFeesM3 : '',
        TotalSellLPFeesM4: !isempty(item.TotalSellLPFeesM4) && item.TotalSellLPFeesM4 !== undefined && item.TotalSellLPFeesM4 !== null && item.TotalSellLPFeesM4 !== '' ? item.TotalSellLPFeesM4 : '',
        DeliveredBuyPriceM1: !isempty(item.DeliveredBuyPriceM1) && item.DeliveredBuyPriceM1 !== undefined && item.DeliveredBuyPriceM1 !== null && item.DeliveredBuyPriceM1 !== '' ? item.DeliveredBuyPriceM1 : '',
        DeliveredBuyPriceM2: !isempty(item.DeliveredBuyPriceM2) && item.DeliveredBuyPriceM2 !== undefined && item.DeliveredBuyPriceM2 !== null && item.DeliveredBuyPriceM2 !== '' ? item.DeliveredBuyPriceM2 : '',
        DeliveredBuyPriceM3: !isempty(item.DeliveredBuyPriceM3) && item.DeliveredBuyPriceM3 !== undefined && item.DeliveredBuyPriceM3 !== null && item.DeliveredBuyPriceM3 !== '' ? item.DeliveredBuyPriceM3 : '',
        DeliveredBuyPriceM4: !isempty(item.DeliveredBuyPriceM4) && item.DeliveredBuyPriceM4 !== undefined && item.DeliveredBuyPriceM4 !== null && item.DeliveredBuyPriceM4 !== '' ? item.DeliveredBuyPriceM4 : '', 
        DeliveredSellPriceM1: !isempty(item.DeliveredSellPriceM1) && item.DeliveredSellPriceM1 !== undefined && item.DeliveredSellPriceM1 !== null && item.DeliveredSellPriceM1 !== '' ? item.DeliveredSellPriceM1 : '',
        DeliveredSellPriceM2: !isempty(item.DeliveredSellPriceM2) && item.DeliveredSellPriceM2 !== undefined && item.DeliveredSellPriceM2 !== null && item.DeliveredSellPriceM2 !== '' ? item.DeliveredSellPriceM2 : '',
        DeliveredSellPriceM3: !isempty(item.DeliveredSellPriceM3) && item.DeliveredSellPriceM3 !== undefined && item.DeliveredSellPriceM3 !== null && item.DeliveredSellPriceM3 !== '' ? item.DeliveredSellPriceM3 : '',
        DeliveredSellPriceM4: !isempty(item.DeliveredSellPriceM4) && item.DeliveredSellPriceM4 !== undefined && item.DeliveredSellPriceM4 !== null && item.DeliveredSellPriceM4 !== '' ? item.DeliveredSellPriceM4 : '',  
    */
    }

     }) 
     finaloutput.assetdetails = data
   }

    res.send(finaloutput)
  }) 
}

module.exports = {
    getipspps: getipspps
}
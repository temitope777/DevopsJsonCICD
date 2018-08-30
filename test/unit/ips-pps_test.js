const URLMOCK = process.env.IPS_SERVICE || 'http://localhost:8080'
const request = require('supertest')(URLMOCK)
const nock = require('nock')
const {
    expect,
    assert,
    should
} = require('chai')
const sho = require('should')
const {
    checkURL,
    decrypt,
    calculatedays
} = require('../../lib/common')
const mapping = [
    'assetdetails',
    'status',
    'errormessage'
]
const properties = [
    'ProductName',
        'MarkerName',
        'UOM',
        'MarkerPriceM1',
        'MarkerPriceM2',
        'MarkerPriceM3',
        'MarkerPriceM4',
        'DiffM1',
        'DiffM2',
        'DiffM3',
        'DiffM4',
        'WorkingCapitalCostSellM1',
        'WorkingCapitalCostSellM2',
        'WorkingCapitalCostSellM3',
        'WorkingCapitalCostSellM4',
        'WorkingCapitalCostBuyM1',
        'WorkingCapitalCostBuyM2',
        'WorkingCapitalCostBuyM3',
        'WorkingCapitalCostBuyM4',
        'FreightBuyM1',
        'FreightBuyM2',
        'FreightBuyM3',
        'FreightBuyM4',
        'FreightSellM1',
        'FreightSellM2',
        'FreightSellM3',
        'FreightSellM4',
        'PipelineBuy',
        'PipelineSell',
        'PipelineSellCPG',
        'PipelineBuyCPG',
        'TransBuyM1',
        'TransBuyM2',
        'TransBuyM3',
        'TransBuyM4',
        'TransSellM1',
        'TransSellM2',
        'TransSellM3',
        'TransSellM4',
        'RVOM1',
        'RVOM2',
        'RVOM3',
        'RVOM4',
        'TotalBuyLPFeesM1',
        'TotalBuyLPFeesM2',
        'TotalBuyLPFeesM3',
        'TotalBuyLPFeesM4',      
        'TotalSellLPFeesM1',
        'TotalSellLPFeesM2',
        'TotalSellLPFeesM3',
        'TotalSellLPFeesM4',
        'DeliveredBuyPriceM1',
        'DeliveredBuyPriceM2',
        'DeliveredBuyPriceM3',
        'DeliveredBuyPriceM4',
        'DeliveredSellPriceM1',
        'DeliveredSellPriceM2',
        'DeliveredSellPriceM3',
        'DeliveredSellPriceM4',  
    
]
const chai = require('chai')
chai.use(require('chai-http'))

const {
    app
} = require('../../application.js')
describe("Testing PPS webservice", function () {
    //process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
    it('/ should return Service is active', function () {
        return chai.request(app)
            .get('/')
            .then(function (res) {
                assert.deepEqual(res.text, 'Service is active')
            })
    })
    it('ipstoken should always return encrypted token', function () {
        return chai.request(app)
            .get('/ipstoken')
            .then(function (res) {
                assert.isNotEmpty(res.text, 'token')
            })
    })
    it('responds to /api/ips/pps/:refineryid with arrays of objects', (done) => {
        const ipsmockdata = require('./ips-pps-mock')
        nock(URLMOCK)
            .get('/api/ips/pps/1')
            .reply(200, ipsmockdata)
        request
            .get('/api/ips/pps/1')
            .expect(200)
            .end(function (err, res) {
                assert.deepEqual(Object.keys(res.body), mapping)
                done()
            })
    })
    it('responds to /api/ips/pps/:refineryid returned assetdetails array object', (done) => {
        const ipsmockdata = require('./ips-pps-mock')
        nock(URLMOCK)
            .get('/api/ips/pps/1')
            .reply(200, ipsmockdata)
        request
            .get('/api/ips/pps/1')
            .expect(200)
            .end(function (err, res) {
                assert.isArray(res.body.assetdetails)
                done()
            })
    })
    
    it('responds to /api/ips/pps/:refineryid returned valid properties', (done) => {
        const ipsmockdata = require('./ips-pps-mock')
        nock(URLMOCK)
            .get('/api/ips/pps/1')
            .reply(200, ipsmockdata)
        request
            .get('/api/ips/pps/1')
            .expect(200)
            .end(function (err, res) {
                assert.deepEqual(Object.keys(res.body.assetdetails[0]), properties)
                done()
            })
    })
    it('check URL method', () => {
        assert.isFunction(checkURL, 'should be defined')
    })
    it('check URL return 0 if not URL supplied', () => {
        let output = checkURL('')
        assert.equal(output, 0)
    })
    
});
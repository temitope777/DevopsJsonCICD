const {
  getcpsdata
} = require('./ips')

const {
  getipspps
} = require('./ips-pps')
module.exports = Object.assign({}, {
  getcpsdata, getipspps
})
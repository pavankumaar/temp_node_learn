const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime
console.log(`system uptime is ${os.uptime()} hours`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOs)

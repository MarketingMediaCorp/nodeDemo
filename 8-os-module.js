const os = require("os")
const { type } = require("os")


//information about the user
const user = os.userInfo()
console.log(user)

//method returns the system uptime
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)
const os = require('os')

// info about the current user

const data = os.userInfo()
console.log(data)

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS ={
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    extra : os.machine()
}

console.log(currentOS);
const os = require("os");

// info about current user

const user = os.userInfo();

// method return the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`);

// method return the system uptime in minutes

console.log(`The System Uptime is ${os.uptime() / 3600} minutes`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOS);

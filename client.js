// connect function from snake

const net = require("net");
const { IP, PORT } = require("./constants");

console.log(IP);
console.log(PORT);


const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // set data encoder
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('You have connected to the server');
    conn.write("Name: GJD");

   
});

  

    conn.on("data", (data) => {
    console.log(data);
  });
conn.on("close", process.exit);


  return conn;
};



module.exports = {
  connect
  };
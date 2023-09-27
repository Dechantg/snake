// connect function from snake

const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
  });

  // set data encoder
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('You have connected to the server');
  });

  conn.on("data", (data) => {
    console.log(data);
  });



  return connect;
};



module.exports = {
  connect
  };

// play file for the snake exercise on lighthouselabs

// const net = require("net");
const { connect } = require("./client");

// connect to game server

console.log("connecting ... ");

connect();


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

stdin.on("data", handleUserInput);

const handleUserInput = (stdin) => {
  if (stdin === "w") conn.write("Move: up");
  if (stdin === "s") conn.write("Move: down");
  if (stdin === "d") conn.write("Move: right");
  if (stdin === "a") conn.write("Move: left"); 
  


};


// conn.on("connect", () => {
//   console.log('You have connected to the server');
// });



// play file for the snake exercise on lighthouselabs

// const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

// connect to game server

console.log("connecting ... ");

connect();



setupInput();



// conn.on("connect", () => {
//   console.log('You have connected to the server');
// });



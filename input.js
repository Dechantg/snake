

const handleUserInput = (stdin, conn) => {
  if (stdin === "w") {
    conn.write("Move: up");
  }
  if (stdin === "s") {
    conn.write("Move: down");
  }
  if (stdin === "d") {
    conn.write("Move: right");
  }
  if (stdin === "a") {
    conn.write("Move: left");
  }
  if (stdin === "g") {
    conn.write("Say: GG");
  }
  if (stdin === "f") {
    conn.write("Say: f for respect");
  }
  if (stdin === "n") {
    conn.write("Say: NOOOOO ;(");
  }
  // if (stdin === "w") console.log("Move: up");;
  // if (stdin === "s") console.log("Move: down");
  // if (stdin === "d") console.log("Move: right");
  // if (stdin === "a") console.log("Move: left");
  
};

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key, connection);
  });
};



module.exports = {
  setupInput
};


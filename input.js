

const handleUserInput = (stdin) => {
  if (stdin === "w") conn.write("Move: up");
  if (stdin === "s") conn.write("Move: down");
  if (stdin === "d") conn.write("Move: right");
  if (stdin === "a") conn.write("Move: left"); 
  
};


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

stdin.on("data", handleUserInput);

module.exports = {
  setupInput
  };

  
import pandoa from "./index.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("type exit to exit inter.js.");
function pI() {
  rl.question("pandoa> ", (input) => {
    if (input.toLowerCase() === "exit") {
      rl.close();
    } else {
      const oC = pandoa.closure(input);
      console.log(oC);
      pI();
    }
  });
}

pI();

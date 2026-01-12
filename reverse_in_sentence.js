// Reverse Words in a Sentence
// Input: "Java is fun" → Output: "fun is Java"

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a sentence: ", function(sentence) {
  const reversed = sentence.split(" ").reverse().join(" ");
  console.log("Reversed sentence:", reversed);
  rl.close();
});

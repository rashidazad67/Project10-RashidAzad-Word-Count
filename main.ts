import inquirer from "inquirer"; 

//Display Welcome message
console.log("\n \t\t Rashid Azad Word Counter App.");
console.log("=".repeat(50));

// Prompt to the user to write sentence(s).

let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Write a sentenc:",
    
    }
]);

// Triming the sentence and splitting it into words based on spaces.

let words = answer.sentence.trim().split(" ");

//Analysis of user input sentenc.

console.log("=".repeat(50));
console.log("-Sentence Words:");
console.log(words);
console.log(`\n - Words Count: ${words.length}`);
console.log("=".repeat(50));

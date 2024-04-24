#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.magenta("\n \t Welcome to word counter Application \n "));
const count = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: " Enter your sentence to count the word",
});
const takeWords = count.sentence.trim().split(" ");
console.log(takeWords);
console.log(`Your sentence word count is: ${takeWords.length}`);

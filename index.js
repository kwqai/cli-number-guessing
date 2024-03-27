#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 2 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Please guess a number: ",
    },
]);
console.log(answer);
if (answer.userGuessednumber === randomNumber) {
    console.log("congratulation You guessed Right Number");
}
else {
    console.log("You Guessed Wrong Number");
}
/*
const randomNumber = 13;

const answer = await inquirer.prompt([
    {
    name: "userGuessednumber",
    type: "number",
    message: "Please guess a number: ",
    },

]);

console.log(answer);

if(answer.userGuessednumber === randomNumber) {
    console.log("congratulation You guessed Right Number")
    
} else {
    console.log("You Guessed Wrong Number")

}

*/ 

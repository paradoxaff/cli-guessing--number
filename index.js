import inquirer from "inquirer";
// 1) Computer Will generate a random number - Done.
// 2) User input for guessing - Done.
// 3) Compare user input with computer generated number and show result - Done.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}

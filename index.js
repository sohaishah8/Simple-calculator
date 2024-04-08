import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    { message: "select one of opertor to perform action", type: "list", name: "opertor", choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"], },
]);
// CONDITINAL STATMENT
if (answer.opertor === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.opertor === "SUBTRACTION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opertor === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opertor === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    "Please select correct opertor";
}

import inquirer from "inquirer";
async function main() {
    let answer = await inquirer.prompt([{
            type: "input",
            message: "Put your first number",
            name: "x",
        },
        {
            type: "input",
            message: "Put your Second number",
            name: "y",
        },
        {
            type: "list",
            name: "operator",
            message: "Select an operator to perform on the numbers.",
            choices: [
                { name: "Add", value: "add" },
                { name: "Subtract", value: "sub" },
                { name: "Multiply", value: "mul" },
                { name: "Divide", value: "div" }
            ]
        }
    ]);
    console.log(`Here is Your Answer ${answer.operator(answer.x, answer.y)}`);
}
main();

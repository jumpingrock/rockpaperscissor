const chalk = require('chalk');
const figlet = require('figlet');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

const form = ['Rock', 'Paper', 'Scissor'];
//const form = ['Rock', 'Paper', 'Scissor', 'Lizard', 'Spock']

//New game init begin here
console.log(chalk.green(figlet
    .textSync("Welcome to Rock Paper Scissors!", {horizontalLayout: 'half'})));

// rl.question('With Spock (y/n)? ', (ans) => {
//     var spock = ans;
//     var numChoice = 5;
// });
var spock = "N"; //set for no spock
var numChoice = 3;

choiceInput = (ifspock) => { //inform user of the choice avaliable
    console.log(chalk.yellow("Enter your numeric choice of form!"));
    console.log("1. ", form[0]);
    console.log("2. ", form[1]);
    console.log("3. ", form[2]);
    if(ifspock == "Y"){
        console.log("4. ", form[3]);
        console.log("5. ", form[4]);
    }
    console.log("q. ", "Quit");
}

randomNum = () => {

}

gamePlay = () => { // main game logic
    choiceInput(this.spock);
    rl.question('Your choice? ', (answer) => {
        // TDD can you register a choice
        //console.log(answer)
        if (answer = "q"){
            console.log(chalk.green("Thanks for playing! Good bye!"));
            rl.close();
        }
    });
    
}




gamePlay();





